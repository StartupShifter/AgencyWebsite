"use client";

import { twLanding } from "@/lib/landing-styles";
import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

export function Brand({ className }: { className?: string }) {
  const { content } = useI18n();
  return (
    <Link
      href="/"
      aria-label={content.brand.homeAriaLabel}
      className={cn(twLanding("brand"), className)}
    >
      <span className={twLanding("brand-mark")}>
        <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
      </span>
      <span>
        {content.brand.nameFirst}<span className={twLanding("brand-second")}>{content.brand.nameSecond}</span>
      </span>
    </Link>
  );
}
