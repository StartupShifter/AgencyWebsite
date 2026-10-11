"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronDown, Save, Sparkles } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { QuestionField } from "./question-field";
import { PortalShell } from "./portal-shell";
import { PrivacyNotice, type PrivacySettings } from "./privacy-notice";
import { getPages, getSelectedModules, validatePage, validateSubmission, isQuestionVisible, isQuestionRequired, getOpenItems, ONBOARDING_VERSION } from "@/lib/onboarding/questionnaire";
import { MODULE_PAGES } from "@/lib/onboarding/module-pages";
import type { Answers, Page, ValidationErrors } from "@/lib/onboarding/types";
import type { FunctionReturnType } from "convex/server";

type Mine = NonNullable<FunctionReturnType<typeof api.onboarding.getMine>>;
type User = { id: string; name: string; email: string; emailVerified: boolean };
const previewPrivacy: PrivacySettings = { approved: false, text: "", contact: "", retention: "", version: "preview" };
const demoUser: User = { id: "preview", name: "", email: "", emailVerified: false };

export function OnboardingWizard({ user, development = false }: { user: User; development?: boolean }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  const mine = useQuery(api.onboarding.getMine, isAuthenticated ? {} : "skip");
  const privacy = useQuery(api.onboarding.getPrivacySettings, {});
  useEffect(() => { if (!isLoading && !isAuthenticated) router.replace("/login"); }, [isLoading, isAuthenticated, router]);
  if (mine === undefined || !privacy || isLoading) return <PortalShell><div className="ob-loading" role="status">Loading your saved progress…</div></PortalShell>;
  if (!mine) return <PortalShell><div className="ob-loading">Your session has ended. <Link href="/login">Sign in again</Link>.</div></PortalShell>;
  if (!privacy.approved) return <PortalShell><main className="ob-welcome"><span className="ob-eyebrow">YOUR NEXT CHAPTER</span><h1>Let’s build a clear<br />starting point.</h1><p>A short topic at a time. Relevant questions, useful choices, and progress you can return to.</p><PrivacyNotice privacy={privacy} />{development && <Link className="ob-link-button" href="/onboarding/preview">Review the interactive form preview <ArrowRight size={18} /></Link>}<Link className="ob-text-link" href="/dashboard">Go to your workspace</Link></main></PortalShell>;
  return <WizardSession key={`${user.id}:${privacy.version}`} user={user} initial={mine} privacy={privacy} />;
}

