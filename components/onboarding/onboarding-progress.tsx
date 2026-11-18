"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, CircleAlert } from "lucide-react";
import type { OnboardingPhase } from "@/lib/onboarding/phase-engine";
import type { Answers } from "@/lib/onboarding/types";
import { getPhaseQuestionProgress, getQuestionStatus, QUESTION_STATUS_LABELS, type QuestionStatus } from "@/lib/onboarding/progress-state";

export function QuestionStatusMark({ status, number }: { status: QuestionStatus; number?: number }) {
  return <span className="ob-status-mark" data-status={status} aria-hidden="true">
    {status === "answered" || status === "later" ? <Check size={13} strokeWidth={3} /> : status === "attention" ? <CircleAlert size={14} /> : number}
  </span>;
}

export function OnboardingProgress({ phases, activeIndex, currentQuestion, answers, privacyReady, busy, onNavigate }: {
  phases: OnboardingPhase[];
  activeIndex: number;
  currentQuestion: string;
  answers: Answers;
  privacyReady: boolean;
  busy: boolean;
  onNavigate: (questionId: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const listRef = useRef<HTMLOListElement>(null);
  const progress = phases.map(phase => getPhaseQuestionProgress(phase, answers, privacyReady));
  const answered = progress.reduce((sum, phase) => sum + phase.answered, 0);
  const later = progress.reduce((sum, phase) => sum + phase.later.length, 0);
  const total = progress.reduce((sum, phase) => sum + phase.total, 0);
  const pending = total - answered - later;
  const active = phases[activeIndex];

  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>("[data-active=true]");
    if (!list || !item) return;
    // Scroll only the rail, never the document or the question being answered.
    const top = item.offsetTop - list.offsetTop;
    if (top < list.scrollTop || top + item.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = Math.max(0, top - 12);
    }
  }, [active.id, mobileOpen]);

  function navigate(id: string) {
    if (busy) return;
    setMobileOpen(false);
    onNavigate(id);
  }

  return <aside className="ob-progress-rail" aria-label="Onboarding progress" data-open={mobileOpen}>
    <div className="ob-rail-heading"><span>Your project brief</span><span>{Math.round(answered / Math.max(1, total) * 100)}% answered</span></div>
    <progress className="ob-progress" value={answered} max={Math.max(1, total)} aria-label="Answered questions" aria-valuetext={`${answered} answered, ${later} for later, ${pending} pending out of ${total} questions`} />
    <div className="ob-progress-counts" aria-live="polite" aria-atomic="true"><span><b>{answered}</b> answered</span><span><b>{later}</b> for later</span><span><b>{pending}</b> pending</span></div>
    <button type="button" className="ob-mobile-phases" aria-expanded={mobileOpen} aria-controls="ob-phase-navigation" onClick={() => setMobileOpen(open => !open)}>
      <span>Phase {activeIndex + 1} of {phases.length}<strong>{active.title}</strong></span><ChevronDown size={18} aria-hidden="true" />
    </button>
    <div id="ob-phase-navigation" className="ob-rail-navigation">
      <div className="ob-rail-label">Your phases <span>{activeIndex + 1} / {phases.length}</span></div>
      <nav aria-label="Phases and questions"><ol className="ob-rail-phases" ref={listRef}>{phases.map((phase, index) => {
        const counts = progress[index];
        const isActive = index === activeIndex;
        const status = counts.pending === 0 ? counts.later.length ? "later" : "answered" : "pending";
        return <li key={phase.id} data-active={isActive}>
          <button className="ob-rail-phase" type="button" disabled={busy} aria-current={isActive ? "step" : undefined} onClick={() => navigate(counts.pending === 0 && counts.later.length ? counts.later[0].id : phase.nextQuestion)}>
            <QuestionStatusMark status={status} number={index + 1} />
            <span className="ob-rail-phase-copy"><span>{phase.title}</span><small>{counts.answered}/{counts.total} answered{counts.later.length > 0 ? ` · ${counts.later.length} for later` : ""}</small></span>
            {isActive && <span className="ob-current-dot" aria-label="Current phase" />}
          </button>
          {isActive && <div className="ob-rail-question-list"><p>Questions in this phase</p><ol>{phase.steps.map((step, stepIndex) => {
            const questionNumber = phase.steps.slice(0, stepIndex + 1).filter(item => item.question).length;
            const questionStatus = getQuestionStatus(step, answers, privacyReady);
            const current = step.id === currentQuestion;
            return <li key={step.id}><button type="button" disabled={busy} aria-current={current ? "step" : undefined} aria-label={`${step.question ? `Question ${questionNumber}: ${step.question.label}` : "Review your answers"} — ${QUESTION_STATUS_LABELS[questionStatus]}${current ? ", current question" : ""}`} title={step.question?.label ?? "Review your answers"} onClick={() => navigate(step.id)}>
              <QuestionStatusMark status={questionStatus} number={step.question ? questionNumber : undefined} />
              <span>{step.question ? `Q${questionNumber}` : "Review"}</span>
            </button></li>;
          })}</ol><small>Select a question to revisit it.</small></div>}
        </li>;
      })}</ol></nav>
      <div className="ob-progress-legend"><span><QuestionStatusMark status="answered" />Answered</span><span><QuestionStatusMark status="later" />For later</span><span><QuestionStatusMark status="pending" />Pending</span></div>
      <p className="ob-rail-note">Your phases adapt to your project. You can revisit any question.</p>
    </div>
  </aside>;
}
