"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { useSessionId } from "convex-helpers/react/sessions";
import { ArrowRight } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { getPages, getOpenItems } from "@/lib/onboarding/questionnaire";
import { getGuidedSteps, getGuidedProgress } from "@/lib/onboarding/guided-flow";
import { PreviewSessionProvider } from "./preview-session";
import { PortalShell } from "./portal-shell";
import { ReviewSummary } from "./onboarding-wizard";

export function PreviewDashboard() {
  return <PreviewSessionProvider><SavedPreviewDashboard /></PreviewSessionProvider>;
}

function SavedPreviewDashboard() {
  const [sessionId] = useSessionId();
  const draft = useQuery(api.onboardingPreview.getDraft, sessionId ? { sessionId } : "skip");
  if (!sessionId || draft === undefined) return <PortalShell preview><div className="ob-loading" role="status">Loading your saved workspace…</div></PortalShell>;

  const submitted = draft?.status === "submitted";
  const pages = draft ? getPages(draft.answers, draft.extraModules) : [];
  const openItems = draft ? getOpenItems(draft.answers, draft.extraModules) : [];
  const progress = draft ? getGuidedProgress(getGuidedSteps(pages, draft.answers), draft.answers, true) : null;
  const name = draft?.answers["P01.1"]?.value;

  return <PortalShell preview><main className="ob-dashboard">
    <div className="ob-dashboard-heading">
      <div><span className="ob-eyebrow">YOUR WORKSPACE</span><h1>Welcome{typeof name === "string" && name ? `, ${name}` : ""}.</h1><p>Your saved project brief and follow-ups in one place.</p></div>
      <span className="ob-status">{submitted ? "Submitted" : "Draft"}</span>
    </div>
    <div className="ob-dashboard-grid">
      <section className="ob-dashboard-card">
        <h2>{submitted ? "Your details are saved." : draft ? "Pick up where you left off." : "Let’s understand your project."}</h2>
        <p>{submitted ? "Your completed brief is stored in Convex. You can review your answers and update them whenever you need." : draft ? "Your progress is saved in Convex. Continue from your last question when you’re ready." : "Answer one question at a time to put your project brief together."}</p>
        {progress && <p>{progress.completed} of {progress.total} questions complete · {progress.percent}%</p>}
        {submitted && draft.submittedAt && <p>Submitted {new Date(draft.submittedAt).toLocaleDateString()}</p>}
        <Link href="/onboarding/preview" className="ob-link-button">{submitted ? "Review or update my brief" : draft ? "Continue onboarding" : "Start onboarding"}<ArrowRight size={16} /></Link>
      </section>
      <section className="ob-dashboard-card">
        <h2>{submitted ? "Your next steps" : "Finish your project brief"}</h2>
        <p>{submitted ? "Review the summary below and keep any open questions ready for your project discussion. Changes to your answers can be saved and submitted again." : "Complete your relevant questions, review the summary, and confirm your details to submit the brief."}</p>
        <p>Your brief is available in this browser. Project scope and activation still depend on the agency’s agreement and verification process.</p>
      </section>
    </div>
    {draft && <>
      <h2>Your project summary</h2>
      <ReviewSummary pages={pages} answers={draft.answers} editHref="/onboarding/preview" />
      <section className="ob-dashboard-card">
        <h2>Open questions and follow-ups</h2>
        {openItems.length ? <ul>{openItems.map(item => <li key={item.questionId}>{item.label} · {item.state}{item.detail ? ` · ${item.detail}` : ""}</li>)}</ul> : <p>No follow-up flags recorded. You can revisit your brief to add details.</p>}
      </section>
    </>}
  </main></PortalShell>;
}
