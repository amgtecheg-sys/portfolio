// ERP Super System proposal — data model.
// All numbers derive from a single source so the "mobile app" toggle
// can recompute totals / timeline / payments consistently.

export const MOBILE_ADDON_EGP = 100000;
export const BASE_SUBTOTAL_EGP = 80000;

const PROJECT_BASE = {
  titleAr: "نظام ERP متكامل لإدارة الأعمال — CRM · HR · محاسبة · مخزون",
  summaryAr:
    "منصة واحدة سهلة الاستخدام تجمع كل ما تحتاجه لإدارة شركتك وتنظيم أعمالك وزيادة الإنتاجية: إدارة العملاء والصفقات والمبيعات (CRM)، وإدارة الموظفين والحضور والإجازات والرواتب (HR)، وإدارة الحسابات والفواتير والمخزون والمشتريات (ERP)، بالإضافة إلى تقارير ولوحات تحكم لحظية تساعدك على اتخاذ قرارات أفضل. يُنفَّذ المشروع عبر 4 مراحل تقنية رئيسية تشمل منصة ويب متكاملة ولوحة تحكم إدارية.",
};

// ── Scope ──────────────────────────────────────────────────────────
const SCOPE_BASE = [
  {
    titleAr: "إدارة العملاء والمبيعات (CRM)",
    itemsAr: [
      "إدارة قاعدة بيانات العملاء وجهات الاتصال وتصنيفهم.",
      "تتبّع الصفقات وخطوط البيع (Pipeline) ومراحل التفاوض.",
      "متابعة المبيعات وعروض الأسعار وأوامر البيع.",
    ],
  },
  {
    titleAr: "إدارة الموارد البشرية (HR)",
    itemsAr: [
      "ملفات الموظفين والهيكل التنظيمي.",
      "تسجيل الحضور والانصراف وإدارة الإجازات.",
      "احتساب الرواتب والبدلات والخصومات (Payroll).",
    ],
  },
  {
    titleAr: "الحسابات والمخزون (ERP)",
    itemsAr: [
      "إدارة الحسابات وإصدار الفواتير وسندات القبض والصرف.",
      "إدارة المخزون والأصناف وحركة الدخول والخروج.",
      "إدارة المشتريات والموردين وأوامر الشراء.",
    ],
  },
  {
    titleAr: "التقارير ولوحة التحكم",
    itemsAr: [
      "لوحات تحكم لحظية (Dashboards) لمؤشرات الأداء.",
      "تقارير مالية وتشغيلية قابلة للتصدير.",
      "لوحة تحكم إدارية (Admin Panel) للصلاحيات وإدارة النظام.",
    ],
  },
];

const SCOPE_MOBILE = {
  titleAr: "تطبيق الموبايل (إضافة اختيارية)",
  itemsAr: [
    "تطبيق iOS و Android متصل بنفس واجهات الـ API.",
    "وصول لحظي للوحات التحكم والإشعارات أثناء التنقل.",
    "يُضاف بعقد منفصل ويمدّد مدة المشروع بنحو شهرين.",
  ],
};

// ── Timeline milestones ────────────────────────────────────────────
const MILESTONES_BASE = [
  {
    titleAr: "تحليل المتطلبات والتصميم",
    weeksAr: "الأسابيع ~0–2",
    descAr: "فهم شامل لاحتياجات الشركة عبر الوحدات، وتصميم تجربة وواجهة استخدام سهلة وواضحة.",
    deliverablesAr: ["SRS معتمد", "ERD ونموذج بيانات", "تصاميم UI/UX (Web + Admin)", "وثيقة بنية النظام"],
  },
  {
    titleAr: "تطوير الواجهة الخلفية و API",
    weeksAr: "الأسابيع ~2–7",
    descAr: "بناء الأساس التقني وواجهات الـ API لوحدات CRM و HR والمحاسبة والمخزون والمشتريات.",
    deliverablesAr: ["مستودع كود + CI", "OpenAPI/Swagger", "وحدات: عملاء، موظفون، محاسبة، مخزون", "صلاحيات Admin"],
  },
  {
    titleAr: "الواجهة الأمامية ولوحة التحكم والتقارير",
    weeksAr: "الأسابيع ~7–11",
    descAr: "بناء منصة الويب المتجاوبة ولوحة التحكم الإدارية وربطها بالـ API مع لوحات التقارير اللحظية.",
    deliverablesAr: ["واجهة ويب متجاوبة", "لوحة تحكم إدارية", "لوحات تقارير لحظية", "تقرير أداء أولي"],
  },
  {
    titleAr: "الاختبار، النشر، والدعم",
    weeksAr: "الأسابيع ~11–13",
    descAr: "ضمان الجودة، النشر على بيئة الإنتاج، وتقديم التدريب والدعم الأولي.",
    deliverablesAr: ["تقرير QA", "نشر Production", "دليل مستخدم", "دعم ما بعد الإطلاق"],
  },
];

