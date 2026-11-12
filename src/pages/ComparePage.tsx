import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Cancel01Icon, HelpCircleIcon, MinusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { apps, compareFaqs, compareMeta, COMPARE_PATH, lookFor, shortAnswer, type Cell, type Mark } from "../compare/tvTimeAlternatives";
import { links } from "../content";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ExternalLink } from "../components/ExternalLink";
import { FaqList } from "../components/FaqList";
import { GooglePlayButton } from "../components/StoreButtons";
import { Download } from "../sections/Download";
import { formatDate, pageHeading, prose, sectionHeading as h2 } from "../styles";

const MARK: Record<Exclude<Mark, "na">, { icon: IconSvgElement; label: string; className: string }> = {
  yes: { icon: Tick02Icon, label: "Yes", className: "bg-emerald-400/15 text-emerald-300" },
  partial: { icon: MinusSignIcon, label: "Partly", className: "bg-amber-300/15 text-amber-200" },
  no: { icon: Cancel01Icon, label: "No", className: "bg-white/5 text-muted" },
  unknown: { icon: HelpCircleIcon, label: "Not confirmed", className: "bg-white/5 text-muted" },
};

function MarkIcon({ mark }: { mark: Exclude<Mark, "na"> }) {
  const m = MARK[mark];
  return (
    <span className={`flex size-5 shrink-0 items-center justify-center rounded-full ${m.className}`}>
      <HugeiconsIcon icon={m.icon} size={12} strokeWidth={2.4} aria-hidden />
    </span>
  );
}

