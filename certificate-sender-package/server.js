import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { processCertificateRequest } from "./api/send-certificates.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const PORT = Number(process.env.API_PORT) || 3001;
const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.post("/api/send-certificates", (req, res) => {
  processCertificateRequest(req, res).catch((error) => {
    console.error("Certificate sender error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || "Internal server error" });
    } else if (!res.writableEnded) {
      res.write(
        `${JSON.stringify({
          type: "error",
          message: error.message || "Internal server error",
        })}\n`
      );
      res.end();
    }
  });
});

app.get("/api/health", (_req, res) => {
  const smtpReady = Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.FROM_EMAIL &&
      !String(process.env.SMTP_PASS).includes("PASTE_APP_PASSWORD")
  );

  res.json({
    ok: true,
    service: "certificate-sender",
    smtpReady,
    smtpUser: process.env.SMTP_USER || null,
  });
});

app.listen(PORT, () => {
  console.log(`Certificate API running at http://localhost:${PORT}`);
  console.log(`POST http://localhost:${PORT}/api/send-certificates`);
  console.log(
    `SMTP ready: ${Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)} (${process.env.SMTP_USER || "missing"})`
  );
});