const MILESTONE_MOBILE = {
  titleAr: "تطوير تطبيق الموبايل (iOS + Android)",
  weeksAr: "الأسابيع ~11–19",
  descAr: "بناء تطبيق الموبايل المتصل بنفس الـ API، واختباره على الأجهزة المختلفة ونشره على المتاجر.",
  deliverablesAr: ["تطبيق iOS + Android", "ربط بالـ API", "اختبار على الأجهزة", "نشر على المتاجر"],
};

// ── Phases (accordion) ─────────────────────────────────────────────
const PHASES_BASE = [
  {
    number: 1,
    titleAr: "تحليل المتطلبات والتصميم",
    durationAr: "10–14 يوم",
    dependencyAr: "لا توجد تبعيات سابقة، هذه هي المرحلة الأولى.",
    goalsAr: [
      "جمع وتوثيق متطلبات وحدات CRM و HR و ERP",
      "تصميم مخططات تدفق العمل وهياكل البيانات",
      "إنشاء تصميمات UI/UX للمنصة ولوحة التحكم",
      "الحصول على موافقة العميل على التصميمات",
    ],
    tasks: [
      { code: "P1-T01", priority: "high", titleAr: "ورش عمل لجمع المتطلبات", hours: 18, days: 3, riskAr: "عدم وضوح المتطلبات قد يؤدي إلى إعادة عمل لاحقاً." },
      { code: "P1-T02", priority: "high", titleAr: "تحليل وتصميم قاعدة البيانات", hours: 24, days: 4, riskAr: "تصميم غير فعال قد يؤثر على أداء النظام." },
      { code: "P1-T03", priority: "high", titleAr: "تصميم UI/UX للمنصة ولوحة التحكم", hours: 30, days: 5, riskAr: "عدم رضا العميل عن التصميم قد يؤخر بدء التطوير." },
    ],
  },
  {
    number: 2,
    titleAr: "تطوير الواجهة الخلفية (Backend) و API",
    durationAr: "25–34 يوم",
    dependencyAr: "تعتمد على اكتمال مرحلة التحليل والتصميم (المرحلة 1).",
    goalsAr: [
      "تطوير وحدات CRM و HR والمحاسبة والمخزون والمشتريات",
      "بناء API قوي وآمن لجميع الخدمات",
      "تأمين النظام ضد الثغرات الشائعة",
      "إعداد بيئات التطوير والاختبار",
    ],
    tasks: [
      { code: "P2-T01", priority: "medium", titleAr: "إعداد بيئة التطوير والخوادم", hours: 18, days: 3, riskAr: "مشاكل الإعداد قد تؤخر بدء التطوير." },
      { code: "P2-T02", priority: "high", titleAr: "تطوير API لوحدة CRM والمبيعات", hours: 48, days: 8, riskAr: "نقص الاختبار قد يسبب مشاكل تكامل." },
      { code: "P2-T03", priority: "high", titleAr: "تطوير API لوحدة HR والرواتب", hours: 48, days: 8, riskAr: "تعقيد احتساب الرواتب قد يتطلب وقتاً إضافياً." },
      { code: "P2-T04", priority: "high", titleAr: "تطوير API للمحاسبة والمخزون والمشتريات", hours: 60, days: 10, riskAr: "ترابط الوحدات المالية قد يزيد التعقيد." },
      { code: "P2-T05", priority: "high", titleAr: "تطبيق إجراءات الأمان والصلاحيات", hours: 30, days: 5, riskAr: "إهمال الأمان قد يعرّض النظام للخطر." },
    ],
  },
  {
    number: 3,
    titleAr: "الواجهة الأمامية ولوحة التحكم والتقارير",
    durationAr: "19–26 يوم",
    dependencyAr: "تعتمد على اكتمال مرحلة تطوير الـ Backend و API (المرحلة 2).",
    goalsAr: [
      "تطوير واجهة ويب متجاوبة وجذابة",
      "بناء لوحة التحكم الإدارية (Admin Panel)",
      "بناء لوحات التقارير اللحظية",
      "ربط الواجهات بالـ API",
    ],
    tasks: [
      { code: "P3-T01", priority: "high", titleAr: "تطوير الواجهة الأمامية لمنصة الويب", hours: 96, days: 16, riskAr: "توافق المتصفحات قد يتطلب جهداً إضافياً." },
      { code: "P3-T02", priority: "high", titleAr: "تطوير لوحة التحكم الإدارية", hours: 54, days: 9, riskAr: "تعقيد الصلاحيات قد يزيد وقت التطوير." },
      { code: "P3-T03", priority: "medium", titleAr: "التقارير ولوحات التحكم اللحظية", hours: 36, days: 6, riskAr: "حجم البيانات قد يؤثر على أداء التقارير." },
    ],
  },
  {
    number: 4,
    titleAr: "الاختبار، النشر، والدعم",
    durationAr: "13–17 يوم",
    dependencyAr: "تعتمد على اكتمال مرحلة الواجهة الأمامية (المرحلة 3).",
    goalsAr: [
      "إجراء اختبارات شاملة لضمان جودة النظام",
      "النشر على بيئة الإنتاج",
      "تدريب فريق العميل",
      "تقديم دعم فني أولي",
    ],
    tasks: [
      { code: "P4-T01", priority: "high", titleAr: "اختبار الجودة الشامل (QA)", hours: 30, days: 5, riskAr: "اكتشاف أخطاء حرجة متأخرة قد يؤخر الإطلاق." },
      { code: "P4-T02", priority: "high", titleAr: "النشر على بيئة الإنتاج", hours: 18, days: 3, riskAr: "مشاكل غير متوقعة أثناء النشر." },
      { code: "P4-T03", priority: "medium", titleAr: "التدريب ووثائق التسليم", hours: 12, days: 2, riskAr: "نقص التدريب قد يؤثر على كفاءة الاستخدام." },
      { code: "P4-T04", priority: "high", titleAr: "الدعم الفني الأولي والمراقبة", hours: 18, days: 3, riskAr: "ظهور مشكلات بعد الإطلاق يتطلب استجابة سريعة." },
    ],
  },
];

