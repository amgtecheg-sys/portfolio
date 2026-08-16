import path from "path";
import multer from "multer";
import { readExcel } from "../utils/readExcel.js";
import {
  loadCertificateTemplate,
  generateCertificate,
  deleteTemporaryCertificate,
} from "../utils/generateCertificate.js";
import { createTransporter, sendMail } from "../utils/sendMail.js";
import { EMAIL_SUBJECT, EMAIL_MESSAGE } from "../utils/emailTemplate.js";

export const config = {
  api: {
    bodyParser: false,
  },
  maxDuration: 300,
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter(_req, file, cb) {
    const name = (file.originalname || "").toLowerCase();
    const ok =
      name.endsWith(".xlsx") ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.mimetype === "application/octet-stream";

    if (!ok) {
      return cb(new Error("Only .xlsx Excel files are allowed"));
    }
    return cb(null, true);
  },
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) reject(result);
      else resolve(result);
    });
  });
}

function writeEvent(res, payload) {
  res.write(`${JSON.stringify(payload)}\n`);
}

function getTemplatePath() {
  return path.join(process.cwd(), "src", "pdfs", "Certificate Attendance.pdf");
}

export async function processCertificateRequest(req, res) {
  const startedAt = Date.now();

  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (typeof res.flushHeaders === "function") {
    res.flushHeaders();
  }

  try {
    await runMiddleware(req, res, upload.single("excel"));
  } catch (error) {
    writeEvent(res, {
      type: "error",
      message: error.message || "Failed to upload Excel file",
    });
    return res.end();
  }

  const subject = EMAIL_SUBJECT;
  const message = EMAIL_MESSAGE;

  if (!req.file?.buffer) {
    writeEvent(res, { type: "error", message: "Excel file is required" });
    return res.end();
  }

  writeEvent(res, { type: "status", message: "Reading Excel..." });

  let students = [];
  try {
    students = readExcel(req.file.buffer);
  } catch (error) {
    writeEvent(res, {
      type: "error",
      message: error.message || "Failed to read Excel file",
    });
    return res.end();
  }

  if (students.length === 0) {
    const report = {
      total: 0,
      success: 0,
      failed: 0,
      failedEmails: [],
      processingTimeMs: Date.now() - startedAt,
    };
    writeEvent(res, {
      type: "done",
      message: "Completed.",
      report,
    });
    return res.end();
  }

  let transporter;
  let templateDoc;

  try {
    transporter = createTransporter();
    writeEvent(res, { type: "status", message: "Generating Certificate..." });
    templateDoc = await loadCertificateTemplate(getTemplatePath());
  } catch (error) {
    writeEvent(res, {
      type: "error",
      message: error.message || "Failed to initialize certificate sender",
    });
    return res.end();
  }

  let success = 0;
  const failedEmails = [];

  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
    let tempPath = null;

    try {
      writeEvent(res, {
        type: "progress",
        message: "Generating Certificate...",
        current: index + 1,
        total: students.length,
        studentName: student.name,
        studentEmail: student.email,
      });

      tempPath = await generateCertificate(templateDoc, student.name);

      writeEvent(res, {
        type: "progress",
        message: "Sending Email...",
        current: index + 1,
        total: students.length,
        studentName: student.name,
        studentEmail: student.email,
      });

      await sendMail(transporter, {
        to: student.email,
        subject,
        message,
        attachmentPath: tempPath,
        attachmentName: `Certificate - ${student.name}.pdf`,
      });

      success += 1;
    } catch (error) {
      failedEmails.push(student.email);
      writeEvent(res, {
        type: "item_error",
        message: error.message || "Failed to send certificate",
        current: index + 1,
        total: students.length,
        studentName: student.name,
        studentEmail: student.email,
      });
    } finally {
      await deleteTemporaryCertificate(tempPath);
    }
  }

  const report = {
    total: students.length,
    success,
    failed: failedEmails.length,
    failedEmails,
    processingTimeMs: Date.now() - startedAt,
  };

  writeEvent(res, {
    type: "done",
    message: "Completed.",
    report,
  });

  return res.end();
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  return processCertificateRequest(req, res);
}
