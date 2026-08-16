import nodemailer from "nodemailer";

export function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass || !process.env.FROM_EMAIL) {
    throw new Error(
      "Missing SMTP configuration. Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL"
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendMail(transporter, { to, subject, message, attachmentPath, attachmentName }) {
  const from = process.env.FROM_EMAIL;

  await transporter.sendMail({
    from,
    to,
    subject,
    text: message,
    html: `<div style="font-family: Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(message)}</div>`,
    attachments: [
      {
        filename: attachmentName || "Certificate.pdf",
        path: attachmentPath,
        contentType: "application/pdf",
      },
    ],
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
