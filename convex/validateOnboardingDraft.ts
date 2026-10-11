import { ConvexError } from "convex/values";
import { getPages, getPageById, validateAnswerShape } from "../lib/onboarding/questionnaire";
import { getGuidedSteps } from "../lib/onboarding/guided-flow";
import type { Answers } from "../lib/onboarding/types";

export function validateDraftInput(args: { answers: Answers; extraModules: string[]; currentPage: string; currentQuestion?: string }) {
    const pages = getPages(args.answers, args.extraModules);
    const allIds = getPages({}, Array.from({ length: 26 }, (_, i) => `M${String(i + 1).padStart(2, "0")}`)).flatMap(p => p.questions.map(q => q.id));
    if (Object.keys(args.answers).some(id => !allIds.includes(id))) throw new ConvexError("Unknown question ID.");
    if (args.extraModules.length > 26 || args.extraModules.some(id => !/^M(0[1-9]|1[0-9]|2[0-6])$/.test(id))) throw new ConvexError("Invalid workflow selection.");
    if (!pages.some(p => p.id === args.currentPage)) throw new ConvexError("This page is not part of your current route.");
    if (args.currentQuestion !== undefined && !getGuidedSteps(pages, args.answers).some(step => step.id === args.currentQuestion && step.page.id === args.currentPage)) throw new ConvexError("This question is not part of the saved topic in your current route.");
    if (JSON.stringify(args.answers).length > 180_000) throw new ConvexError("Your answers are too long. Please use a document link for additional detail.");
    for (const [id, answer] of Object.entries(args.answers)) {
      const question = getPageById(id.split(".")[0])?.questions.find(question => question.id === id);
      if (!question) throw new ConvexError("Unknown question.");
      const error = validateAnswerShape(question, answer);
      if (error) throw new ConvexError(`${id}: ${error}`);
      if (typeof answer.value === "string" && answer.value.length > 6000 || (answer.detail?.length ?? 0) > 6000) throw new ConvexError("Please keep each answer under 6,000 characters.");
    }
}