// Mobile task injected into phase 3 when the add-on is enabled.
const PHASE3_MOBILE_TASK = {
  code: "P3-T04",
  priority: "high",
  titleAr: "تطوير تطبيق الموبايل (iOS + Android)",
  hours: 300,
  days: 50,
  riskAr: "توافق الأجهزة ومتطلبات المتاجر قد يتطلب جهداً ووقتاً إضافياً (~شهرين).",
};

// ── Financial lines ────────────────────────────────────────────────
const FINANCIAL_BASE = [
  { code: "P1", category: "تصميم", titleAr: "تحليل المتطلبات وتصميم UI/UX", qty: 12, unit: "يوم", unitPrice: 750, total: 9000 },
  { code: "P2", category: "تطوير", titleAr: "تطوير الـ Backend و API (CRM, HR, محاسبة, مخزون)", qty: 30, unit: "يوم", unitPrice: 1000, total: 30000 },
  { code: "P3-A", category: "تطوير", titleAr: "تطوير الواجهة الأمامية لمنصة الويب", qty: 16, unit: "يوم", unitPrice: 1000, total: 16000 },
  { code: "P3-B", category: "تطوير", titleAr: "لوحة التحكم الإدارية (Admin Panel)", qty: 9, unit: "يوم", unitPrice: 1000, total: 9000 },
  { code: "P3-C", category: "تطوير", titleAr: "التقارير ولوحات التحكم اللحظية", qty: 6, unit: "يوم", unitPrice: 1000, total: 6000 },
  { code: "P4-A", category: "جودة", titleAr: "اختبار الجودة والنشر", qty: 8, unit: "يوم", unitPrice: 500, total: 4000 },
  { code: "PM", category: "إدارة", titleAr: "إدارة المشروع", qty: 8, unit: "أسبوع", unitPrice: 500, total: 4000 },
  { code: "INF", category: "بنية تحتية", titleAr: "استضافة سحابية (تقدير 6 أشهر)", qty: 1, unit: "مقطوع", unitPrice: 2000, total: 2000 },
];

const FINANCIAL_MOBILE = {
  code: "MOB",
  category: "تطوير",
  titleAr: "تطوير تطبيق الموبايل (iOS + Android) — إضافة اختيارية",
  qty: 50,
  unit: "يوم",
  unitPrice: 2000,
  total: MOBILE_ADDON_EGP,
};

// ── Payment plan (percentages → amounts computed from total) ────────
const PAYMENT_PERCENTS = [
  { percent: 30, milestoneAr: "عند توقيع العقد وبدء المشروع", timingAr: "عند توقيع العقد" },
  { percent: 25, milestoneAr: "بعد اعتماد التصميم وتسليم الـ API للاختبار", timingAr: "عند اعتماد UI/UX و API" },
  { percent: 30, milestoneAr: "بعد تسليم الواجهات ولوحة التحكم للاختبار", timingAr: "عند تسليم الواجهات للاختبار" },
  { percent: 15, milestoneAr: "بعد النشر النهائي والتدريب", timingAr: "عند النشر النهائي والتدريب" },
];

