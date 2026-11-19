"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OnboardingPhases } from "./onboarding-phases";
import { useRef, useState } from "react";
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
import { DashboardShell } from "./dashboard-shell";
import { DashboardOverview } from "./dashboard-overview";
import { BriefView, type BriefFilter } from "./project-brief";
import { AgreementView, JourneyView, ResourcesView } from "./dashboard-details";
import { useI18n } from "@/context/i18n-context";

export function ClientWorkspace({
  data,
  name,
  preview = false,
}: {
  data: WorkspaceData;
  name: string;
  preview?: boolean;
}) {
  const { content } = useI18n();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const completedId = params.get("completedPhase");
  const requestedView = params.get("view");
  const view: WorkspaceView =
    requestedView === "brief" ||
    requestedView === "journey" ||
    requestedView === "resources" ||
    requestedView === "agreement"
      ? requestedView
      : "overview";
  const selectedPhase = params.get("phase") ?? "";
  const requestedFilter = params.get("filter");
  const briefFilter: BriefFilter =
    requestedFilter === "remaining" ||
    requestedFilter === "answered" ||
    requestedFilter === "follow-ups"
      ? requestedFilter
      : "all";
  const [query, setQuery] = useState("");
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [exportStatus, setExportStatus] = useState<"idle" | "preparing" | "downloaded" | "error">("idle");
  const exportInFlight = useRef(false);
  const model = getDashboardModel(data, content);
  const displayName = name || answerText(model.answers, "P01.1");
  const onboardingBase = preview ? "/onboarding/preview" : "/onboarding";
  const onboardingHref = `${onboardingBase}?question=review`;
  function updateLocation(
    next: WorkspaceView,
    phase?: string,
    filter: BriefFilter = "all",
  ) {
    const search = new URLSearchParams();
    if (next !== "overview") search.set("view", next);
    if (next === "brief" && phase) search.set("phase", phase);
    if (next === "brief" && filter !== "all") search.set("filter", filter);
    router.push(`${pathname}${search.size ? `?${search}` : ""}`, {
      scroll: false,
    });
  }
  function navigate(next: WorkspaceView) {
    setQuery("");
    updateLocation(next);
  }
  function openBrief(phase?: string) {
    setQuery("");
    updateLocation("brief", phase);
  }
  function openTopic(id: string) {
    openBrief(
      model.phases.find((phase) =>
        phase.questions.some((question) => question.page.id === id),
      )?.id,
    );
  }
  function search(value: string) {
    setQuery(value);
    if (view !== "brief" || briefFilter !== "all") updateLocation("brief");
  }
  async function exportReport() {
    if (exportInFlight.current) return;
    exportInFlight.current = true;
    setExportStatus("preparing");
    try {
      const { downloadProjectReport } = await import("@/lib/onboarding/project-report-pdf");
      await downloadProjectReport(data);
      setExportStatus("downloaded");
    } catch {
      setExportStatus("error");
    } finally {
      exportInFlight.current = false;
    }
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
          phasePanel={
            <OnboardingPhases
              model={model}
              completedId={completedId}
              onOpenBrief={openBrief}
            />
          }
          model={model}
          data={data}
          name={displayName}
          onNavigate={navigate}
          onTopic={openTopic}
          onExport={exportReport}
          exportStatus={exportStatus}
          onFollowups={() => {
            setQuery("");
            updateLocation("brief", undefined, "follow-ups");
          }}
        />
      )}
      {view === "brief" && (
        <BriefView
          model={model}
          selectedPhase={selectedPhase}
          onPhase={(id) => updateLocation("brief", id, briefFilter)}
          query={query}
          onSearch={setQuery}
          filter={briefFilter}
          onFilter={(filter) => updateLocation("brief", selectedPhase, filter)}
          onboardingBase={onboardingBase}
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
        <ResourcesView
          model={model}
          onboardingHref={onboardingHref}
          documents={data.documents}
          preview={preview}
        />
      )}
      {view === "agreement" && <AgreementView data={data} />}
      <Dialog open={updatesOpen} onOpenChange={setUpdatesOpen}>
        <DialogContent className="workspace-theme max-h-[85svh] overflow-y-auto sm:max-w-lg">
          <DialogTitle>{content.dashboard.updates.title}</DialogTitle>
          <DialogDescription>
            {content.dashboard.updates.description}
          </DialogDescription>
          <div className="space-y-4">
            {model.activity.map((item) => (
              <button
                key={`${item.title}-${item.time}`}
                onClick={() => {
                  setUpdatesOpen(false);
                  navigate(item.view);
                }}
                className="flex w-full items-start gap-3 rounded-xl bg-[var(--workspace-soft)] p-4 text-left transition-colors hover:bg-[var(--workspace-tint)]"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--commerce-green)]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-[var(--workspace-muted)]">
                    {item.detail}
                  </p>
                  <p className="mt-2 text-[10px] text-[var(--workspace-subtle)]">
                    {new Date(item.time).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[var(--workspace-muted)]"
                />
              </button>
            ))}
            {!model.activity.length && (
              <p className="rounded-xl bg-[var(--workspace-tint)] p-4 text-sm text-[var(--workspace-muted)]">
                {content.dashboard.updates.empty}
              </p>
            )}
          </div>
          <h2 className="mt-3 text-sm font-medium">
            {content.dashboard.updates.openQuestionsPrefix}{model.openItems.length}{content.dashboard.updates.openQuestionsSuffix}
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
                  className="flex w-full items-start gap-3 rounded-xl border border-[var(--workspace-line)] p-3 text-left"
                >
                  <Flag size={15} className="mt-0.5 shrink-0 text-[#74652b]" />
                  <div>
                    <p className="text-xs leading-relaxed">{item.label}</p>
                    <p className="mt-1 text-[11px] text-[var(--workspace-subtle)]">
                      {item.detail || content.dashboard.updates.revisitDefault}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[var(--workspace-muted)]">
              {content.dashboard.updates.noFollowups}
            </p>
          )}
          <Button
            variant="outline"
            onClick={() => {
              setUpdatesOpen(false);
              navigate("journey");
            }}
          >
            {content.dashboard.updates.viewProjectJourney}
          </Button>
          <Link
            href={onboardingHref}
            className="text-center text-xs text-[var(--workspace-muted)]"
          >
            {data.draft ? content.dashboard.updates.updateBrief : content.dashboard.updates.startBrief}
          </Link>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
