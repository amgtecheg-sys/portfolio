import React from "react";
import ProposalHeader from "./components/ProposalHeader";
import ProjectScope from "./components/ProjectScope";
import ProjectTimeline from "./components/ProjectTimeline";
import ProjectPhases from "./components/ProjectPhases";
import FinancialBreakdown from "./components/FinancialBreakdown";
import PaymentPlan from "./components/PaymentPlan";
import ProjectRisks from "./components/ProjectRisks";
import OutOfScope from "./components/OutOfScope";

export default function Harmonic() {
  return (
    <div dir="rtl" className="min-h-screen bg-brand-dark pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ProposalHeader />
        <ProjectScope />
        <ProjectTimeline />
        <ProjectPhases />
        <FinancialBreakdown />
        <PaymentPlan />
        <ProjectRisks />
        <OutOfScope />

        {/* Footer note */}
        <p className="text-center text-gray-600 text-xs mt-8">
          هذا المقترح سري ومعد حصرياً لمجموعة هارمونك الهندسية — AMG Tech © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
