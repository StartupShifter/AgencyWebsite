// Offline fixtures only; the live client uses the backend-supplied phase definitions.
import { DEFAULT_DEFINITION } from "./default-definition";
import { getOnboardingPhases as buildPhases } from "./phase-engine";
import type { Answers } from "./types";
export * from "./phase-engine";
export const CORE_PHASES = DEFAULT_DEFINITION.phases;
export function getOnboardingPhases(answers: Answers = {}, extras: string[] = [], privacyReady = true) {
  return buildPhases(DEFAULT_DEFINITION, answers, extras, privacyReady);
}
