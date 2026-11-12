import { Link } from "react-router-dom";
import { heroPoster, listTotals, watchPath, type WatchOrder } from "../watch";
import { PosterPlaceholder } from "./PosterPlaceholder";

/** Linked poster cards for a set of watch orders. */
export function WatchCards({
  orders,
  headingLevel: H = "h2",
  columns = 6,
}: {
  orders: WatchOrder[];
  headingLevel?: "h2" | "h3";
  /** Columns on large screens: 6 on full-width pages, 3 inside a text column. */
  columns?: 3 | 6;
}) {
  return (
    <ul
      className={`grid grid-cols-3 gap-2.5 sm:gap-4 ${columns === 6 ? "sm:grid-cols-4 lg:grid-cols-6" : ""}`}
    >
      {orders.map((o) => {
        const poster = heroPoster(o, "w185");
        const { count } = listTotals(o.lists[0]);
        return (
          <li key={o.slug}>
            <Link
              to={watchPath(o.slug)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-white/20"
            >
              {poster ? (
                <img
                  src={poster}
                  alt=""
                  width={185}
                  height={278}
                  loading="lazy"
                  className="aspect-[2/3] w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                />
              ) : (
                <PosterPlaceholder className="w-full" />
              )}
              <div className="flex flex-1 flex-col p-2.5 sm:p-3.5">
                <H className="text-xs leading-snug font-semibold text-balance sm:text-sm">{o.h1.replace(/\.$/, "")}</H>
                <p className="mt-1 text-[11px] text-muted sm:text-xs">
                  {o.category === "anime" ? "Anime" : "Movies"} · {count} titles
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
