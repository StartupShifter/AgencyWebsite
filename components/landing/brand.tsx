import { twLanding } from "@/lib/landing-styles";
import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";
import Link from "next/link";
export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Starter Shifter home"
      className={cn(twLanding("brand"), className)}
    >
      <span className={twLanding("brand-mark")}>
        <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
      </span>
      <span>
        starter<span className={twLanding("brand-second")}>shifter</span>
      </span>
    </Link>
  );
}
