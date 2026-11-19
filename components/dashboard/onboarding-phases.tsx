"use client";

import { ArrowRight, Check, CircleCheck, ClipboardList } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { DashboardModel } from "@/lib/onboarding/dashboard";
import { useI18n } from "@/context/i18n-context";

export function OnboardingPhases({
  model,
  completedId,
  onOpenBrief,
}: {
  model: DashboardModel;
  completedId: string | null;
  onOpenBrief: (phase?: string) => void;
}) {
  const { content } = useI18n();
  const { briefProgress: progress, nextPhase } = model;
  const completed = model.phases.find(
    (phase) => phase.id === completedId && phase.complete,
  );
  const complete = progress.percent === 100;
  const copy = content.dashboard.phases;
  return (
    <section className="mb-6" aria-labelledby="workspace-phases-heading">
      {completed && (
        <p
          role="status"
          className="mb-4 flex items-center gap-2 rounded-xl bg-[var(--workspace-tint)] p-4 text-sm"
        >
          <Check size={18} aria-hidden="true" />
          {completed.title}{copy.savedSuffix}
        </p>
      )}
      <div className="overflow-hidden rounded-[20px] border border-[var(--workspace-line)] bg-white">
        <div className="grid gap-6 p-5 sm:p-6 xl:grid-cols-[1fr_minmax(280px,.8fr)]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium text-[var(--commerce-green)]">
              <ClipboardList size={16} aria-hidden="true" />
              {copy.yourOnboarding}
            </p>
            <h2
              id="workspace-phases-heading"
              className="text-2xl font-medium tracking-tight"
            >
              {complete
                ? copy.completeTitle
                : copy.incompleteTitle}
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--workspace-muted)]">
              {complete
                ? model.submitted
                  ? copy.completeSubmitted
                  : copy.completeNotSubmitted
                : copy.incomplete}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button
                className="min-h-11 rounded-full px-5 text-sm"
                onClick={() => onOpenBrief(nextPhase?.id)}
              >
                {complete
                  ? model.submitted
                    ? copy.reviewProjectBrief
                    : copy.reviewAndSendBrief
                  : nextPhase?.answered || nextPhase?.later
                    ? copy.continuePhase
                    : copy.startPhase}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              {nextPhase && !complete && (
                <span className="text-xs text-[var(--workspace-muted)]">
                  {copy.phasePrefix}{model.phases.indexOf(nextPhase) + 1} ·{" "}
                  {nextPhase.title}
                </span>
              )}
            </div>
          </div>
          <div className="rounded-2xl bg-[var(--workspace-soft)] p-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-[var(--workspace-muted)]">
                  {copy.briefCompletion}
                </p>
                <p className="mt-2 text-4xl font-medium tracking-tight">
                  {progress.percent}%
                </p>
              </div>
              <p className="pb-1 text-xs text-[var(--workspace-muted)]">
                {progress.answered} of {progress.total} {copy.answeredSuffix}
              </p>
            </div>
            <Progress
              value={progress.percent}
              aria-label={copy.briefCompletionLabel}
              className="my-4 [&_[data-slot=progress-track]]:h-2"
            />
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--workspace-muted)]">
              <span>{progress.missing} {copy.notAnswered}</span>
              <span>{progress.attention} {copy.needAttention}</span>
              <span>{progress.later} {copy.forLater}</span>
            </div>
            <p className="mt-4 flex items-center gap-1.5 border-t border-[var(--workspace-line)] pt-3 text-xs text-[var(--commerce-deep)]">
              <CircleCheck size={14} aria-hidden="true" />
              {model.completedPhases} of {model.phases.length} {copy.phasesComplete}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--workspace-line)] bg-[var(--workspace-surface)] px-5 py-3 text-xs text-[var(--workspace-muted)] sm:px-6">
          <span>
            {progress.later
              ? copy.laterStaysVisible
              : copy.answersSavedAsYouGo}
          </span>
          <button
            className="min-h-9 font-medium text-[var(--commerce-green)] hover:underline"
            onClick={() => onOpenBrief()}
          >
            {copy.viewAllPhases} <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
