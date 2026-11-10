import { getGuidedProgress, getGuidedSteps } from "./guided-flow";
import {
  answerValues,
  getPages,
  getSelectedModules,
} from "./questionnaire";
import type { Answers } from "./types";

export function answerText(answers: Answers, id: string, fallback = "") {
  const answer = answers[id];
  return answer?.state === "answered" &&
    typeof answer.value === "string" &&
    answer.value.trim()
    ? answer.value.trim()
    : fallback;
}

/**
 * A DB-friendly classification of a client's saved onboarding record.
 * It is derived only from persisted answers, so it never invents values.
 */
export function getClientSummary({
  answers,
  extraModules,
  status,
  submittedAt,
}: {
  answers: Answers;
  extraModules: string[];
  status: "draft" | "submitted";
  submittedAt?: number | null;
}) {
  const pages = getPages(answers, extraModules);
  const progress = getGuidedProgress(
    getGuidedSteps(pages, answers),
    answers,
    true,
  );
  const personalName = answerText(answers, "P01.2") === "Use my personal name";
  return {
    businessName:
      (personalName
        ? answerText(answers, "P01.1", "")
        : answerText(answers, "P01.2", "")) || "",
    contactName: answerText(answers, "P01.1", ""),
    contactEmail: answerText(answers, "P01.3", ""),
    description: answerText(answers, "P03.1", ""),
    selectedWork: answerValues(answers["P08.1"]),
    selectedModules: getSelectedModules(answers, extraModules),
    progress,
    status,
    submittedAt: submittedAt ?? null,
    topicCount: pages.length,
    questionCount: pages.reduce((total, page) => total + page.questions.length, 0),
  };
}
