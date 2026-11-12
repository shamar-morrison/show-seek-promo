import { watchOrders } from "../watch";
import { WatchCards } from "../components/WatchCards";
import { Download } from "../sections/Download";
import { pageHeading, sectionHeading } from "../styles";

const anime = watchOrders.filter((o) => o.category === "anime");
const movies = watchOrders.filter((o) => o.category === "movies");

export function WatchIndex() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-20">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Watch orders</p>
          <h1 className={`mt-4 ${pageHeading}`}>What to watch, in the right order.</h1>
          <p className="mt-5 text-lg leading-relaxed text-fg/80">
            Release order, chronological order and where to start for long-running anime and movie franchises, with
            which entries are essential and which you can skip.
          </p>
        </header>

        <h2 className={`mt-14 ${sectionHeading}`}>Anime watch orders</h2>
        <div className="mt-6">
          <WatchCards orders={anime} headingLevel="h3" />
        </div>

        <h2 className={`mt-16 ${sectionHeading}`}>Movie franchises in order</h2>
        <div className="mt-6">
          <WatchCards orders={movies} headingLevel="h3" />
        </div>
      </section>
      <Download />
    </>
  );
}
