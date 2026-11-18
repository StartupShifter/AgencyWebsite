"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, CircleAlert } from "lucide-react";
import type { OnboardingPhase } from "@/lib/onboarding/phase-engine";
import type { Answers } from "@/lib/onboarding/types";
import { getPhaseQuestionProgress, getQuestionStatus, QUESTION_STATUS_LABELS, type QuestionStatus } from "@/lib/onboarding/progress-state";
import { content } from "@/context/content";

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
  const copy = content.onboarding.progress;
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

  return <aside className="ob-progress-rail" aria-label={copy.railLabel} data-open={mobileOpen}>
    <div className="ob-rail-heading"><span>{copy.yourProjectBrief}</span><span>{Math.round(answered / Math.max(1, total) * 100)}%{copy.answeredPercentSuffix}</span></div>
    <progress className="ob-progress" value={answered} max={Math.max(1, total)} aria-label={copy.answeredLabel} aria-valuetext={`${answered}${copy.answeredValueText}${later}${copy.forLaterValueText}${pending}${copy.pendingValueText}${total}${copy.questionsValueText}`} />
    <div className="ob-progress-counts" aria-live="polite" aria-atomic="true"><span><b>{answered}</b> {copy.answered}</span><span><b>{later}</b> {copy.forLater}</span><span><b>{pending}</b> {copy.pending}</span></div>
    <button type="button" className="ob-mobile-phases" aria-expanded={mobileOpen} aria-controls="ob-phase-navigation" onClick={() => setMobileOpen(open => !open)}>
      <span>{copy.phasePrefix}{activeIndex + 1} {copy.phaseOfSuffix}{phases.length}<strong>{active.title}</strong></span><ChevronDown size={18} aria-hidden="true" />
    </button>
    <div id="ob-phase-navigation" className="ob-rail-navigation">
      <div className="ob-rail-label">{copy.yourPhases} <span>{activeIndex + 1} / {phases.length}</span></div>
      <nav aria-label={copy.phaseNavLabel}><ol className="ob-rail-phases" ref={listRef}>{phases.map((phase, index) => {
        const counts = progress[index];
        const isActive = index === activeIndex;
        const status = counts.pending === 0 ? counts.later.length ? "later" : "answered" : "pending";
        return <li key={phase.id} data-active={isActive}>
          <button className="ob-rail-phase" type="button" disabled={busy} aria-current={isActive ? "step" : undefined} onClick={() => navigate(counts.pending === 0 && counts.later.length ? counts.later[0].id : phase.nextQuestion)}>
            <QuestionStatusMark status={status} number={index + 1} />
            <span className="ob-rail-phase-copy"><span>{phase.title}</span><small>{counts.answered}/{counts.total} {copy.answered}{counts.later.length > 0 ? ` · ${counts.later.length} ${copy.forLater}` : ""}</small></span>
            {isActive && <span className="ob-current-dot" aria-label={copy.currentPhaseLabel} />}
          </button>
          {isActive && <div className="ob-rail-question-list"><p>{copy.questionsInPhase}</p><ol>{phase.steps.map((step, stepIndex) => {
            const questionNumber = phase.steps.slice(0, stepIndex + 1).filter(item => item.question).length;
            const questionStatus = getQuestionStatus(step, answers, privacyReady);
            const current = step.id === currentQuestion;
            return <li key={step.id}><button type="button" disabled={busy} aria-current={current ? "step" : undefined} aria-label={`${step.question ? `Question ${questionNumber}: ${step.question.label}` : copy.reviewYourAnswers} — ${QUESTION_STATUS_LABELS[questionStatus]}${current ? copy.currentQuestionSuffix : ""}`} title={step.question?.label ?? copy.reviewYourAnswers} onClick={() => navigate(step.id)}>
              <QuestionStatusMark status={questionStatus} number={step.question ? questionNumber : undefined} />
              <span>{step.question ? `Q${questionNumber}` : copy.review}</span>
            </button></li>;
          })}</ol><small>{copy.selectToRevisit}</small></div>}
        </li>;
      })}</ol></nav>
      <div className="ob-progress-legend"><span><QuestionStatusMark status="answered" />{copy.legendAnswered}</span><span><QuestionStatusMark status="later" />{copy.legendForLater}</span><span><QuestionStatusMark status="pending" />{copy.legendPending}</span></div>
      <p className="ob-rail-note">{copy.railNote}</p>
    </div>
  </aside>;
}
