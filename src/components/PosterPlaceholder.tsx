import { HugeiconsIcon } from "@hugeicons/react";
import { Film01Icon, Tv01Icon } from "@hugeicons/core-free-icons";

/**
 * Stand-in poster for titles TMDB doesn't list on their own (some anime specials and OVAs).
 * Sized by the caller; keeps the 2:3 poster shape so lists stay aligned.
 */
export function PosterPlaceholder({ kind, className = "" }: { kind?: string | null; className?: string }) {
  const icon = kind && /film|movie/i.test(kind) ? Film01Icon : Tv01Icon;
  return (
    <div
      aria-hidden
      className={`flex aspect-[2/3] items-center justify-center bg-[linear-gradient(160deg,rgb(229_75_249/0.18),#242424_55%,#1c1c1c)] ring-1 ring-white/10 ring-inset ${className}`}
    >
      <HugeiconsIcon icon={icon} size={22} strokeWidth={1.6} className="text-fg/45" />
    </div>
  );
}
