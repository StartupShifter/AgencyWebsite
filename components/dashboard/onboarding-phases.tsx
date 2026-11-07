import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { getPhaseHref } from "@/lib/onboarding/phases";
import type { DashboardModel } from "@/lib/onboarding/dashboard";

export function OnboardingPhases({ model, baseHref, completedId }: { model: DashboardModel; baseHref: string; completedId: string | null }) {
  const completed = model.phases.find(phase => phase.id === completedId && phase.complete);
  const next = model.nextPhase;
  return <section className="workspace-phases" aria-labelledby="workspace-phases-heading">
    {completed && !model.submitted && <Alert className="workspace-phase-success" role="status"><Check aria-hidden="true" /><AlertTitle>Phase saved. That’s a good place to pause.</AlertTitle><AlertDescription>{completed.title} is complete. Your answers are saved, including anything you’ve flagged for later.</AlertDescription></Alert>}
    <Card className="workspace-phase-card">
      <CardHeader><CardTitle><h2 id="workspace-phases-heading">{model.submitted ? "Your onboarding phases" : next?.complete ? "Ready for your final review" : "Your next small step"}</h2></CardTitle><CardDescription>Up to five questions per phase. Return here after each phase to choose your next step.</CardDescription></CardHeader>
      <CardContent>
        {next && !model.submitted && <div className="workspace-phase-next"><div><p>Phase {model.phases.indexOf(next) + 1}{next.service ? " · Project details" : ""}</p><h3>{next.title}</h3><span>{next.total} questions{next.completed > 0 ? ` · ${next.completed} complete` : ""}{next.id === "final" ? " · Includes your final review" : ""}</span><p className="workspace-phase-topics">{next.topics.join(" · ")}</p></div><Link className="workspace-phase-cta" href={next.complete && next.id === "final" ? `${baseHref}?question=review` : getPhaseHref(baseHref, next)}>{next.complete ? "Review and send" : next.completed ? "Continue phase" : "Start phase"}<ArrowRight size={16} aria-hidden="true" /></Link></div>}
        <div className="workspace-phase-pause"><Coffee size={16} aria-hidden="true" /><p>{model.submitted ? "Your brief has been submitted. You can revisit your answers below." : `${model.completedPhases} ${model.completedPhases === 1 ? "phase" : "phases"} complete. Carry on now or come back when you’re ready.`}</p></div>
        <details className="workspace-phase-roadmap"><summary>See all phases and questions<ChevronDown size={16} aria-hidden="true" /></summary><ol>{model.phases.map((phase, index) => <li key={phase.id}><details><summary><span className="workspace-phase-number">{phase.complete ? <Check size={14} aria-label="Answers complete" /> : index + 1}</span><span>{phase.title}<small>{phase.total} questions · {phase.complete ? phase.id === "final" && !model.submitted ? "Answers complete · Review before sending" : "Complete" : `${phase.completed} complete`}</small></span><ChevronDown size={15} aria-hidden="true" /></summary><div><ol>{phase.steps.filter(step => step.question).map(step => <li key={step.id}><Link href={`${baseHref}?question=${encodeURIComponent(step.id)}`}>{step.question!.label}</Link></li>)}</ol><Link className="workspace-phase-edit" href={phase.id === "final" && phase.complete ? `${baseHref}?question=review` : getPhaseHref(baseHref, phase)}>{phase.complete ? "Review phase" : "Open phase"}<ArrowRight size={14} aria-hidden="true" /></Link></div></details></li>)}</ol></details>
      </CardContent>
    </Card>
  </section>;
}
