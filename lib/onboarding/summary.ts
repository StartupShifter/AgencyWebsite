import { getGuidedProgress, getGuidedSteps } from "./guided-flow";
import { answerValues, getOptionLabel, createQuestionnaire } from "./engine";
import type { Answers, QuestionnaireDefinition } from "./types";

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
  definition,
  answers,
  extraModules,
  status,
  submittedAt,
}: {
  definition: QuestionnaireDefinition;
  answers: Answers;
  extraModules: string[];
  status: "draft" | "submitted";
  submittedAt?: number | null;
}) {
  const { getPages, getPageById, getSelectedModules } = createQuestionnaire(definition);
  const workQuestion = getPageById("P08")?.questions.find(question => question.id === "P08.1");
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
    selectedWork: answerValues(answers["P08.1"]).map(value => workQuestion ? getOptionLabel(workQuestion, value) : value),
    selectedModules: getSelectedModules(answers, extraModules),
    progress,
    status,
    submittedAt: submittedAt ?? null,
    topicCount: pages.length,
    questionCount: pages.reduce((total, page) => total + page.questions.length, 0),
  };
}
