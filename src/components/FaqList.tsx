import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import type { Faq } from "../seo";

/**
 * Native <details> keeps every answer in the server-rendered HTML (crawlers read collapsed text) and needs no JS.
 * The answer text must match the FAQPage JSON-LD, which is built from the same Faq objects.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 sm:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
            <h3>{f.q}</h3>
            <HugeiconsIcon
              icon={Add01Icon}
              size={20}
              strokeWidth={1.8}
              aria-hidden
              className="shrink-0 text-muted transition-transform duration-300 ease-out-expo group-open:rotate-45"
            />
          </summary>
          <div className="-mt-2 pb-6 leading-relaxed text-muted">
            <p>{f.a}</p>
            {f.link && (
              <Link to={f.link.href} className="mt-3 inline-block font-semibold text-accent hover:underline">
                {f.link.label} →
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
