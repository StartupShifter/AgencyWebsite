import type { ReactNode } from "react";
import { cn } from "cn";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * Wraps a decorative skeleton layout so assistive technology gets one concise
 * status message instead of a tree of empty boxes.
 */
export function LoadingRegion({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={className}
    >
      <span className="sr-only">{label}</span>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}

/**
 * A Skeleton block that respects reduced-motion preferences.
 */
export function SkeletonBlock({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("motion-reduce:animate-none", className)} />
  );
}
