import { content } from "../../context/content";

/** Owner-confirmed use of onboarding information, 2026-10-11. */
export const onboardingPrivacyCopy = content.onboarding.privacyCopy;

export const ONBOARDING_PRIVACY_VERSION = "2026-10-11.project-use.v1";
export const ONBOARDING_PRIVACY_NOTICE = Object.values(onboardingPrivacyCopy).join("\n\n");
