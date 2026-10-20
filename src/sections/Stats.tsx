import { stats } from "../content";
import { Reveal } from "../components/Reveal";

export function Stats() {
  return (
    <section aria-label="ShowSeek at a glance" className="border-y border-line">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} index={i} className="flex flex-col gap-1 py-8 md:px-8 md:first:pl-0">
            <dt className="order-2 text-sm text-muted">{stat.label}</dt>
            <dd className="order-1 font-display text-3xl font-bold tracking-tight">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