export function OnboardingPreview() {
  return <WizardSession preview user={demoUser} initial={{ draft: null, engagement: null, pending: [], workspaceReady: false }} privacy={previewPrivacy} />;
}
function initialAnswers(user: User, mine: Mine, privacy: PrivacySettings): Answers {
  if (mine.draft) {
    if (mine.draft.privacyVersion !== privacy.version) { const answers = { ...mine.draft.answers }; delete answers["P16.3"]; return answers; }
    return mine.draft.answers;
  }
  const result: Answers = {};
  if (user.name) result["P01.1"] = { state: "answered", value: user.name };
  if (user.email) result["P01.3"] = { state: "answered", value: user.email };
  return result;
}
function WizardSession({ user, initial, privacy, preview = false }: { user: User; initial: Mine; privacy: PrivacySettings; preview?: boolean }) {
  const router = useRouter();
  const saveDraft = useMutation(api.onboarding.saveDraft);
  const submit = useMutation(api.onboarding.submit);
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(user, initial, privacy));
  const [extras, setExtras] = useState(initial.draft?.extraModules ?? []);
  const [pageId, setPageId] = useState(initial.draft?.currentPage ?? "P01");
  const [started, setStarted] = useState(Boolean(initial.draft) || preview);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [saveState, setSaveState] = useState(preview ? "Preview · nothing is stored" : "All changes saved");
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState("");
  const [previewComplete, setPreviewComplete] = useState(false);
  const [filter, setFilter] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dirty = useRef(false);
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const pages = getPages(answers, extras);
  const selectedModules = getSelectedModules(answers, extras);
  const inactiveModules = MODULE_PAGES.filter(page => !selectedModules.includes(page.id) && page.questions.some(question => answers[question.id]));
  const currentIndex = Math.max(0, pages.findIndex(p => p.id === pageId));
  const page = pages[currentIndex];
  const currentId = page.id;
  const latest = useRef({ answers, extras, currentId });
  useEffect(() => { latest.current = { answers, extras, currentId }; }, [answers, extras, currentId]);

  function persist(snapshot = latest.current) {
    if (preview) { dirty.current = false; return Promise.resolve(); }
    setSaveState("Saving…");
    const next = queue.current.catch(() => undefined).then(() => saveDraft({ answers: snapshot.answers, extraModules: snapshot.extras, currentPage: snapshot.currentId, privacyVersion: privacy.version }));
    queue.current = next;
    return next.then(() => { if (latest.current.answers === snapshot.answers && latest.current.extras === snapshot.extras) dirty.current = false; setSaveState(dirty.current ? "Unsaved changes" : "All changes saved"); setFailure(""); }, () => { setSaveState("Changes not saved — retry below"); throw new Error("We couldn’t save your latest changes. Keep this page open and try again."); });
  }
  useEffect(() => {
    if (!dirty.current || preview) return;
    const timer = setTimeout(() => { void persist().catch(e => setFailure(e.message)); }, 800);
    return () => clearTimeout(timer);
    // Save only after answers or route selections change; explicit navigation also waits for save.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, extras, preview]);
  useEffect(() => {
    const first = Object.keys(errors)[0];
    if (!first) return;
    const fieldset = document.getElementById(`question-${first}`);
    const input = fieldset?.querySelector<HTMLElement>("input,select,textarea,button");
    (input ?? fieldset)?.focus();
  }, [errors]);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => { if (dirty.current && !preview) event.preventDefault(); };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [preview]);

  function updateAnswer(id: string, answer: Answers[string]) {
    dirty.current = true;
    setSaveState(preview ? "Preview · nothing is stored" : "Unsaved changes");
    setAnswers(previous => ({ ...previous, [id]: answer }));
    setErrors(previous => { const next = { ...previous }; delete next[id]; return next; });
  }
  function moveTo(id: string) { setPageId(id); setErrors({}); setFailure(""); setFilter(""); headingRef.current?.focus(); window.scrollTo({ top: 0, behavior: "instant" }); }
  async function navigate(nextId: string, validate = false) {
    if (validate) { const found = validatePage(page, answers, { privacyReady: privacy.approved || preview }); if (Object.keys(found).length) { setErrors(found); document.getElementById(Object.keys(found)[0])?.focus(); return; } }
    setBusy(true);
    try { await persist({ ...latest.current, currentId: nextId }); moveTo(nextId); } catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); } finally { setBusy(false); }
  }
  function prefillPage(nextAnswers: Answers): Answers {
    const projectEmail = nextAnswers["P01.3"]?.value;
    const projectName = nextAnswers["P01.1"]?.value;
    return { ...nextAnswers,
      ...(typeof projectEmail === "string" && !nextAnswers["P15.1"] ? { "P15.1": { state: "answered" as const, value: projectEmail } } : {}),
      ...(!nextAnswers["P14.2"] ? { "P14.2": { state: "answered" as const, value: { legalName: initial.engagement?.legalName ?? (typeof projectName === "string" ? projectName : ""), billingEmail: initial.engagement?.billingEmail ?? (typeof projectEmail === "string" ? projectEmail : "") } } } : {}),
    };
  }
  async function continuePage() {
    const found = validatePage(page, answers, { privacyReady: privacy.approved || preview });
    if (Object.keys(found).length) { setErrors(found); document.querySelector<HTMLElement>(`[aria-invalid="true"]`)?.focus(); return; }
    const nextAnswers = prefillPage(answers);
    setAnswers(nextAnswers);
    const nextId = pages[currentIndex + 1]?.id;
    if (nextId) { setBusy(true); try { await persist({ answers: nextAnswers, extras, currentId: nextId }); moveTo(nextId); } catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); } finally { setBusy(false); } }
    else {
      const allErrors = validateSubmission(nextAnswers, extras, { privacyReady: privacy.approved || preview });
      if (Object.keys(allErrors).length) { const first = pages.find(p => p.questions.some(q => allErrors[q.id])); if (first) setPageId(first.id); setErrors(allErrors); setFailure("A few answers still need your attention before submission."); return; }
      if (preview) { setPreviewComplete(true); return; }
      setBusy(true);
      try { await persist({ answers: nextAnswers, extras, currentId }); await submit({ privacyVersion: privacy.version }); router.push("/dashboard"); router.refresh(); } catch (e) { setFailure(e instanceof Error ? e.message : "Unable to submit."); } finally { setBusy(false); }
    }
  }
  async function saveExit() {
    setBusy(true);
    try { await persist(); router.push(preview ? "/" : "/dashboard"); } catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); } finally { setBusy(false); }
  }
  function toggleModule(id: string) { dirty.current = true; setExtras(old => old.includes(id) ? old.filter(s => s !== id) : [...old, id]); }

  if (!started) return <PortalShell><main className="ob-welcome"><span className="ob-eyebrow">YOUR NEXT CHAPTER</span><h1>A good project starts<br />with understanding you.</h1><p>Tell us about your business, priorities, and the work you need. We’ll keep it to one topic at a time.</p><div className="ob-welcome-points"><span><CheckCircle2 />Quick choices, fewer typed answers</span><span><Save />Saved progress, ready when you are</span><span><Sparkles />Questions shaped around your project</span></div><PrivacyNotice privacy={privacy} /><Button variant="emerald" size="marketing" onClick={() => { setStarted(true); const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; setAnswers(old => ({ ...old, "P02.2": old["P02.2"] ?? { state: "answered", value: { country: "", timezone } } })); }}>Start my project brief<ArrowRight /></Button><p className="ob-help">Selecting requirements records your needs. Final scope and fees come from your agreement.</p></main></PortalShell>;
  if (previewComplete) return <PortalShell preview><main className="ob-welcome"><CheckCircle2 className="ob-success-icon" /><h1>Your preview is complete.</h1><p>You’ve walked through the whole questionnaire. No answers were stored or submitted.</p><Button variant="emerald" size="marketing" onClick={() => { setPreviewComplete(false); moveTo("P16"); }}>Review answers</Button></main></PortalShell>;
  return <PortalShell preview={preview} beforeLeave={preview ? undefined : persist}><main className="ob-layout"><aside className="ob-sidebar"><span className="ob-eyebrow">YOUR PROJECT BRIEF</span><h2>A little context.<br />A clearer direction.</h2><p>Only the questions that matter for your project. You can return to any topic.</p><div className="ob-progress-text"><span>Step {currentIndex + 1} of {pages.length}</span><span>{Math.round((currentIndex + 1) / pages.length * 100)}%</span></div><progress className="ob-progress" value={currentIndex + 1} max={pages.length} aria-label="Onboarding page progress" /><nav className="ob-steps" aria-label="Questionnaire topics">{pages.map((p, index) => <button key={p.id} type="button" onClick={() => void navigate(p.id)} disabled={busy} className={`ob-step ${p.id === currentId ? "ob-step-active" : ""}`} aria-current={p.id === currentId ? "step" : undefined}><span className="ob-step-number">{!Object.keys(validatePage(p, answers, { privacyReady: privacy.approved || preview })).length && p.questions.some(q => answers[q.id]) ? <Check size={13} /> : index + 1}</span><span>{p.title}</span>{p.kind === "module" && <span className="ob-module-dot" aria-label="Project-specific topic" />}</button>)}</nav><p className="ob-sidebar-note">Your selections may add relevant topics. Hidden answers stay saved if your project changes.</p></aside><section className="ob-content"><div className="ob-content-top"><span className="ob-eyebrow">{page.kind === "module" ? "SHAPED AROUND YOUR PROJECT" : currentId === "P16" ? "THE FINAL CHECK" : "LET’S GET TO KNOW YOUR BUSINESS"}</span><span className="ob-save-state" role="status">{saveState}</span></div>{preview && <div className="ob-preview-banner">Development preview · Use sample information. Nothing is stored. Live collection awaits approved privacy information.</div>}{initial.draft?.version && initial.draft.version !== ONBOARDING_VERSION && <div className="ob-preview-banner">The questionnaire has been updated. Your existing answers are retained; review the current questions before submission.</div>}<h1 className="ob-page-title" tabIndex={-1} ref={headingRef}>{page.title}<span>.</span></h1><p className="ob-page-description">{page.description ?? "A few useful details are enough. Choose an option where you can, and tell us when you need guidance."}</p>
      {currentId === "P14" && <EngagementSummary engagement={initial.engagement} />}
      {currentId === "P15" && initial.pending.length > 0 && <div className="ob-context-box"><h2>Remaining project prerequisites</h2><ul>{initial.pending.map(item => <li key={item}>{item}</li>)}</ul><p>These are checked against agency records. No invitations are sent from this form.</p></div>}
      {currentId === "P16" && <><ReviewSummary pages={pages} answers={answers} onEdit={id => void navigate(id)} /><PrivacyNotice compact privacy={privacy} /></>}
      <form onSubmit={e => { e.preventDefault(); void continuePage(); }} noValidate><div className="ob-questions">{page.questions.filter(q => isQuestionVisible(q, answers)).map(q => <QuestionField key={q.id} question={{ ...q, required: isQuestionRequired(q, answers) }} answer={answers[q.id]} error={errors[q.id]} onChange={answer => updateAnswer(q.id, answer)} />)}</div>
      {currentId === "P08" && <details className="ob-module-picker"><summary>Something else? Add a relevant project topic<ChevronDown size={16} /></summary><p className="ob-help">Your answers select relevant topics automatically. You can add a workflow here if we missed it.</p><input className="ob-input" aria-label="Search project topics" placeholder="Search topics…" value={filter} onChange={e => setFilter(e.target.value)} /><div className="ob-choices">{MODULE_PAGES.filter(p => p.title.toLowerCase().includes(filter.toLowerCase())).map(p => <label className="ob-choice" key={p.id}><input type="checkbox" checked={selectedModules.includes(p.id)} disabled={selectedModules.includes(p.id) && !extras.includes(p.id)} onChange={() => toggleModule(p.id)} /><span>{p.title}{selectedModules.includes(p.id) && !extras.includes(p.id) ? " · selected by your answers" : ""}</span></label>)}</div></details>}
      {currentId === "P08" && inactiveModules.length > 0 && <details className="ob-module-picker"><summary>Previously answered topics outside this route<ChevronDown size={16} /></summary><p className="ob-help">These answers are retained and do not block submission. Restore a topic or remove its answers if you no longer need them.</p>{inactiveModules.map(module => <div className="ob-list-row ob-context-box" key={module.id}><span className="ob-help">{module.title}</span><Button type="button" variant="outline" onClick={() => toggleModule(module.id)}>Restore topic</Button><Button type="button" variant="ghost" onClick={() => { dirty.current = true; setAnswers(previous => Object.fromEntries(Object.entries(previous).filter(([id]) => !id.startsWith(`${module.id}.`)))); }}>Remove saved answers</Button></div>)}</details>}
      {currentId === "P08" && <p className="ob-route-note">Your current route includes {selectedModules.length} project-specific topics and {pages.length} pages in total.</p>}
      {failure && <div className="ob-error-box" role="alert"><p>{failure}</p><Button type="button" variant="outline" onClick={() => void persist().catch(e => setFailure(e.message))}>Retry saving</Button></div>}
      <div className="ob-actions"><Button type="button" variant="ghost" size="marketing" disabled={currentIndex === 0 || busy} onClick={() => void navigate(pages[currentIndex - 1].id)}><ArrowLeft />Back</Button><div><Button type="button" variant="outline" size="marketing" disabled={busy} onClick={() => void saveExit()}><Save />{preview ? "Exit preview" : "Save and exit"}</Button><Button type="submit" variant="emerald" size="marketing" disabled={busy}>{busy ? "Saving…" : currentId === "P16" ? preview ? "Finish preview" : "Submit onboarding details" : "Continue"}<ArrowRight /></Button></div></div></form><p className="ob-bottom-note">No passwords or payment information. Requests are reviewed against your agreed project scope.</p></section></main></PortalShell>;
}

