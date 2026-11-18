import { ArrowRight, Check, CircleCheck, ClipboardList } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { DashboardModel } from "@/lib/onboarding/dashboard";

export function OnboardingPhases({
  model,
  completedId,
  onOpenBrief,
}: {
  model: DashboardModel;
  completedId: string | null;
  onOpenBrief: (phase?: string) => void;
}) {
  const { briefProgress: progress, nextPhase } = model;
  const completed = model.phases.find(
    (phase) => phase.id === completedId && phase.complete,
  );
  const complete = progress.percent === 100;
  return (
    <section className="mb-6" aria-labelledby="workspace-phases-heading">
      {completed && (
        <p
          role="status"
          className="mb-4 flex items-center gap-2 rounded-xl bg-[var(--workspace-tint)] p-4 text-sm"
        >
          <Check size={18} aria-hidden="true" />
          {completed.title} saved. Review your progress below.
        </p>
      )}
      <div className="overflow-hidden rounded-[20px] border border-[var(--workspace-line)] bg-white">
        <div className="grid gap-6 p-5 sm:p-6 xl:grid-cols-[1fr_minmax(280px,.8fr)]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium text-[var(--commerce-green)]">
              <ClipboardList size={16} aria-hidden="true" />
              YOUR ONBOARDING
            </p>
            <h2
              id="workspace-phases-heading"
              className="text-2xl font-medium tracking-tight"
            >
              {complete
                ? "Your project brief is complete."
                : "Let’s complete your project brief."}
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--workspace-muted)]">
              {complete
                ? model.submitted
                  ? "Your answers have been submitted. You can review or update any detail in your brief."
                  : "Every question has an answer. Review your brief and send it to your agency when you’re ready."
                : "See what you’ve shared, find the details still needed, and finish one phase at a time."}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button
                className="min-h-11 rounded-full px-5 text-sm"
                onClick={() => onOpenBrief(nextPhase?.id)}
              >
                {complete
                  ? model.submitted
                    ? "Review project brief"
                    : "Review and send brief"
                  : nextPhase?.answered || nextPhase?.later
                    ? "Continue phase"
                    : "Start phase"}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              {nextPhase && !complete && (
                <span className="text-xs text-[var(--workspace-muted)]">
                  Phase {model.phases.indexOf(nextPhase) + 1} ·{" "}
                  {nextPhase.title}
                </span>
              )}
            </div>
          </div>
          <div className="rounded-2xl bg-[var(--workspace-soft)] p-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-[var(--workspace-muted)]">
                  Brief completion
                </p>
                <p className="mt-2 text-4xl font-medium tracking-tight">
                  {progress.percent}%
                </p>
              </div>
              <p className="pb-1 text-xs text-[var(--workspace-muted)]">
                {progress.answered} of {progress.total} answered
              </p>
            </div>
            <Progress
              value={progress.percent}
              aria-label="Project brief completion"
              className="my-4 [&_[data-slot=progress-track]]:h-2"
            />
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--workspace-muted)]">
              <span>{progress.missing} not answered</span>
              <span>{progress.attention} need attention</span>
              <span>{progress.later} for later</span>
            </div>
            <p className="mt-4 flex items-center gap-1.5 border-t border-[var(--workspace-line)] pt-3 text-xs text-[var(--commerce-deep)]">
              <CircleCheck size={14} aria-hidden="true" />
              {model.completedPhases} of {model.phases.length} phases complete
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--workspace-line)] bg-[var(--workspace-surface)] px-5 py-3 text-xs text-[var(--workspace-muted)] sm:px-6">
          <span>
            {progress.later
              ? "Details marked for later stay visible until you resolve them."
              : "Your answers are saved as you go. You can pause at any time."}
          </span>
          <button
            className="min-h-9 font-medium text-[var(--commerce-green)] hover:underline"
            onClick={() => onOpenBrief()}
          >
            View all phases <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
