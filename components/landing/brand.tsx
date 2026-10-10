import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";
export function Brand({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Starter Shifter home"
      className={cn("brand", className)}
    >
      <span className="brand-mark">
        <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
      </span>
      <span>
        starter<span className="brand-second">shifter</span>
      </span>
    </a>
  );
}
