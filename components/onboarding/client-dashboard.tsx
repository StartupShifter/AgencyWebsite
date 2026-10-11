"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useConvexAuth, useQuery } from "convex/react";
import { ArrowRight } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { PortalShell } from "./portal-shell";
import { EngagementSummary, ReviewSummary } from "./onboarding-wizard";
import { getPages, getOpenItems } from "@/lib/onboarding/questionnaire";

export function ClientDashboard({ name }: { name: string }) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const mine = useQuery(api.onboarding.getMine, isAuthenticated ? {} : "skip");
  useEffect(() => { if (!isLoading && !isAuthenticated) router.replace("/login"); }, [isLoading, isAuthenticated, router]);
  if (isLoading || mine === undefined) return <PortalShell><div className="ob-loading" role="status">Loading your workspace…</div></PortalShell>;
  if (!mine) return <PortalShell><div className="ob-loading">Your session has ended. <Link href="/login">Sign in again</Link>.</div></PortalShell>;
  const draft = mine.draft;
  const submitted = draft?.status === "submitted";
  const pages = draft ? getPages(draft.answers, draft.extraModules) : [];
  const openItems = draft ? getOpenItems(draft.answers, draft.extraModules) : [];
  return <PortalShell><main className="ob-dashboard"><div className="ob-dashboard-heading"><div><span className="ob-eyebrow">YOUR CLIENT WORKSPACE</span><h1>Welcome{name ? `, ${name}` : ""}.</h1><p>Your project brief, next steps, and confirmed engagement in one place.</p></div><span className="ob-status">{!draft || !submitted ? "Draft" : mine.workspaceReady ? "Ready for client workspace" : "Awaiting prerequisites"}</span></div><div className="ob-dashboard-grid"><section className="ob-dashboard-card"><h2>{submitted ? "Your details are saved." : draft ? "Pick up where you left off." : "Let’s understand your project."}</h2><p>{submitted ? mine.workspaceReady ? "Your verified project prerequisites are complete. The agency can arrange the agreed next steps." : "Your onboarding details are submitted. The items listed alongside still need verification before your project workspace can activate." : draft ? `Your answers are saved. Continue your ${pages.length}-page route, or revisit an earlier topic.` : "Start with your business, then shape the questions around the work you need. You can save progress and return later."}</p>{submitted && draft.submittedAt && <p>Submitted {new Date(draft.submittedAt).toLocaleDateString()} · Submission records answers and does not itself start delivery.</p>}<Link href="/onboarding" className="ob-link-button">{submitted ? "Review or update my brief" : draft ? "Continue onboarding" : "Start onboarding"}<ArrowRight size={16} /></Link></section><section className="ob-dashboard-card"><h2>{mine.workspaceReady ? "Next steps" : "Before project activation"}</h2>{mine.pending.length ? <ul>{mine.pending.map(item => <li key={item}>{item}</li>)}</ul> : <p>Your agency has recorded the required identity, agreement, advance, and project dependencies as verified.</p>}<p>Selections in the questionnaire record your needs. Deliverables, fees, timing, and ongoing work follow the agreed scope.</p></section></div><EngagementSummary engagement={mine.engagement} />{draft && <><h2>Your project summary</h2><ReviewSummary pages={pages} answers={draft.answers} /><section className="ob-dashboard-card"><h2>Open questions and follow-ups</h2>{openItems.length ? <ul>{openItems.map(item => <li key={item.questionId}>{item.label} · {item.state}{item.detail ? ` · ${item.detail}` : ""}</li>)}</ul> : <p>No follow-up flags recorded. Optional assets and details can be provided when relevant.</p>}<p>Invite requests and secure-access preferences are recorded in your brief. Submitting them does not send invitations or change account permissions.</p></section></>}</main></PortalShell>;
}
