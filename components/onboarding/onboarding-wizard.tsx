"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSessionId } from "convex-helpers/react/sessions";
import type { SessionId } from "convex-helpers/server/sessions";
import { PreviewSessionProvider } from "./preview-session";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Save, Sparkles, ListChecks } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { OnboardingMascot } from "./onboarding-mascot";
import { OnboardingWelcome } from "./onboarding-welcome";
import { getGuidedSteps, getGuidedProgress, getResumeStep } from "@/lib/onboarding/guided-flow";
import { QuestionField } from "./question-field";
import { PortalShell } from "./portal-shell";
import { PrivacyNotice, type PrivacySettings } from "./privacy-notice";
import { getPages, getSelectedModules, validatePage, validateSubmission, isQuestionVisible, isQuestionRequired, getOpenItems, isAnswerEmpty, getAllowedAnswerStates, ONBOARDING_VERSION } from "@/lib/onboarding/questionnaire";
import { MODULE_PAGES } from "@/lib/onboarding/module-pages";
import type { Answers, Page, ValidationErrors } from "@/lib/onboarding/types";
import type { FunctionReturnType } from "convex/server";

type Mine = NonNullable<FunctionReturnType<typeof api.onboarding.getMine>>;
type User = { id: string; name: string; email: string; emailVerified: boolean };
const previewPrivacy: PrivacySettings = { approved: false, text: "", contact: "", retention: "", version: "development-preview.v1" };
const demoUser: User = { id: "preview", name: "", email: "", emailVerified: false };

export function OnboardingWizard({ user, development = false }: { user: User; development?: boolean }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  const mine = useQuery(api.onboarding.getMine, isAuthenticated ? {} : "skip");
  const privacy = useQuery(api.onboarding.getPrivacySettings, {});
  useEffect(() => { if (!isLoading && !isAuthenticated) router.replace("/login"); }, [isLoading, isAuthenticated, router]);
  if (mine === undefined || !privacy || isLoading) return <PortalShell><div className="ob-loading" role="status">Loading your saved progress…</div></PortalShell>;
  if (!mine) return <PortalShell><div className="ob-loading">Your session has ended. <Link href="/login">Sign in again</Link>.</div></PortalShell>;
  if (!privacy.approved) return <PortalShell businessName={getBusinessName(mine.draft?.answers)} userName={user.name}><OnboardingWelcome privacy={privacy} name={user.name} development={development} /></PortalShell>;
  return <WizardSession key={`${user.id}:${privacy.version}`} user={user} initial={mine} privacy={privacy} />;
}

