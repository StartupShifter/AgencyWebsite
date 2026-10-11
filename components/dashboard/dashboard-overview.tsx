"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  CircleDashed,
  ClipboardList,
  FileCheck2,
  Flag,
  Layers3,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type {
  DashboardModel,
  WorkspaceData,
  WorkspaceView,
} from "@/lib/onboarding/dashboard";

export const panelClass =
  "rounded-[20px] border border-[#e7eae3] bg-white p-5 sm:p-6";
export const subtleButton =
  "flex items-center gap-1.5 text-xs font-medium text-[#67765c] hover:text-[#20231f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#677d19]";

export function ProgressRing({ percent }: { percent: number }) {
  return (
    <svg
      viewBox="0 0 76 76"
      className="size-[82px] shrink-0"
      role="img"
      aria-label={`${percent}% of brief complete`}
    >
      <circle
        cx="38"
        cy="38"
        r="31"
        fill="none"
        stroke="#c8dced"
        strokeWidth="5"
      />
      <circle
        cx="38"
        cy="38"
        r="31"
        fill="none"
        stroke="#354d61"
        strokeWidth="5"
        pathLength="100"
        strokeDasharray={`${percent} 100`}
        strokeLinecap="round"
        transform="rotate(-90 38 38)"
      />
      <text
        x="38"
        y="42"
        textAnchor="middle"
        fill="#354d61"
        fontSize="17"
        fontWeight="600"
      >
        {percent}%
      </text>
    </svg>
  );
}

