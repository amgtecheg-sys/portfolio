import * as XLSX from "xlsx";
import validator from "validator";

export function readExcel(buffer) {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];

  if (!sheetName) {
    return [];
  }

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
    blankrows: false,
  });

  const students = [];

  for (const row of rows) {
    if (!Array.isArray(row) || row.length === 0) continue;

    const name = String(row[0] ?? "").trim();
    const email = String(row[1] ?? "").trim();

    if (!name || !email) continue;
    if (!validator.isEmail(email)) continue;

    students.push({ name, email });
  }

  return students;
}
