import { getGuidedProgress, type GuidedStep } from "./guided-flow";
import type { Answers, Page } from "./types";

export type JourneyChapter = {
  id: string;
  title: string;
  description: string;
  note: string;
  pages: Page[];
  completed: number;
  total: number;
  percent: number;
};

const chapterDefinitions = [
  {
    id: "business",
    title: "Your business",
    description: "Meet the people, the business, and who it's all for.",
    note: "Good things start with a little hello.",
    includes: (page: Page) => /^P0[1-5]$/.test(page.id),
  },
  {
    id: "big-picture",
    title: "The big picture",
    description: "Explore your goals and the change you'd like to make.",
    note: "A clear direction. A shared goal.",
    includes: (page: Page) => /^P0[6-9]$/.test(page.id),
  },
  {
    id: "make-it-yours",
    title: "Make it yours",
    description: "Share your brand, practical needs, and plans for launch.",
    note: "Let’s give your ideas a little shape.",
    includes: (page: Page) => /^P1[0-2]$/.test(page.id),
  },
  {
    id: "project-details",
    title: "Project details",
    description: "A closer look at the work you've selected.",
    note: "The right pieces for your project.",
    includes: (page: Page) => page.kind === "module" || /^M\d{2}$/.test(page.id),
  },
  {
    id: "ready",
    title: "Ready, set, go",
    description: "Bring the people and practicalities together, then review.",
    note: "A little review. A big step forward.",
    includes: (page: Page) => /^P1[3-6]$/.test(page.id),
  },
];

/** Chapters are a presentation layer; persisted page and question IDs stay unchanged. */
export function getJourney(pages: Page[], steps: GuidedStep[], answers: Answers, privacyReady: boolean, currentPageId: string) {
  const chapters: JourneyChapter[] = chapterDefinitions.flatMap(({ includes, ...chapter }) => {
    const chapterPages = pages.filter(includes);
    if (!chapterPages.length) return [];
    const pageIds = new Set(chapterPages.map(page => page.id));
    const progress = getGuidedProgress(steps.filter(step => pageIds.has(step.page.id)), answers, privacyReady);
    return [{ ...chapter, pages: chapterPages, ...progress }];
  });
  const chapterIndex = Math.max(0, chapters.findIndex(chapter => chapter.pages.some(page => page.id === currentPageId)));
  return { chapters, currentChapter: chapters[chapterIndex], chapterIndex };
}