export function DashboardOverview({
  model,
  data,
  name,
  onboardingHref,
  onNavigate,
  onTopic,
  onExport,
  onFollowups,
}: {
  model: DashboardModel;
  data: WorkspaceData;
  name: string;
  onboardingHref: string;
  onNavigate: (view: WorkspaceView) => void;
  onTopic: (id: string) => void;
  onExport: () => void;
  onFollowups: () => void;
}) {
  const { progress, prerequisites, topics, submitted, openItems } = model;
  const verified = prerequisites.filter((item) => item.verified).length;
  const selected = topics.filter((topic) => topic.kind === "module");
  const sections = [
    {
      label: "Business",
      ids: ["P01", "P02", "P03", "P04", "P05"],
      color: "#bbd1e6",
    },
    { label: "Goals", ids: ["P06", "P07", "P08", "P09"], color: "#c4b7db" },
    {
      label: "Requirements",
      ids: ["P10", "P11", "P12", ...selected.map((topic) => topic.id)],
      color: "#acd0b5",
    },
    {
      label: "Confirmation",
      ids: ["P13", "P14", "P15", "P16"],
      color: "#d4d98a",
    },
  ].map((section) => {
    const rows = topics.filter((topic) => section.ids.includes(topic.id));
    return {
      ...section,
      complete: rows.reduce((sum, topic) => sum + topic.completed, 0),
      total: rows.reduce((sum, topic) => sum + topic.total, 0),
    };
  });
  const missingPrerequisite = prerequisites.find((item) => !item.verified);
  const nextTitle = !submitted
    ? "A great project starts with your story."
    : model.workspaceReady
      ? "Ready for your next chapter."
      : "Let’s get your project ready.";
  const nextDescription = !submitted
    ? "Tell us a little more about your business. Your progress is saved as you go."
    : model.workspaceReady
      ? "Your brief and prerequisites are verified. Your agency can now arrange the agreed next steps."
      : missingPrerequisite?.detail ||
        "Your agency will confirm the remaining prerequisites.";
  return (
    <>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs text-[#808777]">
            A little clarity. A lot of possibility.
          </p>
          <h1 className="text-[28px] font-medium leading-tight tracking-[-1.2px] sm:text-[34px]">
            Welcome back{name ? `, ${name.split(" ")[0]}` : ""}
            <span className="text-[#8c9878]">.</span>
          </h1>
          <p className="mt-2 text-[13px] text-[#7a8172]">
            Your project, at a glance. Everything you need to move forward.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {!submitted && (
            <Link
              href={onboardingHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#d5fa43] px-4 py-2.5 text-xs font-medium xl:hidden"
            >
              {data.draft ? "Continue my brief" : "Start my brief"}
              <ArrowUpRight size={14} />
            </Link>
          )}
          <Button
            variant="outline"
            className="rounded-full bg-white text-xs"
            onClick={onExport}
            disabled={!data.draft}
          >
            <ArrowDownToLine size={14} />
            Export brief
          </Button>
        </div>
      </div>
      <div className="mb-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-[1.45fr_1fr_1fr_1fr]">
        <button
          onClick={() => onNavigate("brief")}
          className="rounded-[18px] bg-[#e1edf8] p-5 text-left transition-colors hover:bg-[#d7e7f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#354d61]"
        >
          <div className="flex items-center justify-between text-xs text-[#52677a]">
            <span className="flex items-center gap-2">
              <ClipboardList size={16} />
              Your project brief
            </span>
            <ArrowUpRight size={15} />
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[32px] font-medium leading-none tracking-[-1.2px]">
                {progress.completed}
                <span className="text-lg font-normal text-[#748ba0]">
                  {" "}
                  / {progress.total}
                </span>
              </p>
              <p className="mt-2 text-[11px] text-[#52677a]">
                Questions complete
              </p>
              <span className="mt-3 inline-flex rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-medium">
                {submitted
                  ? "Submitted for review"
                  : data.draft
                    ? "Continue where you left off"
                    : "Your story starts here"}
              </span>
            </div>
            <ProgressRing percent={progress.percent} />
          </div>
        </button>
        <button
          onClick={() => onNavigate("journey")}
          className="rounded-[18px] bg-[#eae4f4] p-5 text-left transition-colors hover:bg-[#e1d9ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#675083]"
        >
          <div className="flex items-center justify-between text-xs text-[#75618c]">
            <span className="flex items-center gap-2">
              <FileCheck2 size={16} />
              Project readiness
            </span>
            <ArrowUpRight size={15} />
          </div>
          <p className="mt-5 text-[32px] font-medium leading-none tracking-[-1.2px]">
            {verified}
            <span className="text-lg font-normal text-[#8a789e]">
              {" "}
              / {prerequisites.length}
            </span>
          </p>
          <div className="mt-4 flex gap-1">
            {prerequisites.map((item) => (
              <span
                key={item.id}
                className={`h-1.5 flex-1 rounded-full ${item.verified ? "bg-[#8a729f]" : "bg-white/70"}`}
              />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-[#75618c]">
            {model.workspaceReady
              ? "Prerequisites verified"
              : "Prerequisites before activation"}
          </p>
        </button>
        <button
          onClick={() => onNavigate("brief")}
          className="rounded-[18px] bg-[#e0eee3] p-5 text-left transition-colors hover:bg-[#d4e7d8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b4c]"
        >
          <div className="flex items-center justify-between text-xs text-[#597762]">
            <span className="flex items-center gap-2">
              <Layers3 size={16} />
              Your requirements
            </span>
            <ArrowUpRight size={15} />
          </div>
          <p className="mt-5 text-[32px] font-medium leading-none tracking-[-1.2px]">
            {selected.length.toString().padStart(2, "0")}
          </p>
          <div className="mt-4 flex gap-1">
            <span className="rounded-md bg-white/60 p-1.5">
              <Layers3 size={15} />
            </span>
            <span className="flex items-center px-1 text-[11px] text-[#597762]">
              Tailored to your brief
            </span>
          </div>
          <p className="mt-3 text-[11px] text-[#597762]">
            Relevant service modules
          </p>
        </button>
        <button
          onClick={onFollowups}
          className="rounded-[18px] bg-[#f1efdc] p-5 text-left transition-colors hover:bg-[#eae7ca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#817b40]"
        >
          <div className="flex items-center justify-between text-xs text-[#817c52]">
            <span className="flex items-center gap-2">
              <Flag size={16} />
              Open questions
            </span>
            <ArrowUpRight size={15} />
          </div>
          <p className="mt-5 text-[32px] font-medium leading-none tracking-[-1.2px]">
            {openItems.length.toString().padStart(2, "0")}
          </p>
          <div className="mt-4 inline-flex rounded-full bg-white/65 px-2.5 py-1 text-[10px] font-medium text-[#6a6540]">
            {openItems.length
              ? "Let’s work through these"
              : "No follow-ups flagged"}
          </div>
          <p className="mt-3 text-[11px] text-[#817c52]">
            Details to revisit together
          </p>
        </button>
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">
        <div className="space-y-5">
          <section className={panelClass}>
            <div className="mb-5 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-base font-medium tracking-[-.4px]">
                  A clearer picture of your project
                </h2>
                <p className="mt-1 text-xs text-[#828977]">
                  Your brief completion, broken down by topic.
                </p>
              </div>
              <span className="rounded-full bg-[#f0f3e9] px-2.5 py-1 text-[10px] text-[#626e55]">
                {progress.percent}% complete
              </span>
            </div>
            <div
              className="flex h-9 overflow-hidden rounded-lg bg-[#f0f2ec]"
              aria-label="Question completion by category"
            >
              {sections.map((section) => (
                <div
                  key={section.label}
                  style={{ flex: section.total }}
                  className="border-r-2 border-white last:border-r-0"
                >
                  <svg width="100%" height="100%" aria-hidden="true">
                    <rect
                      width={`${(section.complete / Math.max(section.total, 1)) * 100}%`}
                      height="100%"
                      fill={section.color}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {sections.map((section) => (
                <button
                  key={section.label}
                  onClick={() => onTopic(section.ids[0])}
                  className="text-left"
                >
                  <span className="flex items-center gap-1.5 text-[11px] text-[#7e8574]">
                    <svg width="7" height="7" aria-hidden="true">
                      <circle cx="3.5" cy="3.5" r="3.5" fill={section.color} />
                    </svg>
                    {section.label}
                  </span>
                  <p className="mt-1.5 text-sm font-medium">
                    {section.complete}
                    <span className="font-normal text-[#9a9e93]">
                      {" "}
                      / {section.total}
                    </span>
                  </p>
                </button>
              ))}
            </div>
          </section>
          <section className={panelClass}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-base font-medium tracking-[-.4px]">
                Inside your brief
              </h2>
              <button
                className={subtleButton}
                onClick={() => onNavigate("brief")}
              >
                View all
                <ArrowUpRight size={14} />
              </button>
            </div>
            <p className="mb-4 text-xs text-[#828977]">
              Your details, organized. Open a topic to take a closer look.
            </p>
            <div className="divide-y divide-[#eef0eb]">
              {topics
                .filter((topic) =>
                  ["P03", "P06", "P08", "P10"].includes(topic.id),
                )
                .map((topic, index) => (
                  <button
                    key={topic.id}
                    onClick={() => onTopic(topic.id)}
                    className="group flex w-full items-center gap-3 py-3.5 text-left"
                  >
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${["bg-[#e1edf8] text-[#5a7790]", "bg-[#eae4f4] text-[#806893]", "bg-[#e0eee3] text-[#617a61]", "bg-[#f1efdc] text-[#8b8155]"][index]}`}
                    >
                      {index === 0 ? (
                        <Layers3 size={17} />
                      ) : index === 1 ? (
                        <Flag size={17} />
                      ) : index === 2 ? (
                        <Route size={17} />
                      ) : (
                        <ClipboardList size={17} />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium">{topic.title}</p>
                      <p className="mt-1 text-[10px] text-[#8d9385]">
                        {topic.recorded
                          ? `${topic.recorded} answers recorded`
                          : "Ready for your input"}
                      </p>
                    </div>
                    <span
                      className={`hidden rounded-full px-2.5 py-1 text-[10px] sm:block ${topic.percent === 100 ? "bg-[#eaf3e6] text-[#638152]" : "bg-[#f3f4ef] text-[#818876]"}`}
                    >
                      {topic.percent === 100 ? "Complete" : `${topic.percent}%`}
                    </span>
                    <ChevronRight
                      size={15}
                      className="text-[#a1a897] transition-transform group-hover:translate-x-1"
                    />
                  </button>
                ))}
            </div>
          </section>
        </div>
        <div className="space-y-5">
          <section className="relative overflow-hidden rounded-[20px] bg-[#252b24] p-6 text-white">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#6b765d] px-2.5 py-1 text-[10px] text-[#d5fa43]">
              <span className="size-1 rounded-full bg-[#d5fa43]" />
              Your next step
            </span>
            <h2 className="relative z-10 max-w-[230px] text-[25px] font-medium leading-[1.2] tracking-[-.7px]">
              {nextTitle}
            </h2>
            <p className="relative z-10 mb-6 mt-3 max-w-[250px] text-xs leading-relaxed text-[#b1b9a6]">
              {nextDescription}
            </p>
            {!submitted ? (
              <Link
                href={onboardingHref}
                className="relative z-10 inline-flex items-center gap-3 rounded-full bg-[#d5fa43] px-4 py-2.5 text-xs font-semibold text-[#252b24]"
              >
                {data.draft ? "Continue my brief" : "Start my brief"}
                <ArrowRight size={15} />
              </Link>
            ) : (
              <Button
                variant="lime"
                className="relative z-10 rounded-full text-xs"
                onClick={() => onNavigate("journey")}
              >
                View next steps
                <ArrowRight size={15} />
              </Button>
            )}
            <svg
              viewBox="0 0 160 160"
              className="pointer-events-none absolute -bottom-14 -right-9 size-48 text-[#536047]"
              aria-hidden="true"
            >
              <rect
                x="24"
                y="24"
                width="112"
                height="112"
                rx="22"
                fill="none"
                stroke="currentColor"
                transform="rotate(-22 80 80)"
              />
              <rect
                x="38"
                y="38"
                width="112"
                height="112"
                rx="22"
                fill="none"
                stroke="currentColor"
                transform="rotate(-22 94 94)"
              />
            </svg>
          </section>
          <section className={panelClass}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-medium tracking-[-.4px]">
                Before we begin
              </h2>
              <button
                aria-label="View all activation prerequisites"
                className={subtleButton}
                onClick={() => onNavigate("journey")}
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              {prerequisites.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center gap-2.5">
                  {item.verified ? (
                    <CircleCheck
                      size={17}
                      className="shrink-0 text-[#6b875b]"
                    />
                  ) : (
                    <CircleDashed
                      size={17}
                      className="shrink-0 text-[#a4aa9b]"
                    />
                  )}
                  <span className="flex-1 text-xs text-[#51594a]">
                    {item.label}
                  </span>
                  <span
                    className={`text-[10px] ${item.verified ? "text-[#6b875b]" : "text-[#949a8b]"}`}
                  >
                    {item.verified
                      ? "Verified"
                      : item.id === "brief"
                        ? "In progress"
                        : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section className="mt-5 flex flex-wrap items-center gap-4 rounded-[18px] border border-[#e4e8df] bg-[#eef2e7] px-5 py-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#71805e]">
          <Check size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xs font-medium">
            {model.activity[0]?.title ?? "Your workspace is ready for you"}
          </h2>
          <p className="mt-1 text-[11px] text-[#7a846b]">
            {model.activity[0]
              ? `${new Date(model.activity[0].time).toLocaleDateString("en", { month: "short", day: "numeric" })} · ${model.activity[0].detail}`
              : "Start your brief to see your saved details and progress here."}
          </p>
        </div>
        <button className={subtleButton} onClick={() => onNavigate("journey")}>
          View journey
          <ArrowUpRight size={14} />
        </button>
      </section>
    </>
  );
}
