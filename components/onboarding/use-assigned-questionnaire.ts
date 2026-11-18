"use client";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import type { SessionId } from "convex-helpers/server/sessions";
import { api } from "@/convex/_generated/api";

/** Pin a version before interaction, including clients who have not saved answers yet. */
export function useAssignedQuestionnaire(enabled: boolean, previewSessionId?: SessionId) {
  const ensure = useMutation(api.onboarding.ensureQuestionnaire);
  const ensurePreview = useMutation(api.onboardingPreview.ensureQuestionnaire);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    const request = previewSessionId ? ensurePreview({ sessionId: previewSessionId }) : ensure({});
    void request.then(() => { if (active) { setReady(true); setError(""); } }).catch(() => {
      if (active) setError("We could not load your assigned questionnaire. Reload to try again, or contact the agency if the problem continues.");
    });
    return () => { active = false; };
  }, [enabled, previewSessionId, ensure, ensurePreview]);
  return { ready, error };
}
