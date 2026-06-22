# Offer — ERP Super System

- **Route:** `/erp-super-system` (route-only, no nav link)
- **Code:** `src/pages/ErpSuperSystem/`
- **Client:** Generic / template (no client name; footer = AMG Tech only)
- **Type:** Fixed-price technical proposal (Harmonic clone, prop-driven + interactive toggle)
- **Currency:** EGP
- **Status:** Created 2026-06-22

## Product summary

نظام ERP متكامل لإدارة الأعمال — منصة واحدة سهلة الاستخدام:
- **CRM** — العملاء، الصفقات، المبيعات
- **HR** — الموظفون، الحضور، الإجازات، الرواتب
- **ERP** — الحسابات، الفواتير، المخزون، المشتريات
- **التقارير** — لوحات تحكم لحظية + Admin Panel

## Scope / platforms

- **Core (priced):** Web platform + Admin Panel.
- **Mobile app (iOS + Android):** OPTIONAL add-on, toggle on the page.

## Pricing — base 80,000 EGP (FLAT, no contingency)

Intentionally low: first client + plan to resell the app. Future add-ons priced separately.

| Code | Item | Qty | Unit | Unit price | Total |
|---|---|---|---|---|---|
| P1 | تحليل المتطلبات وتصميم UI/UX | 12 | يوم | 750 | 9,000 |
| P2 | تطوير الـ Backend و API (CRM, HR, محاسبة, مخزون) | 30 | يوم | 1,000 | 30,000 |
| P3-A | تطوير الواجهة الأمامية لمنصة الويب | 16 | يوم | 1,000 | 16,000 |
| P3-B | لوحة التحكم الإدارية (Admin Panel) | 9 | يوم | 1,000 | 9,000 |
| P3-C | التقارير ولوحات التحكم اللحظية | 6 | يوم | 1,000 | 6,000 |
| P4-A | اختبار الجودة والنشر | 8 | يوم | 500 | 4,000 |
| PM | إدارة المشروع | 8 | أسبوع | 500 | 4,000 |
| INF | استضافة سحابية (تقدير 6 أشهر) | 1 | مقطوع | 2,000 | 2,000 |
| | **الإجمالي** | | | | **80,000** |

## Mobile add-on (interactive toggle)

Toggle lives in `ProposalHeader`. When ON it recomputes the whole proposal:

- **Financial:** appends line `MOB` — تطوير تطبيق الموبايل (iOS + Android), 50 يوم × 2,000 = **+100,000 EGP** → total **180,000 EGP**.
- **Timeline:** inserts a mobile milestone before deploy and extends duration **~2 months** (10–13 → **18–21 weeks**).
- **Phases:** injects task `P3-T04` (mobile dev, 300h / 50d) into phase 3; phase-3 duration → 69–76 يوم.
- **Scope:** appends a mobile scope card.
- **Payment:** amounts recompute off the new total.

Constants: `BASE_SUBTOTAL_EGP = 80000`, `MOBILE_ADDON_EGP = 100000` in `data.js`.

## Timeline — ~2–3 months base (10–13 weeks)

1. تحليل المتطلبات والتصميم — أسابيع ~0–2
2. تطوير الـ Backend و API — أسابيع ~2–7
3. الواجهة الأمامية + لوحة التحكم + التقارير — أسابيع ~7–11
4. الاختبار، النشر، والدعم — أسابيع ~11–13

(Mobile ON adds milestone "تطوير تطبيق الموبايل" أسابيع ~11–19, shifts deploy to ~19–21.)

## Phases (accordion, with task tables)

1. **تحليل المتطلبات والتصميم** (10–14 يوم) — 3 tasks
2. **تطوير الـ Backend و API** (25–34 يوم) — 5 tasks (CRM, HR, محاسبة/مخزون/مشتريات, أمان)
3. **الواجهة الأمامية ولوحة التحكم والتقارير** (19–26 يوم) — 3 tasks (+mobile when toggled)
4. **الاختبار، النشر، والدعم** (13–17 يوم) — 4 tasks

## Payment plan (% of total)

| # | Milestone | % | Base amount | With mobile |
|---|---|---|---|---|
| 1 | توقيع العقد | 30% | 24,000 | 54,000 |
| 2 | اعتماد التصميم + تسليم API | 25% | 20,000 | 45,000 |
| 3 | تسليم الواجهات ولوحة التحكم | 30% | 24,000 | 54,000 |
| 4 | النشر النهائي والتدريب | 15% | 12,000 | 27,000 |

## Risks (5)

requirements change · client data delays · financial-module complexity (accounting/payroll) ·
performance at scale · security of sensitive data.

## Out of scope (5)

3rd-party licenses · social/marketing · extra modules not listed · maintenance after initial support ·
initial data entry / migration from legacy systems (priced separately on request).

## Assumptions (5)

client provides requirements/data on time · access to existing systems/APIs · fast client review team ·
current price is introductory (first client), excludes future add-ons · estimates exclude taxes/gov fees.

## Decisions log

- 2026-06-22: Page type = proposal (Harmonic clone), not product marketing page.
- 2026-06-22: Flat 80k, no contingency "for now".
- 2026-06-22: Mobile = header toggle that mutates table/timeline/phases/payment live (+100k, +2 months).
- 2026-06-22: Generic client; resale-oriented; add-ons priced later.
