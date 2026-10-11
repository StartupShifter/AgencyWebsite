"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  CircleDashed,
  Clock3,
  ExternalLink,
  FileText,
  Flag,
  FolderOpen,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ANSWER_STATE_LABELS,
  formatAnswer,
} from "@/lib/onboarding/questionnaire";
import type { DashboardModel, WorkspaceData } from "@/lib/onboarding/dashboard";
import { panelClass, subtleButton } from "./dashboard-overview";

export function ViewHeading({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-[30px] font-medium leading-tight tracking-[-1px]">
          {title}
        </h1>
        <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#7a8172]">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export function BriefView({
  model,
  selectedTopic,
  onTopic,
  query,
  onSearch,
  onboardingHref,
  initialFilter = "all",
}: {
  model: DashboardModel;
  selectedTopic: string;
  onTopic: (id: string) => void;
  query: string;
  onSearch: (value: string) => void;
  onboardingHref: string;
  initialFilter?: "all" | "follow-ups";
}) {
  const [filter, setFilter] = useState<string>(initialFilter);
  const normalized = query.trim().toLowerCase();
  const topics = model.topics.filter(
    (topic) =>
      (filter === "all" ||
        (filter === "complete" && topic.percent === 100) ||
        (filter === "remaining" && topic.percent < 100) ||
        (filter === "follow-ups" &&
          model.openItems.some((item) => item.pageId === topic.id))) &&
      (!normalized ||
        [
          topic.title,
          ...topic.questions.flatMap((question) => [
            question.label,
            formatAnswer(model.answers[question.id]),
          ]),
        ].some((text) => text.toLowerCase().includes(normalized))),
  );
  const active =
    topics.find((topic) => topic.id === selectedTopic) ?? topics[0];
  const questionMatches =
    active?.questions.filter(
      (question) =>
        !normalized ||
        active.title.toLowerCase().includes(normalized) ||
        [question.label, formatAnswer(model.answers[question.id])].some(
          (text) => text.toLowerCase().includes(normalized),
        ),
    ) ?? [];
  return (
    <>
      <ViewHeading
        title="Your story, in one place."
        description="Every detail you’ve shared, organized into simple topics. Choose a topic to review your answers."
      >
        <Link
          href={onboardingHref}
          className="inline-flex items-center gap-2 rounded-full bg-[#252b24] px-4 py-2.5 text-xs font-medium text-white"
        >
          Edit my brief
          <ArrowUpRight size={15} />
        </Link>
      </ViewHeading>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label="Filter brief topics"
          className="flex flex-wrap gap-1 rounded-full bg-[#e9ece5] p-1"
        >
          {[
            { id: "all", label: "All topics" },
            { id: "remaining", label: "To complete" },
            { id: "complete", label: "Complete" },
            { id: "follow-ups", label: "Follow-ups" },
          ].map((item) => (
            <button
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-3 py-2 text-[11px] font-medium ${filter === item.id ? "bg-[#252b24] text-white" : "text-[#818a74] hover:text-[#252b24]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 rounded-full border border-[#e2e5df] bg-white px-4 py-2.5">
          <Search size={15} className="text-[#818a74]" />
          <input
            type="search"
            aria-label="Search topics and answers"
            value={query}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Find a detail…"
            className="w-40 bg-transparent text-xs outline-none"
          />
        </label>
      </div>
      <div className="grid items-start gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-[20px] border border-[#e7eae3] bg-white">
          <div className="border-b border-[#eef0eb] px-5 py-4 text-xs text-[#7a8172]">
            {topics.length} {topics.length === 1 ? "topic" : "topics"}
            {normalized ? " found" : " in your brief"}
          </div>
          <div className="p-4 lg:hidden">
            <label
              htmlFor="mobile-brief-topic"
              className="mb-2 block text-[11px] text-[#7a8172]"
            >
              Choose a topic
            </label>
            <select
              id="mobile-brief-topic"
              value={active?.id ?? ""}
              disabled={!topics.length}
              onChange={(event) => onTopic(event.target.value)}
              className="w-full rounded-xl border border-[#dce3d0] bg-[#f1f5e9] p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#879878]"
            >
              {!topics.length && <option value="">No matching topics</option>}
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.title} · {topic.percent}%
                </option>
              ))}
            </select>
          </div>
          <nav
            aria-label="Brief topics"
            className="hidden max-h-[590px] overflow-y-auto p-2 lg:block"
          >
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onTopic(topic.id)}
                aria-current={active?.id === topic.id ? "true" : undefined}
                className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-left ${active?.id === topic.id ? "bg-[#eaf0df]" : "hover:bg-[#f6f7f3]"}`}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] ${topic.percent === 100 ? "bg-[#dce9d3] text-[#617c50]" : active?.id === topic.id ? "bg-white text-[#71835f]" : "bg-[#f0f2ed] text-[#89917d]"}`}
                >
                  {topic.percent === 100 ? (
                    <Check size={13} />
                  ) : (
                    topic.id.replace(/^P|^M/, "")
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs leading-snug">{topic.title}</p>
                  <p className="mt-1 text-[10px] text-[#8a917f]">
                    {topic.completed} of {topic.total} complete
                  </p>
                </div>
                <ChevronRight size={13} className="shrink-0 text-[#8a917f]" />
              </button>
            ))}
          </nav>
        </div>
        <section className={panelClass}>
          {active ? (
            <>
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#8a917f]">
                    {active.kind === "module"
                      ? "Selected requirements"
                      : "Your project details"}
                  </span>
                  <h2 className="mt-1 text-xl font-medium tracking-[-.5px]">
                    {active.title}
                  </h2>
                  {active.description && (
                    <p className="mt-2 max-w-lg text-xs leading-relaxed text-[#7a8172]">
                      {active.description}
                    </p>
                  )}
                </div>
                <span className="rounded-full bg-[#edf2e6] px-3 py-1.5 text-[11px] text-[#71835f]">
                  {active.percent}% complete
                </span>
              </div>
              <Progress
                value={active.percent}
                aria-label={`${active.title} completion`}
                className="mb-6 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:bg-[#eef0eb] [&_[data-slot=progress-indicator]]:bg-[#aec68c]"
              />
              <dl className="divide-y divide-[#eef0eb]">
                {questionMatches.map((question) => {
                  const answer = model.answers[question.id];
                  return (
                    <div key={question.id} className="py-4 first:pt-0">
                      <dt className="mb-2 text-[12px] font-medium leading-relaxed text-[#4e5745]">
                        {question.label}
                      </dt>
                      <dd
                        className={`break-words whitespace-pre-wrap text-sm leading-relaxed ${!answer ? "text-[#a3a999]" : "text-[#252b24]"}`}
                      >
                        {formatAnswer(answer)}
                      </dd>
                      {answer &&
                        answer.state !== "answered" &&
                        answer.state !== "not-applicable" && (
                          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#f3efdc] px-2.5 py-1 text-[10px] text-[#897d45]">
                            <Flag size={11} />
                            {ANSWER_STATE_LABELS[answer.state]}
                          </span>
                        )}
                    </div>
                  );
                })}
              </dl>
              <div className="mt-6 flex items-center justify-between border-t border-[#eef0eb] pt-4">
                <span className="text-[11px] text-[#8a917f]">
                  Changes are saved through your onboarding brief.
                </span>
                <Link href={onboardingHref} className={subtleButton}>
                  Edit answers
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </>
          ) : (
            <div className="py-16 text-center">
              <Search size={28} className="mx-auto mb-4 text-[#9ca68c]" />
              <h2 className="font-medium">No matching topics</h2>
              <p className="mt-2 text-xs text-[#7a8172]">
                Try a different search or show all topics.
              </p>
              <Button
                variant="outline"
                className="mt-5 text-xs"
                onClick={() => {
                  setFilter("all");
                  onSearch("");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export function JourneyView({
  model,
  data,
  onboardingHref,
}: {
  model: DashboardModel;
  data: WorkspaceData;
  onboardingHref: string;
}) {
  const [selectedStage, setSelectedStage] = useState(0);
  const stages = [
    {
      title: "Your project brief",
      status: model.submitted ? "Complete" : "In progress",
      description:
        "Share your business, goals, content, and requirements. Your answers help shape the project discussion.",
      done: model.submitted,
    },
    {
      title: "Agreement & activation",
      status: model.workspaceReady
        ? "Verified"
        : model.submitted
          ? "Needs verification"
          : "Up next",
      description:
        "Your agency verifies the contact details, signed agreement, 40% advance, and project dependencies before activation.",
      done: model.workspaceReady,
    },
    {
      title: "Research & direction",
      status: "Upcoming",
      description:
        "Business, market, and competitor research establishes the direction. Timing and deliverables follow your agreed project scope.",
      done: false,
    },
    {
      title: "Design & feedback",
      status: "Upcoming",
      description:
        "Explore the agreed design work, review drafts, and share feedback. The number of variants and revisions follows your agreement.",
      done: false,
    },
    {
      title: "Build & connect",
      status: "Upcoming",
      description:
        "The agreed website, content, workflows, and supported connections take shape. Selected requirements are confirmed in the project scope.",
      done: false,
    },
    {
      title: "Review & handoff",
      status: "Upcoming",
      description:
        "Review the agreed deliverables and prepare for handoff. Launch requirements and ongoing support depend on your engagement.",
      done: false,
    },
  ];
  const selected = stages[selectedStage];
  const current = model.workspaceReady ? 2 : model.submitted ? 1 : 0;
  const completed = stages.filter((stage) => stage.done).length;
  return (
    <>
      <ViewHeading
        title="One step closer, every day."
        description="A clear view of your project’s preparation and the delivery journey ahead."
      />
      <section className={`${panelClass} mb-5`}>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#858d79]">Current checkpoint</p>
            <h2 className="mt-1.5 text-xl font-medium tracking-[-.4px]">
              {model.workspaceReady
                ? "Ready to arrange delivery"
                : stages[current].title}
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#edf2e5] px-3 py-2 text-xs text-[#6e805b]">
            <RouteIcon />
            {completed} preparation stages complete
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {stages.map((stage, index) => (
            <button
              key={stage.title}
              onClick={() => setSelectedStage(index)}
              aria-pressed={selectedStage === index}
              className={`relative rounded-2xl border p-4 text-left ${selectedStage === index ? "border-[#b8ca9e] bg-[#f1f5e9]" : "border-[#ecefe7] bg-[#fafbf8] hover:bg-[#f1f5e9]"}`}
            >
              <span
                className={`mb-5 flex size-8 items-center justify-center rounded-full text-xs ${stage.done ? "bg-[#d5fa43]" : index === current ? "bg-[#252b24] text-white" : "border border-[#dfe4d6] text-[#8b957e]"}`}
              >
                {stage.done ? <Check size={15} /> : index + 1}
              </span>
              <p className="min-h-9 text-xs font-medium leading-relaxed">
                {stage.title}
              </p>
              <p className="mt-2 text-[10px] text-[#7f8971]">{stage.status}</p>
            </button>
          ))}
        </div>
      </section>
      <div className="grid items-start gap-5 xl:grid-cols-[1.2fr_1fr]">
        <section className={panelClass}>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#eae4f4] text-[#806893]">
              {selectedStage + 1}
            </span>
            <div>
              <h2 className="text-base font-medium">{selected.title}</h2>
              <p className="mt-1 text-[11px] text-[#8a937d]">
                {selected.status}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#727e65]">
            {selected.description}
          </p>
          {selectedStage < 2 ? (
            <>
              <div className="mt-6 space-y-4">
                {(selectedStage === 0
                  ? model.prerequisites.filter((item) => item.id === "brief")
                  : model.prerequisites.filter((item) => item.id !== "brief")
                ).map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    {item.verified ? (
                      <CircleCheck
                        className="mt-0.5 shrink-0 text-[#789665]"
                        size={19}
                      />
                    ) : (
                      <CircleDashed
                        className="mt-0.5 shrink-0 text-[#a1ab94]"
                        size={19}
                      />
                    )}
                    <div>
                      <p className="text-xs font-medium">{item.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#8a937d]">
                        {item.detail}
                      </p>
                    </div>
                    <span className="ml-auto shrink-0 text-[10px] text-[#859577]">
                      {item.verified ? "Verified" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
              {selectedStage === 0 && (
                <Link
                  href={onboardingHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#252b24] px-4 py-2.5 text-xs text-white"
                >
                  {model.submitted ? "Review brief" : "Continue brief"}
                  <ArrowUpRight size={14} />
                </Link>
              )}
              {selectedStage === 1 && data.pending.length > 0 && (
                <details className="mt-6 rounded-xl bg-[#f7f8f3] p-4">
                  <summary className="cursor-pointer text-xs font-medium">
                    View all pending verification items ({data.pending.length})
                  </summary>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-xs leading-relaxed text-[#7a856b]">
                    {data.pending.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              )}
            </>
          ) : (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#f3f5ef] p-4">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-[#8a937d]" />
              <p className="text-xs leading-relaxed text-[#7a856b]">
                No delivery update has been recorded for this stage. Your agency
                will confirm the applicable work and timing after activation.
              </p>
            </div>
          )}
        </section>
        <section className={panelClass}>
          <h2 className="mb-5 text-base font-medium">Workspace activity</h2>
          {model.activity.length ? (
            <div className="space-y-6">
              {model.activity.map((item, index) => (
                <div key={`${item.title}-${item.time}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf2e5] text-[#7b9167]">
                      <Check size={14} />
                    </span>
                    {index < model.activity.length - 1 && (
                      <span className="mt-2 h-full w-px bg-[#e4e9dc]" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-[#87917a]">{item.detail}</p>
                    <time
                      dateTime={new Date(item.time).toISOString()}
                      className="mt-2 block text-[10px] text-[#a0a792]"
                    >
                      {new Date(item.time).toLocaleString("en", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-[#87917a]">
              Your saved progress and submission updates will appear here once
              you start your brief.
            </p>
          )}
          <p className="mt-6 border-t border-[#eef0e9] pt-4 text-[11px] leading-relaxed text-[#939b88]">
            These are your latest saved records. Delivery dates and completion
            are confirmed separately by your agency.
          </p>
        </section>
      </div>
    </>
  );
}
function RouteIcon() {
  return <span className="size-1.5 rounded-full bg-[#82956e]" />;
}

export function ResourcesView({
  model,
  onboardingHref,
}: {
  model: DashboardModel;
  onboardingHref: string;
}) {
  const urls = [
    ...new Set(
      Object.values(model.answers)
        .filter((answer) => answer.state === "answered")
        .flatMap((answer) => {
          const texts = Array.isArray(answer.value)
            ? answer.value
            : typeof answer.value === "object"
              ? Object.values(answer.value)
              : typeof answer.value === "string"
                ? [answer.value]
                : [];
          return [...texts, answer.detail ?? ""].flatMap(
            (text) => text.match(/https?:\/\/[^\s<>"']+/g) ?? [],
          );
        }),
    ),
  ].flatMap((raw) => {
    try {
      const url = new URL(raw.replace(/[),.;]+$/, ""));
      return url.protocol === "https:" || url.protocol === "http:"
        ? [{ url: url.href, host: url.hostname }]
        : [];
    } catch {
      return [];
    }
  });
  return (
    <>
      <ViewHeading
        title="The pieces of your brand."
        description="See the content readiness and reference links you shared in your project brief."
      >
        <Link
          href={onboardingHref}
          className="inline-flex items-center gap-2 rounded-full bg-[#252b24] px-4 py-2.5 text-xs text-white"
        >
          Update resources
          <ArrowUpRight size={15} />
        </Link>
      </ViewHeading>
      <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <section className={panelClass}>
          <h2 className="mb-2 text-base font-medium">
            Brand & content readiness
          </h2>
          <p className="mb-6 text-xs text-[#8a937d]">
            The asset statuses you recorded during onboarding.
          </p>
          {model.assets.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {model.assets.map((asset) => (
                <div key={asset.label} className="rounded-2xl bg-[#f4f6ef] p-4">
                  <FolderOpen size={23} className="mb-5 text-[#879878]" />
                  <h3 className="text-sm font-medium">{asset.label}</h3>
                  <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[10px] text-[#7f8b72]">
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#f4f6ef] p-8 text-center">
              <FolderOpen size={28} className="mx-auto mb-4 text-[#879878]" />
              <h3 className="text-sm font-medium">
                Let’s gather your starting points.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#87917a]">
                Add your logo, photos, copy, and content readiness to your
                brief. Final files can be shared securely with your agency.
              </p>
            </div>
          )}
          <div className="mt-6 border-t border-[#eef0e9] pt-4">
            <p className="mb-2 text-[11px] text-[#939b88]">Content contact</p>
            <p className="text-sm leading-relaxed">
              {formatAnswer(model.answers["P10.3"])}
            </p>
          </div>
        </section>
        <section className={panelClass}>
          <h2 className="mb-2 text-base font-medium">Your shared links</h2>
          <p className="mb-5 text-xs text-[#8a937d]">
            Website, folder, and reference links from your answers.
          </p>
          {urls.length ? (
            <ul className="divide-y divide-[#eef0e9]">
              {urls.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-4"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e1edf8] text-[#65809a]">
                      <ExternalLink size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">
                        {item.host}
                      </p>
                      <p className="mt-1 truncate text-[10px] text-[#939b88]">
                        {item.url}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#939b88]"
                    />
                    <span className="sr-only">Opens in a new tab</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl bg-[#f7f8f3] p-5 text-xs leading-relaxed text-[#87917a]">
              No reference links shared yet. You can add them while updating
              your brief.
            </p>
          )}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e5eadc] p-4">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#879878]" />
            <p className="text-xs leading-relaxed text-[#87917a]">
              Share files and access using your agreed secure method. Account
              passwords do not belong in your project brief.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export function AgreementView({ data }: { data: WorkspaceData }) {
  const engagement = data.engagement;
  return (
    <>
      <ViewHeading
        title="Clear scope. Shared expectations."
        description="Your agency’s confirmed engagement record, fees, and verification status."
      />
      {engagement ? (
        <>
          <div className="mb-5 grid gap-4 md:grid-cols-3">
            <section className="rounded-[20px] bg-[#eae4f4] p-6">
              <p className="text-xs text-[#806893]">Your engagement</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                {engagement.plan}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#806893]">
                {engagement.summary}
              </p>
            </section>
            <section className="rounded-[20px] bg-[#e1edf8] p-6">
              <p className="text-xs text-[#65809a]">Setup fee</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                <span className="mr-2 text-base">{engagement.currency}</span>
                {engagement.setupFee.toLocaleString()}
              </p>
              <p className="mt-3 text-xs text-[#65809a]">
                As recorded in your engagement
              </p>
            </section>
            <section className="rounded-[20px] bg-[#e0eee3] p-6">
              <p className="text-xs text-[#617a61]">Ongoing fee</p>
              <p className="mt-4 text-3xl font-medium tracking-[-1px]">
                {engagement.recurringFee !== undefined ? (
                  <>
                    <span className="mr-2 text-base">
                      {engagement.currency}
                    </span>
                    {engagement.recurringFee.toLocaleString()}
                  </>
                ) : (
                  "Not recorded"
                )}
              </p>
              <p className="mt-3 text-xs text-[#617a61]">
                {engagement.recurringFee !== undefined
                  ? "Per month, according to agreed scope"
                  : "Ongoing work follows your agreement"}
              </p>
            </section>
          </div>
          <div className="grid items-start gap-5 xl:grid-cols-[1.3fr_1fr]">
            <section className={panelClass}>
              <h2 className="mb-4 text-base font-medium">What’s included</h2>
              <ul className="space-y-3">
                {engagement.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <CircleCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-[#879878]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <details className="mt-6 border-t border-[#eef0e9] pt-4">
                <summary className="cursor-pointer text-xs font-medium">
                  Exclusions & third-party costs
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-[#87917a]">
                  {engagement.exclusions.join(", ") ||
                    "See your agreement for exclusions."}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#87917a]">
                  {engagement.thirdPartyCosts}
                </p>
              </details>
            </section>
            <section className={panelClass}>
              <h2 className="mb-5 text-base font-medium">
                Verification & billing
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: "Signed agreement",
                    verified: engagement.signedAgreementRef,
                  },
                  {
                    label: "40% advance",
                    verified: engagement.advancePaymentRef,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-xs"
                  >
                    <FileText size={17} className="text-[#879878]" />
                    <span className="flex-1">{item.label}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] ${item.verified ? "bg-[#edf2e5] text-[#6e805b]" : "bg-[#f3efdc] text-[#897d45]"}`}
                    >
                      {item.verified ? "Verified" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
              <dl className="mt-6 space-y-4 border-t border-[#eef0e9] pt-4 text-xs">
                <div>
                  <dt className="text-[#939b88]">Billing name</dt>
                  <dd className="mt-1.5">
                    {engagement.legalName || "Not recorded"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#939b88]">Billing email</dt>
                  <dd className="mt-1.5 break-all">
                    {engagement.billingEmail || "Not recorded"}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-[11px] leading-relaxed text-[#939b88]">
                Payment status reflects agency verification. This workspace does
                not collect payments.
              </p>
            </section>
          </div>
        </>
      ) : (
        <section
          className={`${panelClass} flex flex-col items-center py-16 text-center`}
        >
          <span className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-[#eae4f4] text-[#806893]">
            <FileText size={27} />
          </span>
          <h2 className="text-xl font-medium">Your agreement comes next.</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#87917a]">
            Once your agency records your engagement, you’ll see the approved
            scope, fees, billing details, and verification status here.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-[11px] text-[#939b88]">
            <span className="rounded-full bg-[#f3f5ef] px-3 py-2">
              Agreement awaiting confirmation
            </span>
            <span className="rounded-full bg-[#f3f5ef] px-3 py-2">
              40% advance awaiting verification
            </span>
          </div>
        </section>
      )}
    </>
  );
}
