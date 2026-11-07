import { ArrowUpRight, Check, Compass, Fingerprint, Layers, PartyPopper, Store } from "lucide-react";
import { OnboardingMascot, type MascotMood } from "./onboarding-mascot";

const scenes = [
  { icon: Store, title: "Your business", subtitle: "Made of good ideas & real people", tag: "Nice to meet you" },
  { icon: Compass, title: "Your direction", subtitle: "A little clarity. A lot of possibility.", tag: "Think big" },
  { icon: Fingerprint, title: "Your signature", subtitle: "The details that make it yours", tag: "Make your mark" },
  { icon: Layers, title: "Your toolkit", subtitle: "Connecting the pieces of your project", tag: "Piece by piece" },
  { icon: PartyPopper, title: "Your next chapter", subtitle: "A brief we can build on, together", tag: "Coming together" },
];

/** A decorative, code-native illustration built from the existing brand companion. */
export function JourneyArtwork({ scene = 0, mood = "welcome" }: { scene?: number; mood?: MascotMood }) {
  const { icon: Icon, title, subtitle, tag } = scenes[scene] ?? scenes[0];
  return <div className="ob-artwork" aria-hidden="true">
    <div className="ob-art-orbit" />
    <div className="ob-art-sheet ob-art-sheet-back" />
    <div className="ob-art-sheet">
      <span className="ob-art-icon"><Icon size={25} strokeWidth={1.6} /></span>
      <strong>{title}</strong><span>{subtitle}</span>
      <div className="ob-art-lines"><i /><i /></div>
      <span className="ob-art-check"><Check size={14} /> A little more you</span>
    </div>
    <span className="ob-art-sticker"><ArrowUpRight size={25} /></span>
    <span className="ob-art-tag">{tag}</span>
    <div className="ob-art-companion"><OnboardingMascot mood={mood} /></div>
  </div>;
}