export function OnboardingPreview() {
  return <PreviewSessionProvider><StoredOnboardingPreview /></PreviewSessionProvider>;
}
function StoredOnboardingPreview() {
  const [sessionId] = useSessionId();
  const draft = useQuery(api.onboardingPreview.getDraft, sessionId ? { sessionId } : "skip");
  if (!sessionId || draft === undefined) return <PortalShell preview><div className="ob-loading" role="status">Loading your saved progress…</div></PortalShell>;
  return <WizardSession key={sessionId} preview previewSessionId={sessionId} user={demoUser} initial={{ draft, engagement: null, pending: [], workspaceReady: false }} privacy={previewPrivacy} />;
}
function getBusinessName(answers?: Answers): string | undefined {
  const answer = answers?.["P01.2"];
  return answer?.state === "answered" && typeof answer.value === "string" && answer.value.trim() ? answer.value.trim() : undefined;
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
function WizardSession({ user, initial, privacy, preview = false, previewSessionId }: { user: User; initial: Mine; privacy: PrivacySettings; preview?: boolean; previewSessionId?: SessionId }) {
  const router = useRouter();
  const saveDraft = useMutation(api.onboarding.saveDraft);
  const submit = useMutation(api.onboarding.submit);
  const savePreviewDraft = useMutation(api.onboardingPreview.saveDraft);
  const submitPreview = useMutation(api.onboardingPreview.submit);
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(user, initial, privacy));
  const [extras, setExtras] = useState(initial.draft?.extraModules ?? []);
  const [pageId, setPageId] = useState(initial.draft?.currentPage ?? "P01");
  const [stepId, setStepId] = useState(() => {
    const seeded = initialAnswers(user, initial, privacy);
    if (preview && initial.draft?.status === "submitted") return "review";
    return getResumeStep(getGuidedSteps(getPages(seeded, initial.draft?.extraModules ?? []), seeded), initial.draft?.currentPage ?? "P01", seeded, privacy.approved || preview, initial.draft?.currentQuestion);
  });
  const [returnToReview, setReturnToReview] = useState(false);
  const [started, setStarted] = useState(() => {
    const consent = initial.draft?.answers["P16.3"];
    return consent?.state === "answered" && consent.value === true && (preview || initial.draft?.privacyVersion === privacy.version);
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [saveState, setSaveState] = useState(initial.draft ? "All changes saved" : "Ready to save");
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState("");
  const [filter, setFilter] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dirty = useRef(false);
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const pages = getPages(answers, extras);
  const selectedModules = getSelectedModules(answers, extras);
  const inactiveModules = MODULE_PAGES.filter(page => !selectedModules.includes(page.id) && page.questions.some(question => answers[question.id]));
  const steps = getGuidedSteps(pages, answers);
  const currentStepIndex = Math.max(0, steps.findIndex(step => step.id === stepId) >= 0
    ? steps.findIndex(step => step.id === stepId)
    : steps.findIndex(step => step.page.id === pageId));
  const step = steps[currentStepIndex];
  const page = step.page;
  const question = step.question;
  const currentId = page.id;
  const progress = getGuidedProgress(steps, answers, privacy.approved || preview);
  const topicQuestions = steps.filter(item => item.page.id === currentId && item.question);
  const questionIndex = topicQuestions.findIndex(item => item.id === step.id);
  const isLast = currentStepIndex === steps.length - 1;
  const hasAnswer = question && !isAnswerEmpty(answers[question.id]);
  const activeError = question && errors[question.id];
  const mood = step.id === "review" ? "celebrate" : activeError ? "thinking" : hasAnswer ? "happy" : "welcome";
  const encouragement = activeError ? "Let’s check this answer together. The detail below will help."
    : !question ? "Your brief is coming together. Take a look before the final confirmations."
    : answers[question.id]?.state === "help" ? "We’ll flag this for guidance. You can keep going."
    : answers[question.id]?.state === "unknown" ? "That’s okay. We’ll keep this as an open question."
    : hasAnswer ? "Got it! Continue whenever you’re ready."
    : currentStepIndex === 0 ? "Let’s start with you. A short answer is all we need."
    : question.type === "multi-select" ? "You can choose more than one. Pick what fits your project."
    : question.type === "select" ? "Choose the option that feels right for you."
    : !isQuestionRequired(question, answers) ? "This one is optional. You can come back to it later."
    : "One small step at a time. A little context is enough.";
  const latest = useRef({ answers, extras, currentId, currentQuestion: step.id });
  useEffect(() => { latest.current = { answers, extras, currentId, currentQuestion: step.id }; }, [answers, extras, currentId, step.id]);

  function persist(snapshot = latest.current) {
    setSaveState("Saving…");
    const next = queue.current.catch(() => undefined).then(() => {
      const payload = { answers: snapshot.answers, extraModules: snapshot.extras, currentPage: snapshot.currentId, currentQuestion: snapshot.currentQuestion };
      if (preview) {
        if (!previewSessionId) throw new Error("Your draft session is missing. Reload this page to reconnect.");
        return savePreviewDraft({ ...payload, sessionId: previewSessionId });
      }
      return saveDraft({ ...payload, privacyVersion: privacy.version });
    });
    queue.current = next;
    return next.then(() => { if (latest.current.answers === snapshot.answers && latest.current.extras === snapshot.extras) dirty.current = false; setSaveState(dirty.current ? "Unsaved changes" : "All changes saved"); setFailure(""); }, () => { setSaveState("Changes not saved — retry below"); throw new Error("We couldn’t save your latest changes. Keep this page open and try again."); });
  }
  useEffect(() => {
    if (!dirty.current || busy) return;
    const timer = setTimeout(() => { void persist().catch(e => setFailure(e.message)); }, 800);
    return () => clearTimeout(timer);
    // Save only after answers or route selections change; explicit navigation also waits for save.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, extras, preview, busy]);
  useEffect(() => {
    if (!started) return;
    headingRef.current?.focus({ preventScroll: true });
  }, [step.id, started]);

  useEffect(() => {
    const first = Object.keys(errors)[0];
    if (!first) return;
    const fieldset = document.getElementById(`question-${first}`);
    const input = fieldset?.querySelector<HTMLElement>("input,select,textarea,button");
    (input ?? fieldset)?.focus();
  }, [errors]);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => { if (dirty.current) event.preventDefault(); };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [preview]);

  function updateAnswer(id: string, answer: Answers[string]) {
    dirty.current = true;
    setSaveState("Unsaved changes");
    setAnswers(previous => ({ ...previous, [id]: answer }));
    setErrors(previous => { const next = { ...previous }; delete next[id]; return next; });
  }
  function moveTo(id: string) {
    const next = steps.find(item => item.id === id);
    if (!next) return;
    setPageId(next.page.id); setStepId(id); setErrors({}); setFailure(""); setFilter("");
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  async function navigate(nextId: string) {
    if (busy) return;
    const next = steps.find(item => item.id === nextId);
    if (!next) return;
    setBusy(true);
    try { await persist({ ...latest.current, currentId: next.page.id, currentQuestion: next.id }); moveTo(nextId); }
    catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); }
    finally { setBusy(false); }
  }
  function editTopic(id: string) {
    const target = steps.find(item => item.id === id) ?? steps.find(item => item.page.id === id && item.question);
    if (target) { setReturnToReview(true); void navigate(target.id); }
  }
  function prefillPage(nextAnswers: Answers): Answers {
    const projectEmail = nextAnswers["P01.3"]?.value;
    const projectName = nextAnswers["P01.1"]?.value;
    return { ...nextAnswers,
      ...(typeof projectEmail === "string" && !nextAnswers["P15.1"] ? { "P15.1": { state: "answered" as const, value: projectEmail } } : {}),
      ...(typeof projectEmail === "string" && projectEmail.trim() && !nextAnswers["P14.2"] ? { "P14.2": { state: "answered" as const, value: { legalName: initial.engagement?.legalName ?? (typeof projectName === "string" ? projectName : ""), billingEmail: initial.engagement?.billingEmail ?? (typeof projectEmail === "string" ? projectEmail : "") } } } : {}),
    };
  }
  async function continueQuestion() {
    if (busy) return;
    const found = question ? validatePage({ ...page, questions: [question] }, answers, { privacyReady: privacy.approved || preview }) : {};
    if (Object.keys(found).length) { setErrors(found); return; }
    let nextAnswers = answers;
    // Explicitly record skipping, so untouched optional questions never inflate progress.
    if (question && !isQuestionRequired(question, answers) && isAnswerEmpty(answers[question.id]) && getAllowedAnswerStates(question).includes("deferred")) {
      nextAnswers = { ...answers, [question.id]: { ...answers[question.id], state: "deferred", value: answers[question.id]?.value ?? "" } };
    }
    nextAnswers = prefillPage(nextAnswers);
    dirty.current = true;
    setSaveState("Unsaved changes");
    setAnswers(nextAnswers);
    const next = steps[currentStepIndex + 1];
    if (next) {
      setBusy(true);
      try { await persist({ answers: nextAnswers, extras, currentId: next.page.id, currentQuestion: next.id }); moveTo(next.id); }
      catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); }
      finally { setBusy(false); }
      return;
    }
    const allErrors = validateSubmission(nextAnswers, extras, { privacyReady: privacy.approved || preview });
    if (Object.keys(allErrors).length) {
      const first = steps.find(item => allErrors[item.id]);
      if (first) moveTo(first.id);
      setErrors(allErrors); setReturnToReview(true);
      setFailure("A few answers still need your attention before submission."); return;
    }
    setBusy(true);
    try { await persist({ answers: nextAnswers, extras, currentId, currentQuestion: step.id });
      if (preview) {
        if (!previewSessionId) throw new Error("Your draft session is missing. Reload this page to reconnect.");
        await submitPreview({ sessionId: previewSessionId }); moveTo("review"); router.push("/dashboard/preview");
      } else { await submit({ privacyVersion: privacy.version }); router.push("/dashboard"); router.refresh(); } }
    catch (e) { setFailure(e instanceof Error ? e.message : "Unable to submit."); }
    finally { setBusy(false); }
  }
  async function saveExit() {
    setBusy(true);
    try { await persist(); router.push(preview ? "/dashboard/preview" : "/dashboard"); } catch (e) { setFailure(e instanceof Error ? e.message : "Unable to save."); } finally { setBusy(false); }
  }
  function toggleModule(id: string) { dirty.current = true; setSaveState("Unsaved changes"); setExtras(old => old.includes(id) ? old.filter(s => s !== id) : [...old, id]); }

  if (!started) return <PortalShell preview={preview} businessName={getBusinessName(answers)} userName={user.name}>
    <OnboardingWelcome privacy={privacy} name={user.name} preview={preview} busy={busy} error={failure} onStart={async () => {
      if (busy) return;
      setBusy(true); setFailure("");
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const nextAnswers: Answers = { ...answers,
        "P16.3": { state: "answered", value: true },
        "P02.2": answers["P02.2"] ?? { state: "answered", value: { country: "", timezone } },
      };
      try {
        await persist({ answers: nextAnswers, extras, currentId, currentQuestion: step.id });
        setAnswers(nextAnswers); setStarted(true);
      } catch (error) { setFailure(error instanceof Error ? error.message : "Unable to save your agreement. Please try again."); }
      finally { setBusy(false); }
    }} />
  </PortalShell>;
  return <PortalShell preview={preview} beforeLeave={persist} businessName={getBusinessName(answers)} userName={user.name}>
    <main className="ob-guided">
      {preview && <div className="ob-preview-banner">Preview mode. Use example business details. Your progress is saved for your next visit.</div>}
      {initial.draft?.version && initial.draft.version !== ONBOARDING_VERSION && <div className="ob-preview-banner">The questionnaire has been updated. Your existing answers are retained; review the current questions before submission.</div>}
      <div className="ob-journey-top">
        <div className="ob-journey-title">Your project brief<span className="ob-save-state" role="status">{saveState}</span></div>
        <button className="ob-exit" type="button" disabled={busy} onClick={() => void saveExit()}><Save size={15} />Save and exit</button>
      </div>
      <div className="ob-journey-progress">
        <progress className="ob-progress" value={progress.completed} max={progress.total} aria-label="Project brief completion" aria-valuetext={`${progress.completed} of ${progress.total} questions complete`} />
        <span>{progress.percent}%</span>
      </div>
      <div className="ob-journey-meta"><span>{progress.completed} of {progress.total} questions complete</span><span>Tailored to your selections</span></div>
      <div className="ob-topic-bar">
        <span>{page.title}<span className="ob-topic-count">{question ? `${questionIndex + 1} / ${topicQuestions.length}` : "Review"}</span></span>
        <details className="ob-topic-menu"><summary><ListChecks size={16} />All topics<ChevronDown size={14} /></summary>
          <nav className="ob-topic-list" aria-label="Questionnaire topics">{pages.map(p => {
            const complete = steps.filter(item => item.page.id === p.id && item.question).every(item => !isAnswerEmpty(answers[item.id]) && !Object.keys(validatePage({ ...p, questions: [item.question!] }, answers, { privacyReady: privacy.approved || preview })).length);
            return <button key={p.id} type="button" disabled={busy} aria-current={p.id === currentId ? "step" : undefined} onClick={e => { e.currentTarget.closest("details")?.removeAttribute("open"); const target = steps.find(item => item.page.id === p.id); if (target) void navigate(target.id); }}><span className={`ob-topic-check ${complete ? "is-complete" : ""}`}>{complete ? <Check size={12} /> : null}</span>{p.title}</button>;
          })}</nav>
        </details>
      </div>
      <section className="ob-guided-stage" aria-labelledby="ob-guided-heading">
        <div className="ob-guide" key={step.id}>
          <div className="ob-guide-character"><OnboardingMascot mood={mood} /></div>
          <div className="ob-speech"><span className="ob-speech-intro">{question ? "Let’s take the next step" : "Ready for a quick look?"}</span><h1 id="ob-guided-heading" tabIndex={-1} ref={headingRef}>{question?.label ?? "Here’s your project brief. How does it look?"}</h1></div>
        </div>
        <form onSubmit={e => { e.preventDefault(); void continueQuestion(); }} noValidate>
          <div className="ob-guided-answer" key={step.id}>
            {question?.id === "P14.1" && <EngagementSummary engagement={initial.engagement} />}
            {question?.id === "P15.3" && initial.pending.length > 0 && <div className="ob-context-box"><h2>Remaining project prerequisites</h2><ul>{initial.pending.map(item => <li key={item}>{item}</li>)}</ul><p>These are checked against agency records. No invitations are sent from this form.</p></div>}
            {step.id === "review" && <><p className="ob-help">Check your answers below. You can edit any topic before the final confirmations.</p><ReviewSummary pages={pages} answers={answers} onEdit={editTopic} /></>}
            {question?.id === "P16.3" && <PrivacyNotice compact privacy={privacy} preview={preview} />}
            <fieldset disabled={busy} className="ob-input-lock">
              {question && <QuestionField guided key={question.id} question={{ ...question, required: isQuestionRequired(question, answers), ...(preview && question.id === "P16.3" ? { help: "Review how your example answers are used in this preview before confirming." } : {}) }} answer={answers[question.id]} error={errors[question.id]} onChange={answer => updateAnswer(question.id, answer)} />}
              {question?.id === "P08.1" && <>
                <details className="ob-module-picker"><summary>Something else? Add a project topic<ChevronDown size={16} /></summary><p className="ob-help">Your answers select relevant topics automatically. Add a workflow here if we missed it.</p><input className="ob-input" aria-label="Search project topics" placeholder="Search topics…" value={filter} onChange={e => setFilter(e.target.value)} /><div className="ob-choices">{MODULE_PAGES.filter(p => p.title.toLowerCase().includes(filter.toLowerCase())).map(p => <label className="ob-choice" key={p.id}><input type="checkbox" checked={selectedModules.includes(p.id)} disabled={selectedModules.includes(p.id) && !extras.includes(p.id)} onChange={() => toggleModule(p.id)} /><span>{p.title}{selectedModules.includes(p.id) && !extras.includes(p.id) ? " · selected by your answers" : ""}</span></label>)}</div></details>
                {inactiveModules.length > 0 && <details className="ob-module-picker"><summary>Previously answered topics<ChevronDown size={16} /></summary><p className="ob-help">These answers stay saved outside your current route. Restore a topic or remove its answers.</p>{inactiveModules.map(module => <div className="ob-list-row ob-context-box" key={module.id}><span className="ob-help">{module.title}</span><Button type="button" variant="outline" onClick={() => toggleModule(module.id)}>Restore topic</Button><Button type="button" variant="ghost" onClick={() => { dirty.current = true; setAnswers(previous => Object.fromEntries(Object.entries(previous).filter(([id]) => !id.startsWith(`${module.id}.`)))); }}>Remove saved answers</Button></div>)}</details>}
                <p className="ob-route-note">{selectedModules.length} project-specific topics selected. Your progress adapts as you choose.</p>
              </>}
            </fieldset>
            <p className="ob-guide-feedback" role="status"><Sparkles size={15} />{encouragement}</p>
            {returnToReview && step.id !== "review" && <button type="button" className="ob-return-review" disabled={busy} onClick={() => { setReturnToReview(false); void navigate("review"); }}>Back to my review<ArrowRight size={14} /></button>}
            {failure && <div className="ob-error-box" role="alert"><p>{failure}</p>{saveState.includes("not saved") && <Button type="button" variant="outline" disabled={busy} onClick={() => void persist().catch(e => setFailure(e.message))}>Retry saving</Button>}</div>}
          </div>
          <div className="ob-guided-actions">
            <Button type="button" variant="ghost" size="marketing" disabled={currentStepIndex === 0 || busy} onClick={() => void navigate(steps[currentStepIndex - 1].id)}><ArrowLeft />Back</Button>
            <Button type="submit" variant="emerald" size="marketing" disabled={busy}>{busy ? "Saving…" : isLast ? preview ? "Save and open dashboard" : "Submit onboarding details" : step.id === "review" ? "Looks good" : question && !isQuestionRequired(question, answers) && !hasAnswer ? "Skip for now" : "Continue"}<ArrowRight /></Button>
          </div>
        </form>
      </section>
    </main>
  </PortalShell>;
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
export function ReviewSummary({ pages, answers, onEdit, editHref = "/onboarding" }: { pages: Page[]; answers: Answers; onEdit?: (id: string) => void; editHref?: string }) {
  const groups = [ { title: "Business and contact", ids: ["P01", "P02", "P03", "P04", "P05"] }, { title: "Goals and current process", ids: ["P06", "P07", "P09"] }, { title: "Selected work and requirements", ids: ["P08", "P10", "P11", "P12", ...pages.filter(p => p.kind === "module").map(p => p.id)] }, { title: "Responsibilities and engagement", ids: ["P13", "P14", "P15"] } ];
  const openItems = getOpenItems(answers, pages.filter(page => page.kind === "module").map(page => page.id));
  return <div className="ob-review">{groups.map(group => <details key={group.title} open={group.title === "Business and contact"}><summary>{group.title}<ChevronDown size={16} /></summary>{pages.filter(p => group.ids.includes(p.id)).map(p => <section key={p.id}><div className="ob-review-heading"><h3>{p.title}</h3>{onEdit ? <button type="button" onClick={() => onEdit(p.id)}>Edit</button> : <Link href={editHref}>Edit brief</Link>}</div><dl>{p.questions.filter(q => isQuestionVisible(q, answers)).map(q => <div key={q.id}><dt>{q.label}{onEdit && <button type="button" aria-label={`Edit answer: ${q.label}`} onClick={() => onEdit(q.id)}>Edit</button>}</dt><dd>{formatAnswer(answers[q.id])}</dd></div>)}</dl></section>)}</details>)}<details><summary>Open questions and follow-ups<ChevronDown size={16} /></summary>{openItems.length ? <ul>{openItems.map(item => <li key={item.questionId}><strong>{item.label}</strong><p>{item.detail || item.state}</p></li>)}</ul> : <p className="ob-help">No follow-up flags recorded. Optional unanswered details can be supplied later.</p>}</details></div>;
}
