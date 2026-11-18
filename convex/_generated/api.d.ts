/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin from "../admin.js";
import type * as adminAccounts from "../adminAccounts.js";
import type * as auth from "../auth.js";
import type * as clientValidators from "../clientValidators.js";
import type * as clients from "../clients.js";
import type * as demo from "../demo.js";
import type * as documents from "../documents.js";
import type * as http from "../http.js";
import type * as onboarding from "../onboarding.js";
import type * as onboardingPreview from "../onboardingPreview.js";
import type * as onboardingValidators from "../onboardingValidators.js";
import type * as projects from "../projects.js";
import type * as provision from "../provision.js";
import type * as questionnaireAdmin from "../questionnaireAdmin.js";
import type * as questionnaireHttp from "../questionnaireHttp.js";
import type * as questionnaireMigration from "../questionnaireMigration.js";
import type * as questionnaireStore from "../questionnaireStore.js";
import type * as questionnaireValidators from "../questionnaireValidators.js";
import type * as testing from "../testing.js";
import type * as validateOnboardingDraft from "../validateOnboardingDraft.js";
import type * as workspace from "../workspace.js";
import type * as workspaceValidators from "../workspaceValidators.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  adminAccounts: typeof adminAccounts;
  auth: typeof auth;
  clientValidators: typeof clientValidators;
  clients: typeof clients;
  demo: typeof demo;
  documents: typeof documents;
  http: typeof http;
  onboarding: typeof onboarding;
  onboardingPreview: typeof onboardingPreview;
  onboardingValidators: typeof onboardingValidators;
  projects: typeof projects;
  provision: typeof provision;
  questionnaireAdmin: typeof questionnaireAdmin;
  questionnaireHttp: typeof questionnaireHttp;
  questionnaireMigration: typeof questionnaireMigration;
  questionnaireStore: typeof questionnaireStore;
  questionnaireValidators: typeof questionnaireValidators;
  testing: typeof testing;
  validateOnboardingDraft: typeof validateOnboardingDraft;
  workspace: typeof workspace;
  workspaceValidators: typeof workspaceValidators;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  betterAuth: import("@convex-dev/better-auth/_generated/component.js").ComponentApi<"betterAuth">;
};
