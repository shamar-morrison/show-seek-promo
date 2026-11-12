import {
  formatRuntime,
  heroPoster,
  listTotals,
  resolveEntry,
  watchOrderBySlug,
  watchPath,
  type EntryTag,
  type WatchList,
  type WatchOrder,
} from "../watch";
import { watchIndexPath } from "../routes";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqList } from "../components/FaqList";
import { GooglePlayButton } from "../components/StoreButtons";
import { PosterPlaceholder } from "../components/PosterPlaceholder";
import { WatchCards } from "../components/WatchCards";
import { Download } from "../sections/Download";
import { formatDate, pageHeading, prose, sectionHeading as h2 } from "../styles";

const TAGS: Record<EntryTag, { label: string; className: string }> = {
  start: { label: "Start here", className: "bg-accent-fill text-white" },
  essential: { label: "Essential", className: "bg-white/10 text-fg" },
  optional: { label: "Optional", className: "border border-line text-muted" },
  skippable: { label: "Skippable", className: "border border-dashed border-line text-muted" },
};

function defaultKind(ref: string | undefined) {
  if (!ref) return null;
  if (ref.startsWith("movie/")) return "Film";
  return ref.includes("/season/") ? "Season" : "TV series";
}

function EntryList({ list, chronological }: { list: WatchList; chronological: boolean }) {
  return (
    <ol className="mt-8 grid gap-3">
      {list.entries.map((entry, i) => {
        const e = resolveEntry(entry);
        const kind = e.kind ?? defaultKind(e.ref);
        const length = e.episodes
          ? `${e.episodes} episode${e.episodes === 1 ? "" : "s"}`
          : e.runtime
            ? formatRuntime(e.runtime)
            : null;
        const meta = [e.year, kind, length].filter(Boolean).join(" · ");
        return (
          <li key={`${list.id}-${i}`} className="flex gap-4 rounded-2xl border border-line bg-surface p-3 sm:p-4">
            <span
              aria-hidden
              className="w-6 shrink-0 pt-1 text-center font-display text-lg font-bold tabular-nums text-muted"
            >
              {i + 1}
            </span>
            {e.poster ? (
              <img
                src={e.poster}
                alt=""
                width={185}
                height={278}
                loading="lazy"
                className="aspect-[2/3] w-14 shrink-0 self-start rounded-lg object-cover sm:w-16"
              />
            ) : (
              <PosterPlaceholder kind={kind} className="w-14 shrink-0 self-start rounded-lg sm:w-16" />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                <h3 className="font-semibold text-fg">{e.displayTitle}</h3>
                {e.tag && (
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${TAGS[e.tag].className}`}>
                    {TAGS[e.tag].label}
                  </span>
                )}
              </div>
              {chronological && e.setIn && (
                <p className="mt-1 text-sm font-semibold text-accent">Set in {e.setIn}</p>
              )}
              {meta && <p className="mt-1 text-sm text-muted">{meta}</p>}
              {e.note && <p className="mt-2 text-sm leading-relaxed text-muted">{e.note}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function WatchOrderPage({ order }: { order: WatchOrder }) {
  const related = order.related.map(watchOrderBySlug).filter((o): o is WatchOrder => o !== undefined);
  const poster = heroPoster(order);
  const totals = listTotals(order.lists[0]);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-10 pb-24 sm:px-6 lg:pt-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Watch orders", path: watchIndexPath },
            { name: order.name, path: watchPath(order.slug) },
          ]}
        />

        <header className="mt-10 grid items-start gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {order.category === "anime" ? "Anime watch order" : "Movie watch order"}
            </p>
            <h1 className={`mt-4 ${pageHeading}`}>{order.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-fg/80">{order.intro}</p>
            <p className="mt-5 text-sm text-muted">
              {totals.count} titles
              {totals.runtime !== null && <> · {formatRuntime(totals.runtime)} in total</>} · Updated{" "}
              <time dateTime={order.updated}>{formatDate(order.updated)}</time>
            </p>
          </div>
          {poster && (
            <img
              src={poster}
              alt={`${order.name} poster`}
              width={342}
              height={513}
              className="hidden aspect-[2/3] w-44 rounded-2xl border border-line object-cover sm:block"
            />
          )}
        </header>

        <section aria-labelledby="start-title" className="mt-10 rounded-3xl border border-accent/30 bg-accent-fill/10 p-6 sm:p-8">
          <h2 id="start-title" className="font-display text-xl font-bold tracking-tight">
            Where to start
          </h2>
          <p className="mt-3 leading-relaxed text-fg/90">{order.startHere}</p>
        </section>

        {order.lists.map((list) => (
          <section key={list.id} id={list.id} aria-labelledby={`${list.id}-title`} className="mt-16">
            <h2 id={`${list.id}-title`} className={h2}>
              {list.heading}
            </h2>
            {list.intro && <p className="mt-3 leading-relaxed text-muted">{list.intro}</p>}
            <EntryList list={list} chronological={list.entries.some((e) => e.setIn)} />
          </section>
        ))}

        {order.sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-16">
            <h2 id={`${s.id}-title`} className={h2}>
              {s.heading}
            </h2>
            <div className={prose}>{s.body}</div>
          </section>
        ))}

        <section aria-labelledby="track-title" className="mt-16 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 id="track-title" className="font-display text-2xl font-bold tracking-tight text-balance">
            Track {order.name} in ShowSeek
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{order.cta}</p>
          <div className="mt-6">
            <GooglePlayButton />
          </div>
        </section>

        <section aria-labelledby="faq-title" className="mt-16">
          <h2 id="faq-title" className={h2}>
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={order.faqs} />
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-title" className="mt-16">
            <h2 id="related-title" className={h2}>
              More watch orders
            </h2>
            <div className="mt-6">
              <WatchCards orders={related} headingLevel="h3" columns={3} />
            </div>
          </section>
        )}
      </article>
      <Download />
    </>
  );
}
