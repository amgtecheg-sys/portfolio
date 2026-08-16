import fs from "fs/promises";
import os from "os";
import path from "path";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb } from "pdf-lib";

const NAME_X = 745.56;
const NAME_Y = 470;
const FONT_SIZE = 48;
const MIN_FONT_SIZE = 16;
const MAX_TEXT_WIDTH = 1000;
const TEXT_COLOR = rgb(0, 0, 0);

const CAIRO_BOLD_PATH = path.join(
  process.cwd(),
  "src",
  "fonts",
  "Cairo-Bold.ttf"
);

export async function generateCertificate(templateDoc, studentName) {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);
  const [page] = await pdfDoc.copyPages(templateDoc, [0]);
  pdfDoc.addPage(page);

  const cairoBoldBytes = await fs.readFile(CAIRO_BOLD_PATH);
  const font = await pdfDoc.embedFont(cairoBoldBytes, { subset: true });

  let fontSize = FONT_SIZE;
  let textWidth = font.widthOfTextAtSize(studentName, fontSize);

  while (textWidth > MAX_TEXT_WIDTH && fontSize > MIN_FONT_SIZE) {
    fontSize -= 1;
    textWidth = font.widthOfTextAtSize(studentName, fontSize);
  }

  page.drawText(studentName, {
    x: NAME_X - textWidth / 2,
    y: NAME_Y,
    size: fontSize,
    font,
    color: TEXT_COLOR,
  });

  const pdfBytes = await pdfDoc.save();
  const safeName = studentName.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40);
  const tmpPath = path.join(
    os.tmpdir(),
    `certificate-${safeName}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.pdf`
  );

  await fs.writeFile(tmpPath, pdfBytes);
  return tmpPath;
}

export async function loadCertificateTemplate(templatePath) {
  const bytes = await fs.readFile(templatePath);
  return PDFDocument.load(bytes, { ignoreEncryption: true });
}

export async function deleteTemporaryCertificate(filePath) {
  if (!filePath) return;

  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error?.code !== "ENOENT") {
      console.warn("Failed to delete temporary certificate:", filePath, error.message);
    }
  }
}
