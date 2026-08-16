# Certificate Sender — دليل النظام والـ Workflow

## ايه اللي اتعمل؟

نظام كامل لإرسال شهادات حضور من صفحة واحدة:

1. ترفع Excel فيه أسماء وإيميلات الطلبة
2. تكتب عنوان ونص الإيميل
3. النظام يعمل شهادة PDF لكل طالب باسمه
4. يبعت الإيميل بالمرفق
5. يعرض Progress + تقرير نهائي

الصفحة: `/send-certificate`

---

## هيكل الملفات

```text
portfolio-main/
├── src/Pages/SendCertificate.jsx          صفحة الواجهة
├── src/Components/CertificateUploader.jsx فورم الرفع + Progress + التقرير
├── api/send-certificates.js               الـ API الرئيسي (Vercel + Local)
├── server.js                              سيرفر محلي على port 3001
├── utils/readExcel.js                     قراءة Excel
├── utils/generateCertificate.js           كتابة الاسم على الشهادة
├── utils/sendMail.js                      إرسال الإيميل SMTP
├── src/pdfs/Certificate Attendance.pdf    قالب الشهادة (متتعدّلش)
├── .env                                   بيانات SMTP (سري — متترفعش)
├── .env.example                           مثال الإعدادات
└── vercel.json                            إعدادات النشر على Vercel
```

---

## الـ Workflow خطوة بخطوة

```text
المستخدم يفتح /send-certificate
        ↓
يرفع Excel + Subject + Message
        ↓
Frontend يبعت POST → /api/send-certificates
        ↓
Backend يقرأ Excel (عمود A اسم / عمود B إيميل)
        ↓
لكل طالب واحد واحد:
   1) Generating Certificate...  (pdf-lib يكتب الاسم)
   2) Sending Email...           (nodemailer يبعت PDF)
   3) يحذف ملف PDF المؤقت
        ↓
لو طالب فشل → يكمل الباقي (مش بيوقف)
        ↓
يرجع تقرير: total / success / failed / failedEmails
```

---

## شكل ملف Excel

بدون هيدر:

| Column A (الاسم) | Column B (الإيميل) |
|---|---|
| Ahmed Gomaa Elgazar | Aelgazar005@gmail.com |
| Mohammed Taha | mohammedtaha.7m@gmail.com |

- الصفوف الفاضية تتجاهل
- الإيميلات الغلط تتجاهل

---

## إعدادات الإيميل (.env)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
FROM_EMAIL="Certificate Sender <your-email@gmail.com>"
API_PORT=3001
```

ملاحظات Gmail:
1. فعّل 2-Step Verification
2. اعمل App Password من: https://myaccount.google.com/apppasswords
3. حط الـ 16 حرف في `SMTP_PASS` (من غير مسافات أو بمسافات — الاتنين ينفعوا لو اتشالوا)

---

## تشغيل محلي

من فولدر المشروع `portfolio-main/portfolio-main`:

ترمينال 1 — الـ API:
```bash
npm run dev:api
```

ترمينال 2 — الواجهة:
```bash
npm run dev
```

افتح:
- الصفحة: http://localhost:5173/send-certificate
- فحص السيرفر: http://localhost:3001/api/health

مهم: الصفحة على 5173 مش 3001.  
3001 = API فقط (POST). فتحه في المتصفح بيعمل GET وبيظهر Cannot GET.

---

## تحريك اسم الطالب على الشهادة

عدّل الثوابت في أعلى `utils/generateCertificate.js`:

| الثابت | المعنى |
|---|---|
| NAME_X | مركز الاسم أفقياً |
| NAME_Y | ارتفاع الاسم من تحت الصفحة |
| FONT_SIZE | حجم الخط الابتدائي |
| MIN_FONT_SIZE | أصغر حجم لو الاسم طويل |
| MAX_TEXT_WIDTH | أقصى عرض قبل تصغير الخط |

القالب الأصلي `Certificate Attendance.pdf` مش بيتعدّل أبدًا.  
كل طالب بياخد نسخة مؤقتة وبعد الإرسال بتتحذف.

---

## المكتبات المستخدمة

| Package | الاستخدام |
|---|---|
| xlsx | قراءة Excel |
| pdf-lib | كتابة الاسم على PDF |
| nodemailer | إرسال الإيميل |
| multer | استقبال ملف الرفع |
| validator | التحقق من الإيميل |
| express + cors + dotenv | السيرفر المحلي فقط |

---

## النشر على Vercel

1. ارفع الكود على GitHub
2. في Vercel → Environment Variables حط نفس قيم `.env` (من غير API_PORT)
3. Redeploy
4. افتح: `https://your-domain/send-certificate`

`vercel.json` بيربط:
- SPA routes → `index.html`
- `/api/send-certificates` → Serverless Function
- تضمين ملف الشهادة داخل الـ Function

---

## استجابة الـ API (Live Progress)

السيرفر بيبعت سطر JSON كل حدث (NDJSON):

```json
{"type":"status","message":"Reading Excel..."}
{"type":"progress","message":"Generating Certificate...","current":1,"total":4}
{"type":"progress","message":"Sending Email...","current":1,"total":4}
{"type":"done","message":"Completed.","report":{"total":4,"success":4,"failed":0,"failedEmails":[]}}
```

التقرير النهائي:

```json
{
  "total": 4,
  "success": 3,
  "failed": 1,
  "failedEmails": ["bad@example.com"],
  "processingTimeMs": 12500
}
```

---

## مشاكل شائعة

| المشكلة | الحل |
|---|---|
| Missing SMTP configuration | تأكد `.env` موجود وشغّل `npm run dev:api` من جديد بعد أي تعديل |
| Cannot GET /api/send-certificates | ده طبيعي — استخدم الصفحة على 5173 |
| App passwords not available | فعّل 2-Step Verification الأول |
| npm ENOENT package.json | ادخل فولدر `portfolio-main/portfolio-main` مش الفولدر الأب |
