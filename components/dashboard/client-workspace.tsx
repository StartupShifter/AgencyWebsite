"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  answerText,
  getDashboardModel,
  type WorkspaceData,
  type WorkspaceView,
} from "@/lib/onboarding/dashboard";
import { formatAnswer } from "@/lib/onboarding/questionnaire";
import { DashboardShell } from "./dashboard-shell";
import { DashboardOverview } from "./dashboard-overview";
import {
  AgreementView,
  BriefView,
  JourneyView,
  ResourcesView,
} from "./dashboard-details";

export function ClientWorkspace({
  data,
  name,
  preview = false,
}: {
  data: WorkspaceData;
  name: string;
  preview?: boolean;
}) {
  const [view, setView] = useState<WorkspaceView>("overview");
  const [selectedTopic, setSelectedTopic] = useState("P01");
  const [briefFilter, setBriefFilter] = useState<"all" | "follow-ups">("all");
  const [query, setQuery] = useState("");
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const model = getDashboardModel(data);
  const displayName = name || answerText(model.answers, "P01.1");
  const onboardingHref = preview ? "/onboarding/preview" : "/onboarding";
  function navigate(next: WorkspaceView) {
    setView(next);
    setQuery("");
    setBriefFilter("all");
  }
  function openTopic(id: string) {
    setSelectedTopic(id);
    navigate("brief");
  }
  function search(value: string) {
    setQuery(value);
    setView("brief");
    setBriefFilter("all");
  }
  function exportBrief() {
    if (!data.draft) return;
    const brief = {
      business: model.businessName,
      status: data.draft.status,
      lastSaved: new Date(data.draft.updatedAt).toISOString(),
      submittedAt: data.draft.submittedAt
        ? new Date(data.draft.submittedAt).toISOString()
        : null,
      topics: model.topics.map((topic) => ({
        title: topic.title,
        answers: topic.questions.map((question) => ({
          question: question.label,
          answer: formatAnswer(model.answers[question.id]),
        })),
      })),
    };
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(brief, null, 2)], { type: "application/json" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "starter-shifter-project-brief.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <DashboardShell
      name={displayName}
      businessName={model.businessName}
      view={view}
      onNavigate={navigate}
      onSearch={search}
      onUpdates={() => setUpdatesOpen(true)}
      searchQuery={query}
      preview={preview}
    >
      {view === "overview" && (
        <DashboardOverview
          model={model}
          data={data}
          name={displayName}
          onboardingHref={onboardingHref}
          onNavigate={navigate}
          onTopic={openTopic}
          onExport={exportBrief}
          onFollowups={() => {
            navigate("brief");
            setBriefFilter("follow-ups");
          }}
        />
      )}
      {view === "brief" && (
        <BriefView
          model={model}
          selectedTopic={selectedTopic}
          onTopic={setSelectedTopic}
          query={query}
          onSearch={setQuery}
          initialFilter={briefFilter}
          onboardingHref={onboardingHref}
        />
      )}
      {view === "journey" && (
        <JourneyView
          model={model}
          data={data}
          onboardingHref={onboardingHref}
        />
      )}
      {view === "resources" && (
        <ResourcesView model={model} onboardingHref={onboardingHref} />
      )}
      {view === "agreement" && <AgreementView data={data} />}
      <Dialog open={updatesOpen} onOpenChange={setUpdatesOpen}>
        <DialogContent className="max-h-[85svh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>Updates & follow-ups</DialogTitle>
          <DialogDescription>
            Your latest saved progress and details to revisit.
          </DialogDescription>
          <div className="space-y-4">
            {model.activity.map((item) => (
              <button
                key={`${item.title}-${item.time}`}
                onClick={() => {
                  setUpdatesOpen(false);
                  navigate(item.view);
                }}
                className="flex w-full items-start gap-3 rounded-xl bg-[#f2f5ec] p-4 text-left"
              >
                <Check size={17} className="mt-0.5 shrink-0 text-[#81946a]" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-[#8a937d]">{item.detail}</p>
                  <p className="mt-2 text-[10px] text-[#9fa791]">
                    {new Date(item.time).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <ArrowUpRight size={15} className="shrink-0 text-[#8a937d]" />
              </button>
            ))}
            {!model.activity.length && (
              <p className="rounded-xl bg-[#f2f5ec] p-4 text-sm text-[#8a937d]">
                Start your project brief to see your updates here.
              </p>
            )}
          </div>
          <h2 className="mt-3 text-sm font-medium">
            Open questions ({model.openItems.length})
          </h2>
          {model.openItems.length ? (
            <div className="space-y-2">
              {model.openItems.map((item) => (
                <button
                  key={item.questionId}
                  onClick={() => {
                    setUpdatesOpen(false);
                    openTopic(item.pageId);
                  }}
                  className="flex w-full items-start gap-3 rounded-xl border border-[#e9ecdf] p-3 text-left"
                >
                  <Flag size={15} className="mt-0.5 shrink-0 text-[#a29767]" />
                  <div>
                    <p className="text-xs leading-relaxed">{item.label}</p>
                    <p className="mt-1 text-[11px] text-[#9a9f8b]">
                      {item.detail || "Revisit this answer with your agency."}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#8a937d]">
              No follow-ups flagged in your brief.
            </p>
          )}
          <Button
            variant="outline"
            onClick={() => {
              setUpdatesOpen(false);
              navigate("journey");
            }}
          >
            View project journey
          </Button>
          <Link
            href={onboardingHref}
            className="text-center text-xs text-[#71835e]"
          >
            {data.draft ? "Update my brief" : "Start my brief"}
          </Link>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
