"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuestionField } from "./question-field";
import { isAnswerEmpty, isQuestionVisible } from "@/lib/onboarding/engine";
import type { Answers, QuestionnaireDefinition, ValidationErrors } from "@/lib/onboarding/types";

/** Extra topics are available together at review; opening one never adds a phase. */
export function OptionalDetails({ definition, answers, recommended, errors, disabled, onChange }: {
  definition: QuestionnaireDefinition;
  answers: Answers;
  recommended: string[];
  errors: ValidationErrors;
  disabled: boolean;
  onChange: (id: string, answer: Answers[string]) => void;
}) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const topics = definition.pages.map(page => ({ ...page, questions: page.questions.filter(question => question.optionalDetail && isQuestionVisible(question, answers)) })).filter(page => page.questions.length);
  const visible = topics.filter(page => (showAll || query || page.kind !== "module" || recommended.includes(page.id) || page.questions.some(question => !isAnswerEmpty(answers[question.id]) || errors[question.id])) && `${page.title} ${page.questions.map(question => `${question.label} ${question.help}`).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  const answered = topics.flatMap(page => page.questions).filter(question => !isAnswerEmpty(answers[question.id]) && answers[question.id]?.state === "answered").length;
  return <section className="ob-optional-library" aria-labelledby="optional-details-heading">
    <div className="flex items-start justify-between gap-4"><div><h2 id="optional-details-heading" className="text-xl font-medium">Anything you’d like to add?</h2><p className="ob-help mt-2">Your main brief is enough to get started. Open a topic only if you have extra information ready. You can leave every topic blank and continue to the confirmations below.</p></div><SlidersHorizontal className="mt-1 shrink-0" size={22} aria-hidden="true" /></div>
    <div className="my-4 flex flex-wrap items-center gap-2"><Badge variant="secondary">Optional</Badge><span className="text-sm text-muted-foreground">{answered} extra answers saved · excluded from completion progress</span></div>
    <div className="mb-4 flex flex-col gap-3 sm:flex-row"><label className="flex min-w-0 flex-1 items-center gap-2"><Search size={17} aria-hidden="true" /><Input type="search" aria-label="Search optional topics" placeholder="Find a topic, such as returns or advertising…" value={query} onChange={event => setQuery(event.target.value)} /></label><Button type="button" variant="outline" disabled={disabled} aria-pressed={showAll} onClick={() => setShowAll(value => !value)}>{showAll ? "Show relevant topics" : "Browse all topics"}</Button></div>
    <Accordion multiple defaultValue={topics.filter(page => page.questions.some(question => errors[question.id])).map(page => page.id)}>
      {visible.map(page => <AccordionItem key={page.id} value={page.id}><AccordionTrigger><span className="flex flex-col gap-1"><span>{page.title}</span><span className="text-xs font-normal text-muted-foreground">{page.questions.length} optional {page.questions.length === 1 ? "question" : "questions"}{page.questions.some(question => errors[question.id]) ? " · check an answer" : ""}</span></span></AccordionTrigger><AccordionContent><fieldset disabled={disabled} className="flex min-w-0 flex-col gap-6 py-4"><legend className="sr-only">{page.title} — optional questions</legend>{page.questions.map(question => <div key={question.id}><QuestionField question={question} answer={answers[question.id]} error={errors[question.id]} onChange={answer => onChange(question.id, answer)} />{!isAnswerEmpty(answers[question.id]) && <Button type="button" variant="ghost" size="sm" className="mt-2" onClick={() => onChange(question.id, { state: "answered", value: "" })}>Clear this optional answer</Button>}</div>)}</fieldset></AccordionContent></AccordionItem>)}
    </Accordion>
    {!visible.length && <p className="ob-help py-5">No matching topics. Try another word or browse all topics.</p>}
  </section>;
}