export const RISKS = [
  { riskAr: "عدم وضوح أو تغيّر متطلبات العميل أثناء المشروع.", mitigationAr: "ورش عمل مكثفة في البداية، توثيق دقيق، وموافقة خطية. أي تغييرات لاحقة تُدار كـ Change Request." },
  { riskAr: "تأخير في تقديم البيانات أو المحتوى من قبل العميل.", mitigationAr: "جدول زمني واضح لتسليم البيانات وتواصل مستمر للتذكير بالمواعيد النهائية." },
  { riskAr: "تعقيد منطق الأعمال في الوحدات المالية (محاسبة/رواتب).", mitigationAr: "تحليل دقيق في المرحلة الأولى ووقت كافٍ للاختبار قبل الإطلاق." },
  { riskAr: "مشاكل أداء عند زيادة حجم البيانات أو عدد المستخدمين.", mitigationAr: "تطبيق أفضل الممارسات، فهرسة قواعد البيانات، واختبارات أداء قبل الإطلاق." },
  { riskAr: "مخاطر أمنية متعلقة بالبيانات الحساسة (مالية/رواتب).", mitigationAr: "تطبيق صلاحيات دقيقة، تشفير البيانات الحساسة، ومراجعة أمنية قبل النشر." },
];

export const OUT_OF_SCOPE = [
  "شراء تراخيص برامج أو أدوات طرف ثالث غير مذكورة في المقترح.",
  "إدارة حسابات السوشيال ميديا أو حملات التسويق الرقمي.",
  "تطوير أي وحدات أو وظائف إضافية غير مذكورة في نطاق العمل.",
  "صيانة أو دعم النظام بعد فترة الدعم الأولي المتفق عليها.",
  "إدخال البيانات الأولية أو ترحيل البيانات من أنظمة قديمة (يُسعّر منفصلاً عند الطلب).",
];

export const ASSUMPTIONS = [
  "سيتم توفير جميع المتطلبات والبيانات من قبل العميل في الوقت المحدد.",
  "سيتم توفير الوصول إلى أي أنظمة أو APIs حالية مطلوبة للتكامل.",
  "سيتم توفير فريق مراجعة واعتماد سريع وفعّال من جانب العميل.",
  "السعر الحالي تمهيدي (أول عميل) ولا يشمل الإضافات المستقبلية التي تُسعّر منفصلاً.",
  "التقديرات المالية لا تشمل أي ضرائب أو رسوم حكومية قد تنطبق.",
];

const fmt = (n) => n.toLocaleString("ar-EG");

// Build the full proposal data for the current toggle state.
export function getProposalData(mobile) {
  const subtotal = BASE_SUBTOTAL_EGP + (mobile ? MOBILE_ADDON_EGP : 0);
  const total = subtotal;

  const financialLines = mobile ? [...FINANCIAL_BASE, FINANCIAL_MOBILE] : [...FINANCIAL_BASE];

  const scope = mobile ? [...SCOPE_BASE, SCOPE_MOBILE] : [...SCOPE_BASE];

  // Timeline: insert mobile milestone before the final (deploy) phase and shift it.
  let milestones = [...MILESTONES_BASE];
  if (mobile) {
    milestones = [
      ...MILESTONES_BASE.slice(0, 3),
      MILESTONE_MOBILE,
      { ...MILESTONES_BASE[3], weeksAr: "الأسابيع ~19–21" },
    ];
  }

  // Phases: inject mobile task into phase 3 when enabled.
  const phases = PHASES_BASE.map((p) =>
    mobile && p.number === 3 ? { ...p, tasks: [...p.tasks, PHASE3_MOBILE_TASK], durationAr: "69–76 يوم" } : p
  );

  const payment = PAYMENT_PERCENTS.map((m) => ({
    ...m,
    amount: Math.round((total * m.percent) / 100),
  }));

  const info = {
    ...PROJECT_BASE,
    subtotalEGP: subtotal,
    totalEGP: total,
    durationWeeks: mobile ? "18–21" : "10–13",
    modulesCount: 4,
    platformsAr: mobile ? "ويب + لوحة تحكم + موبايل" : "ويب + لوحة تحكم",
  };

  return { info, scope, milestones, phases, financialLines, payment, mobile };
}

export { fmt };
