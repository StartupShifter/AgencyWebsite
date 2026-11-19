"use client";

import { ArrowUpRight, Check, Compass, Fingerprint, Layers, PartyPopper, Store, type LucideIcon } from "lucide-react";
import { OnboardingMascot, type MascotMood } from "./onboarding-mascot";
import { useI18n } from "@/context/i18n-context";

const sceneIcons: Record<string, LucideIcon> = {
  store: Store,
  compass: Compass,
  fingerprint: Fingerprint,
  layers: Layers,
  partyPopper: PartyPopper,
};

/** A decorative, code-native illustration built from the existing brand companion. */
export function JourneyArtwork({ scene = 0, mood = "welcome" }: { scene?: number; mood?: MascotMood }) {
  const { content } = useI18n();
  const scenes = content.onboarding.journeyArtwork.scenes.map((scene) => ({
    ...scene,
    icon: sceneIcons[scene.icon] ?? Store,
  }));
  const { icon: Icon, title, subtitle, tag } = scenes[scene] ?? scenes[0];
  return <div className="ob-artwork" aria-hidden="true">
    <div className="ob-art-orbit" />
    <div className="ob-art-sheet ob-art-sheet-back" />
    <div className="ob-art-sheet">
      <span className="ob-art-icon"><Icon size={25} strokeWidth={1.6} /></span>
      <strong>{title}</strong><span>{subtitle}</span>
      <div className="ob-art-lines"><i /><i /></div>
      <span className="ob-art-check"><Check size={14} /> {content.onboarding.journeyArtwork.tagline}</span>
    </div>
    <span className="ob-art-sticker"><ArrowUpRight size={25} /></span>
    <span className="ob-art-tag">{tag}</span>
    <div className="ob-art-companion"><OnboardingMascot mood={mood} /></div>
  </div>;
}
