"use client";

import { useAssignedQuestionnaire } from "./use-assigned-questionnaire";
import { Suspense } from "react";
import { useQuery } from "convex/react";
import { useSessionId } from "convex-helpers/react/sessions";
import { api } from "@/convex/_generated/api";
import { ClientWorkspace } from "@/components/dashboard/client-workspace";
import { DashboardLoading } from "@/components/dashboard/dashboard-shell";
import { answerText } from "@/lib/onboarding/dashboard";
import { PreviewSessionProvider } from "./preview-session";

export function PreviewDashboard() {
  return (
    <Suspense fallback={<DashboardLoading preview />}><PreviewSessionProvider>
      <SavedPreviewDashboard />
    </PreviewSessionProvider></Suspense>
  );
}

function SavedPreviewDashboard() {
  const [sessionId] = useSessionId();
  const assignment = useAssignedQuestionnaire(Boolean(sessionId), sessionId);
  const questionnaire = useQuery(api.onboardingPreview.getQuestionnaire, sessionId ? { sessionId } : "skip");
  const draft = useQuery(
    api.onboardingPreview.getDraft,
    sessionId ? { sessionId } : "skip",
  );
  if (assignment.error) return <p role="alert">{assignment.error}</p>;
  if (!assignment.ready || !questionnaire || !sessionId || draft === undefined) return <DashboardLoading preview />;
  return (
    <ClientWorkspace
      preview
      name={answerText(draft?.answers ?? {}, "P01.1")}
      data={{
        draft,
        questionnaire,
        engagement: null,
        workspaceReady: false,
        pending: [
          "Verify the project or workspace contact email when you create your client account.",
          "Agree the project scope and complete the signed agreement.",
          "Have the agency verify the 40% advance against your agreed invoice.",
        ],
        project: null,
        stages: [],
        activityLog: [],
        documents: [],
      }}
    />
  );
}
