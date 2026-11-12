import { Link } from "react-router-dom";
import { guidePath, type Guide } from "../guides";
import { BrandTile } from "./BrandTile";

/** Linked cards for a set of guides. The card title doubles as keyword-rich anchor text. */
export function GuideCards({ guides, headingLevel: H = "h2" }: { guides: Guide[]; headingLevel?: "h2" | "h3" }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {guides.map((g) => (
        <li key={g.slug}>
          <Link
            to={guidePath(g.slug)}
            className="group flex h-full flex-col items-start rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-white/20"
          >
            <BrandTile brand={g.brand} size="md" />
            <H className="mt-5 font-display text-xl font-bold tracking-tight text-balance">{g.h1.replace(/\.$/, "")}</H>
            <p className="mt-2 leading-relaxed text-muted">{g.summary}</p>
            <span className="mt-auto pt-5 text-sm font-semibold text-accent group-hover:underline">Read the guide →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
