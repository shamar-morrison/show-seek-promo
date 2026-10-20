import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Mail01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { links } from "../content";
import { ExternalLink } from "../components/ExternalLink";
import { Reveal } from "../components/Reveal";

export function Socials() {
  return (
    <section aria-labelledby="socials-title" className="border-y border-line">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-surface text-fg" aria-hidden>
          <HugeiconsIcon icon={NewTwitterIcon} size={30} strokeWidth={1.6} />
        </span>
        <h2 id="socials-title" className="mt-8 font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
          Follow along on X.
        </h2>
        <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">
          New features, release notes and what is coming next, straight from the developer.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ExternalLink
            href={links.x}
            className="flex h-12 items-center gap-2 rounded-full bg-fg px-6 font-semibold text-bg transition-[transform,background-color] hover:bg-white active:scale-[0.98]"
          >
            {links.xHandle}
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={2} aria-hidden />
          </ExternalLink>
          <a
            href={`mailto:${links.email}`}
            className="flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 font-semibold text-fg transition-[transform,background-color] hover:bg-white/5 active:scale-[0.98]"
          >
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.8} aria-hidden />
            Send feedback
          </a>
        </div>
      </Reveal>
    </section>
  );
}
