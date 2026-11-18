"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  CircleDashed,
  CircleAlert,
  Clock3,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatAnswer } from "@/lib/onboarding/engine";
import {
  getBriefQuestionHref,
  type DashboardModel,
} from "@/lib/onboarding/dashboard";
import { ViewHeading } from "./dashboard-details";
import { ProgressRing } from "./dashboard-overview";
import type { QuestionStatus } from "@/lib/onboarding/progress-state";

export type BriefFilter = "all" | "remaining" | "answered" | "follow-ups";
type BriefQuestion = DashboardModel["phases"][number]["questions"][number];
const statusLabels: Record<QuestionStatus, string> = {
  answered: "Answered",
  pending: "Not answered",
  later: "For later",
  attention: "Needs attention",
  review: "Review",
};
const statusIcons = {
  answered: CircleCheck,
  pending: CircleDashed,
  later: Clock3,
  attention: CircleAlert,
  review: CircleDashed,
};

export function BriefView({
  model,
  selectedPhase,
  onPhase,
  query,
  onSearch,
  onboardingBase,
  filter,
  onFilter,
}: {
  model: DashboardModel;
  selectedPhase: string;
  onPhase: (id: string) => void;
  query: string;
  onSearch: (value: string) => void;
  onboardingBase: string;
  filter: BriefFilter;
  onFilter: (filter: BriefFilter) => void;
}) {
  const { briefProgress: progress } = model;
  const normalized = query.trim().toLowerCase();
  const followupIds = new Set([
    ...model.openItems.map((item) => item.questionId),
    ...model.phases.flatMap((phase) =>
      phase.questions
        .filter((question) => question.status === "later")
        .map((question) => question.id),
    ),
  ]);
  function matches(question: BriefQuestion, phaseTitle: string) {
    return (
      (filter === "all" ||
        (filter === "remaining" &&
          ["pending", "attention"].includes(question.status)) ||
        (filter === "answered" && question.status === "answered") ||
        (filter === "follow-ups" && followupIds.has(question.id))) &&
      (!normalized ||
        [
          phaseTitle,
          question.page.title,
          question.question.label,
          formatAnswer(model.answers[question.id], question.question),
        ].some((text) => text.toLowerCase().includes(normalized)))
    );
  }
  const phases = model.phases
    .map((phase) => ({
      ...phase,
      matching: phase.questions.filter((question) =>
        matches(question, phase.title),
      ),
    }))
    .filter((phase) => phase.matching.length);
  const active =
    phases.find((phase) => phase.id === selectedPhase) ?? phases[0];
  const firstPending =
    active?.questions.find(
      (question) =>
        question.status === "pending" || question.status === "attention",
    ) ?? active?.questions.find((question) => question.status === "later");
  const filters = [
    { id: "all", label: "All questions", count: progress.total },
    {
      id: "remaining",
      label: "To complete",
      count: progress.missing + progress.attention,
    },
    { id: "follow-ups", label: "Follow-ups", count: followupIds.size },
    { id: "answered", label: "Answered", count: progress.answered },
  ] as const;
  return (
    <>
      <ViewHeading
        title="Your project brief"
        description="Review your onboarding progress, check the answers you’ve shared, and fill in any missing details."
      />
      <section
        aria-label="Your brief progress"
        className="mb-6 grid gap-5 rounded-[20px] border border-[var(--workspace-line)] bg-white p-5 sm:p-6 xl:grid-cols-[1fr_1.2fr]"
      >
        <div className="flex items-center gap-4">
          <ProgressRing percent={progress.percent} />
          <div>
            <p className="text-base font-medium">
              {progress.percent === 100
                ? "Every detail is covered"
                : "Your brief is taking shape"}
            </p>
            <p className="mt-1 text-sm text-[var(--workspace-muted)]">
              {progress.answered} of {progress.total} questions answered
            </p>
            <p className="mt-2 text-xs text-[var(--workspace-muted)]">
              {model.completedPhases} of {model.phases.length} phases complete
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 border-t border-[var(--workspace-line)] pt-5 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={`brief-status ${model.submitted ? "brief-status-answered" : "brief-status-pending"}`}
            >
              {model.submitted
                ? "Submitted to your agency"
                : "Draft · Not submitted"}
            </span>
            {!model.submitted && (
              <Link
                href={`${onboardingBase}?question=review&returnTo=brief&mode=phase`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--commerce-green)]"
              >
                Review and send
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
          <p className="text-xs leading-relaxed text-[var(--workspace-muted)]">
            {progress.percent === 100
              ? model.submitted
                ? "You can update any answer. Changes reopen your brief for review and submission."
                : "Your answers are complete. Review and submit your brief to finish onboarding."
              : "Completion counts answered and not-applicable questions. Details saved for later remain open; you can still discuss them with your agency."}
          </p>
        </div>
      </section>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label="Filter brief questions"
          className="flex flex-wrap gap-1 rounded-2xl bg-[var(--workspace-soft)] p-1"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => onFilter(item.id)}
              className={`workspace-filter-button inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-xs font-medium sm:text-sm ${filter === item.id ? "bg-[var(--commerce-deep)] text-white" : "text-[var(--workspace-muted)] hover:bg-white"}`}
            >
              {item.label}
              <span className="rounded-md bg-black/5 px-1.5 py-0.5 text-xs tabular-nums">
                {item.count}
              </span>
            </button>
          ))}
        </div>
        <label className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-[var(--workspace-line)] bg-white px-3 sm:w-auto">
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            aria-label="Search questions and answers"
            placeholder="Search questions or answers"
            value={query}
            onChange={(event) => onSearch(event.target.value)}
            className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none sm:w-56"
          />
        </label>
      </div>
      <div className="grid items-start gap-5 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="min-w-0 overflow-hidden rounded-[20px] border border-[var(--workspace-line)] bg-white">
          <div className="flex items-center justify-between border-b border-[var(--workspace-line)] px-5 py-4">
            <h2 className="text-sm font-medium">Onboarding phases</h2>
            <span className="text-xs text-[var(--workspace-muted)]">
              {phases.length} shown
            </span>
          </div>
          <div className="p-4 lg:hidden">
            <label
              htmlFor="brief-phase"
              className="mb-2 block text-xs text-[var(--workspace-muted)]"
            >
              Choose a phase
            </label>
            <select
              id="brief-phase"
              value={active?.id ?? ""}
              disabled={!phases.length}
              onChange={(event) => onPhase(event.target.value)}
              className="min-h-12 w-full min-w-0 rounded-xl border border-[var(--workspace-line)] bg-[var(--workspace-surface)] px-3 text-sm"
            >
              {!phases.length && <option value="">No matching phases</option>}
              {phases.map((phase) => (
                <option key={phase.id} value={phase.id}>
                  {model.phases.findIndex((item) => item.id === phase.id) + 1}.{" "}
                  {phase.title} · {phase.resolvedPercent}%
                </option>
              ))}
            </select>
          </div>
          <nav
            aria-label="Onboarding phases"
            className="hidden max-h-[650px] overflow-y-auto p-2 lg:block"
          >
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => onPhase(phase.id)}
                aria-current={active?.id === phase.id ? "true" : undefined}
                className="workspace-topic-button mb-1 flex w-full items-start gap-3 rounded-xl p-3 text-left hover:bg-[var(--workspace-soft)]"
              >
                <span
                  className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-xs ${phase.resolved ? "bg-[var(--workspace-tint)] text-[var(--commerce-green)]" : "bg-[var(--workspace-soft)] text-[var(--workspace-muted)]"}`}
                >
                  {phase.resolved ? (
                    <Check size={14} aria-label="Complete" />
                  ) : (
                    model.phases.findIndex((item) => item.id === phase.id) + 1
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium leading-snug">
                    {phase.title}
                  </span>
                  <span className="mt-1.5 block text-xs text-[var(--workspace-muted)]">
                    {phase.answered}/{phase.total} answered ·{" "}
                    {phase.resolvedPercent}%
                  </span>
                  <span className="mt-2 block h-1 overflow-hidden rounded-full bg-[var(--workspace-line)]">
                    <svg width="100%" height="4" aria-hidden="true">
                      <rect
                        width={`${phase.resolvedPercent}%`}
                        height="4"
                        fill="var(--commerce-green)"
                      />
                    </svg>
                  </span>
                  {phase.later > 0 && (
                    <span className="mt-1.5 block text-xs text-[var(--workspace-warning)]">
                      {phase.later} for later
                    </span>
                  )}
                </span>
                <ChevronRight
                  size={14}
                  className="mt-1 text-[var(--workspace-muted)]"
                  aria-hidden="true"
                />
              </button>
            ))}
            {!phases.length && (
              <p className="p-4 text-sm text-[var(--workspace-muted)]">
                No phases match this filter.
              </p>
            )}
          </nav>
        </aside>
        <section
          aria-labelledby="brief-phase-heading"
          className="min-w-0 overflow-hidden rounded-[20px] border border-[var(--workspace-line)] bg-white"
        >
          {active ? (
            <>
              <div className="border-b border-[var(--workspace-line)] p-5 sm:p-6">
                <p className="mb-2 text-xs font-medium text-[var(--commerce-green)]">
                  PHASE{" "}
                  {model.phases.findIndex((phase) => phase.id === active.id) +
                    1}{" "}
                  OF {model.phases.length}
                </p>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2
                      id="brief-phase-heading"
                      className="text-xl font-medium tracking-tight sm:text-2xl"
                    >
                      {active.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--workspace-muted)]">
                      {active.topics.join(" · ")}
                    </p>
                  </div>
                  <span
                    className={`brief-status ${active.resolved ? "brief-status-answered" : "brief-status-pending"}`}
                  >
                    {active.resolved
                      ? "Complete"
                      : `${active.resolvedPercent}% complete`}
                  </span>
                </div>
                <Progress
                  value={active.resolvedPercent}
                  aria-label={`${active.title} completion`}
                  className="mt-5 [&_[data-slot=progress-track]]:h-1.5"
                />
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--workspace-muted)]">
                  <span>{active.answered} answered</span>
                  <span>{active.missing} not answered</span>
                  <span>{active.attention} need attention</span>
                  <span>{active.later} for later</span>
                </div>
                {firstPending && (
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[var(--workspace-soft)] p-4">
                    <p className="text-sm text-[var(--workspace-muted)]">
                      {active.missing + active.attention
                        ? "Pick up where you left off."
                        : "Ready to revisit the details saved for later?"}
                    </p>
                    <Link
                      href={getBriefQuestionHref(
                        onboardingBase,
                        active,
                        firstPending.id,
                        "phase",
                      )}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--commerce-green)] px-4 text-xs font-medium text-white hover:bg-[var(--commerce-deep)]"
                    >
                      {active.answered || active.later
                        ? "Continue phase"
                        : "Start phase"}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="border-b border-[var(--workspace-line)] bg-[var(--workspace-surface)] px-5 py-3 text-xs text-[var(--workspace-muted)] sm:px-6"
                role="status"
              >
                Showing {active.matching.length} of {active.total} questions in
                this phase
                {filter !== "all"
                  ? ` · ${filters.find((item) => item.id === filter)?.label}`
                  : ""}
              </div>
              <ol className="divide-y divide-[var(--workspace-line)]">
                {active.matching.map((item) => {
                  const answer = model.answers[item.id];
                  const Icon = statusIcons[item.status];
                  return (
                    <li key={item.id} className="p-5 sm:p-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs text-[var(--workspace-muted)]">
                          Question{" "}
                          {active.questions.findIndex(
                            (question) => question.id === item.id,
                          ) + 1}{" "}
                          · {item.page.title}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.status === "answered" &&
                            followupIds.has(item.id) && (
                              <span className="brief-status brief-status-later">
                                <CircleAlert size={13} aria-hidden="true" />
                                Follow-up requested
                              </span>
                            )}
                          <span
                            className={`brief-status brief-status-${item.status}`}
                          >
                            <Icon size={13} aria-hidden="true" />
                            {answer?.state === "not-applicable" &&
                            item.status === "answered"
                              ? "Not applicable"
                              : statusLabels[item.status]}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm font-medium leading-relaxed sm:text-base">
                        {item.question.label}
                      </h3>
                      <div
                        className={`mt-3 rounded-xl p-4 text-sm leading-relaxed ${item.status === "pending" ? "border border-dashed border-[var(--workspace-line)] text-[var(--workspace-muted)]" : "bg-[var(--workspace-surface)]"}`}
                      >
                        {item.status === "pending" ? (
                          <p>No answer provided yet.</p>
                        ) : (
                          <>
                            <p className="mb-1 text-xs font-medium text-[var(--workspace-muted)]">
                              Your saved answer
                            </p>
                            <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                              {formatAnswer(answer, item.question)}
                            </p>
                          </>
                        )}
                      </div>
                      {item.status === "attention" && (
                        <p className="mt-3 text-xs leading-relaxed text-[var(--workspace-warning)]">
                          {item.error ||
                            "Please check this answer before finishing the phase."}
                        </p>
                      )}
                      {item.status === "pending" && item.question.help && (
                        <p className="mt-3 text-xs leading-relaxed text-[var(--workspace-muted)]">
                          {item.question.help}
                        </p>
                      )}
                      <div className="mt-3 flex justify-end">
                        <Link
                          href={getBriefQuestionHref(
                            onboardingBase,
                            active,
                            item.id,
                          )}
                          aria-label={`${item.status === "answered" ? "Edit answer" : "Answer question"}: ${item.question.label}`}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--workspace-line)] px-4 text-xs font-medium text-[var(--commerce-green)] hover:bg-[var(--workspace-soft)]"
                        >
                          {item.status === "answered"
                            ? "Edit answer"
                            : item.status === "attention"
                              ? "Check answer"
                              : "Answer now"}
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="border-t border-[var(--workspace-line)] p-5 text-xs leading-relaxed text-[var(--workspace-muted)] sm:px-6">
                Open a question to update it. Your saved answer will be
                prefilled, and you can return to this phase after saving.
              </p>
            </>
          ) : (
            <div className="px-6 py-16 text-center">
              <Search
                size={28}
                className="mx-auto mb-4 text-[var(--workspace-muted)]"
                aria-hidden="true"
              />
              <h2 id="brief-phase-heading" className="text-lg font-medium">
                {normalized
                  ? "No matching questions"
                  : filter === "remaining"
                    ? "No unanswered questions"
                    : filter === "follow-ups"
                      ? "No details saved for later"
                      : "No questions to show"}
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[var(--workspace-muted)]">
                {normalized
                  ? "Try another search or clear the filters to see your brief."
                  : "Choose another filter to review the rest of your brief."}
              </p>
              <Button
                variant="outline"
                className="mt-5 min-h-11 rounded-full"
                onClick={() => {
                  onFilter("all");
                  onSearch("");
                }}
              >
                Show all questions
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
