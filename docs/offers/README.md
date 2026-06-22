# Project Offers — AMG Tech

Each technical proposal ("offer") rendered on the portfolio site has its own `.md` here.
These docs capture the **full content + numbers + decisions** of every offer so the
context is never lost (independent of the React code).

## How offers work in the codebase

- Each offer = a **route-only page** (no nav link, reachable only by URL).
- Lives under `src/pages/<OfferName>/` with a `data.js` (content/numbers) + section components.
- Sections (shared visual pattern): `ProposalHeader`, `ProjectScope`, `ProjectTimeline`,
  `ProjectPhases`, `FinancialBreakdown`, `PaymentPlan`, `ProjectRisks`, `OutOfScope`.
- All offers are **RTL Arabic**, dark theme, `brand-green` accent, framer-motion animations.
- Route registered in `src/App.jsx` as a child of `Layout`.

## Offers

| Offer | Route | Client | Base price | Doc |
|---|---|---|---|---|
| Harmonic Engineering Incubator | `/harmonic` | مجموعة هارمونك الهندسية | 310,104 EGP | [harmonic.md](harmonic.md) |
| ERP Super System | `/erp-super-system` | Generic (template) | 80,000 EGP | [erp-super-system.md](erp-super-system.md) |

## Adding a new offer (checklist)

1. `cp -r src/pages/ErpSuperSystem src/pages/<NewOffer>` (closest template — prop-driven, supports toggles).
2. Edit `data.js` content + numbers.
3. Register route in `src/App.jsx`.
4. Add a `docs/offers/<new-offer>.md` from this template + a row in the table above.
5. `npx vite build` to verify.
