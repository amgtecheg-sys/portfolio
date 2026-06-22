import React, { useState } from "react";
import ProposalHeader from "./components/ProposalHeader";
import ProjectScope from "./components/ProjectScope";
import ProjectTimeline from "./components/ProjectTimeline";
import ProjectPhases from "./components/ProjectPhases";
import FinancialBreakdown from "./components/FinancialBreakdown";
import PaymentPlan from "./components/PaymentPlan";
import ProjectRisks from "./components/ProjectRisks";
import OutOfScope from "./components/OutOfScope";
import { getProposalData, RISKS, OUT_OF_SCOPE, ASSUMPTIONS } from "./data";

export default function ErpSuperSystem() {
  const [mobile, setMobile] = useState(false);
  const data = getProposalData(mobile);

  return (
    <div dir="rtl" className="min-h-screen bg-brand-dark pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ProposalHeader info={data.info} mobile={mobile} onToggleMobile={() => setMobile((v) => !v)} />
        <ProjectScope items={data.scope} />
        <ProjectTimeline milestones={data.milestones} />
        <ProjectPhases phases={data.phases} />
        <FinancialBreakdown lines={data.financialLines} info={data.info} />
        <PaymentPlan milestones={data.payment} info={data.info} />
        <ProjectRisks risks={RISKS} />
        <OutOfScope outOfScope={OUT_OF_SCOPE} assumptions={ASSUMPTIONS} />

        {/* Footer note */}
        <p className="text-center text-gray-600 text-xs mt-8">
          هذا المقترح سري ومعدّ بواسطة AMG Tech © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