/** Icon plus a one- or two-word label; the full mark name is read out for screen readers. */
function CellView({ cell }: { cell: Cell }) {
  if (cell.state === "na") {
    return (
      <span className="text-muted" aria-label="Not applicable">
        –
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      <MarkIcon mark={cell.state} />
      <span className="text-sm text-fg/85">
        <span className="sr-only">{MARK[cell.state].label}: </span>
        {cell.text}
      </span>
    </span>
  );
}

function PlatformCell({ has }: { has: boolean }) {
  return has ? (
    <span className="flex justify-center">
      <MarkIcon mark="yes" />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="block text-center text-muted" aria-label="No">
      –
    </span>
  );
}

const columns: { key: "tvTime" | "ratingsLists" | "trakt" | "stremio"; label: string }[] = [
  { key: "tvTime", label: "TV Time import" },
  { key: "ratingsLists", label: "Ratings & lists" },
  { key: "trakt", label: "Trakt" },
  { key: "stremio", label: "Stremio" },
];

export function ComparePage() {
  return (
    <>
      <article className="mx-auto max-w-5xl px-4 pt-10 pb-24 sm:px-6 lg:pt-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "TV Time alternatives", path: COMPARE_PATH },
          ]}
        />

        <header className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Comparison</p>
          <h1 className={`mt-4 ${pageHeading}`}>{compareMeta.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-fg/80">{compareMeta.intro}</p>
          <p className="mt-5 text-sm text-muted">
            Last checked <time dateTime={compareMeta.checked}>{formatDate(compareMeta.checked)}</time>
          </p>
        </header>

        <section aria-labelledby="short-title" className="mt-10 rounded-3xl border border-accent/30 bg-accent-fill/10 p-6 sm:p-8">
          <h2 id="short-title" className="font-display text-xl font-bold tracking-tight">
            The short answer
          </h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {shortAnswer.map((s) => (
              <div key={s.label}>
                <dt className="font-semibold text-fg">{s.label}</dt>
                <dd className="mt-1 leading-relaxed text-fg/80">{s.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="compared" aria-labelledby="table-title" className="mt-16">
          <h2 id="table-title" className={h2}>
            TV Time alternatives compared
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            The details behind each cell are in the app cards below.
            <span className="md:hidden"> Swipe the table sideways to see every column.</span>
          </p>
          {/* relative: the sr-only labels are absolutely positioned and would otherwise escape the scroll box and widen the page. */}
          <div className="relative mt-6 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                TV Time alternatives compared by platform, TV Time import, ratings and lists, Trakt and Stremio
              </caption>
              <thead>
                <tr className="border-b border-line text-xs font-semibold tracking-wide text-muted uppercase">
                  <th scope="col" className="sticky left-0 z-10 bg-surface-2 px-4 py-3">
                    App
                  </th>
                  {columns.slice(0, 2).map((c) => (
                    <th key={c.key} scope="col" className="bg-surface-2 px-4 py-3">
                      {c.label}
                    </th>
                  ))}
                  <th scope="col" className="bg-surface-2 px-3 py-3 text-center">
                    Android
                  </th>
                  <th scope="col" className="bg-surface-2 px-3 py-3 text-center">
                    iPhone
                  </th>
                  {columns.slice(2).map((c) => (
                    <th key={c.key} scope="col" className="bg-surface-2 px-4 py-3">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr
                    key={app.name}
                    className={`border-b border-line last:border-b-0 ${app.isShowSeek ? "bg-accent-fill/[0.08]" : ""}`}
                  >
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 px-4 py-3.5 font-semibold whitespace-nowrap text-fg ${app.isShowSeek ? "bg-[#211623]" : "bg-bg"}`}
                    >
                      {app.name}
                    </th>
                    {columns.slice(0, 2).map((c) => (
                      <td key={c.key} className="px-4 py-3.5">
                        <CellView cell={app[c.key]} />
                      </td>
                    ))}
                    <td className="px-3 py-3.5">
                      <PlatformCell has={app.android} />
                    </td>
                    <td className="px-3 py-3.5">
                      <PlatformCell has={app.iphone} />
                    </td>
                    {columns.slice(2).map((c) => (
                      <td key={c.key} className="px-4 py-3.5">
                        <CellView cell={app[c.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Legend">
            {(Object.keys(MARK) as (keyof typeof MARK)[]).map((k) => (
              <li key={k} className="flex items-center gap-2">
                <MarkIcon mark={k} />
                {k === "no" ? "No / none found" : MARK[k].label}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span className="w-5 text-center">–</span>
              Not applicable
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The four TV Time export types are the GDPR data request, TV Time Out, Liberator and Data Extractor.
          </p>
        </section>

        <section id="what-to-look-for" aria-labelledby="look-title" className="mt-16 max-w-3xl">
          <h2 id="look-title" className={h2}>
            What to look for in a TV Time alternative
          </h2>
          <div className={prose}>{lookFor}</div>
        </section>

        <section id="apps" aria-labelledby="apps-title" className="mt-16">
          <h2 id="apps-title" className={h2}>
            The apps, one by one
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {apps.map((app) => (
              <li
                key={app.name}
                className={`flex flex-col rounded-3xl border p-6 ${app.isShowSeek ? "border-accent/40 bg-accent-fill/[0.07]" : "border-line bg-surface"}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold tracking-tight">{app.name}</h3>
                  <span className="text-sm text-muted">{app.platforms}</span>
                </div>
                <p className="mt-3 leading-relaxed text-fg/85">
                  <strong className="font-semibold text-fg">Best for:</strong> {app.bestFor}
                </p>
                <p className="mt-2 leading-relaxed text-muted">
                  <strong className="font-semibold text-fg/80">TV Time import:</strong> {app.tvTimeDetail}
                </p>
                <p className="mt-2 leading-relaxed text-muted">
                  <strong className="font-semibold text-fg/80">Worth knowing:</strong> {app.worthKnowing}
                </p>
                <div className="mt-auto pt-5">
                  {app.isShowSeek ? (
                    <GooglePlayButton />
                  ) : (
                    <ExternalLink href={app.url} className="text-sm font-semibold text-accent hover:underline">
                      Visit {app.name} →
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="faq-title" className="mt-16 max-w-3xl">
          <h2 id="faq-title" className={h2}>
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={compareFaqs} />
          </div>
        </section>

        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-muted">
          We make ShowSeek, so we've tried to be fair: every claim about another app comes from that app's own website
          or store listing, and anything we couldn't confirm is marked as such. Apps change often. Spot something out
          of date?{" "}
          <a href={`mailto:${links.email}`} className="text-accent underline underline-offset-4">
            Let us know
          </a>
          . All names are trademarks of their owners, and ShowSeek isn't affiliated with any of these apps.
        </p>
      </article>
      <Download />
    </>
  );
}