export function EngagementSummary({ engagement }: { engagement: Mine["engagement"] }) {
  if (!engagement) return <div className="ob-context-box"><h2>No approved engagement recorded yet</h2><p>Your project agreement, scope, fees, and billing record will appear here once the agency records them. You can still submit a brief for review.</p><p>Agreement: awaiting confirmation · 40% advance: awaiting verification</p></div>;
  return <div className="ob-context-box"><h2>{engagement.plan} · Approved project record</h2><p>{engagement.summary}</p><p>Setup: {engagement.currency} {engagement.setupFee.toLocaleString()}{engagement.recurringFee !== undefined ? ` · Recurring: ${engagement.currency} ${engagement.recurringFee.toLocaleString()} / month` : ""}</p><p>Scope: {engagement.scope.join(", ")}</p><p>Exclusions: {engagement.exclusions.join(", ") || "See your agreement"}</p><p>Third-party costs: {engagement.thirdPartyCosts}</p><p>Agreement: {engagement.signedAgreementRef ? "Verified" : "Awaiting confirmation"} · 40% advance: {engagement.advancePaymentRef ? "Verified" : "Awaiting verification"}</p></div>;
}
export function formatAnswer(answer?: Answers[string]): string {
  if (!answer) return "Not provided";
  if (answer.state !== "answered") return { unknown: "Not sure yet", "not-applicable": "Not applicable", deferred: "Provide later", help: "Guidance requested" }[answer.state] + (answer.detail ? ` · ${answer.detail}` : "");
  const value = Array.isArray(answer.value) ? answer.value.join(", ") : typeof answer.value === "object" ? Object.entries(answer.value).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join(" · ") : typeof answer.value === "boolean" ? answer.value ? "Confirmed" : "Not confirmed" : String(answer.value);
  return (value || "Not provided") + (answer.priority ? ` · First priority: ${answer.priority}` : "") + (answer.detail ? ` · ${answer.detail}` : "");
}
export function ReviewSummary({ pages, answers, onEdit }: { pages: Page[]; answers: Answers; onEdit?: (id: string) => void }) {
  const groups = [ { title: "Business and contact", ids: ["P01", "P02", "P03", "P04", "P05"] }, { title: "Goals and current process", ids: ["P06", "P07", "P09"] }, { title: "Selected work and requirements", ids: ["P08", "P10", "P11", "P12", ...pages.filter(p => p.kind === "module").map(p => p.id)] }, { title: "Responsibilities and engagement", ids: ["P13", "P14", "P15"] } ];
  const openItems = getOpenItems(answers, pages.filter(page => page.kind === "module").map(page => page.id));
  return <div className="ob-review">{groups.map(group => <details key={group.title} open={group.title === "Business and contact"}><summary>{group.title}<ChevronDown size={16} /></summary>{pages.filter(p => group.ids.includes(p.id)).map(p => <section key={p.id}><div className="ob-review-heading"><h3>{p.title}</h3>{onEdit ? <button type="button" onClick={() => onEdit(p.id)}>Edit</button> : <Link href="/onboarding">Edit brief</Link>}</div><dl>{p.questions.filter(q => isQuestionVisible(q, answers)).map(q => <div key={q.id}><dt>{q.label}</dt><dd>{formatAnswer(answers[q.id])}</dd></div>)}</dl></section>)}</details>)}<details><summary>Open questions and follow-ups<ChevronDown size={16} /></summary>{openItems.length ? <ul>{openItems.map(item => <li key={item.questionId}><strong>{item.label}</strong><p>{item.detail || item.state}</p></li>)}</ul> : <p className="ob-help">No follow-up flags recorded. Optional unanswered details can be supplied later.</p>}</details></div>;
}
