import { guideBySlug, guidePath, type Guide } from "../guides";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { guidesIndexPath } from "../routes";
import { BrandTile } from "../components/BrandTile";
import { FaqList } from "../components/FaqList";
import { GuideCards } from "../components/GuideCards";
import { RichText } from "../components/RichText";
import { Download } from "../sections/Download";
import { formatDate, pageHeading, prose, sectionHeading as h2 } from "../styles";

export function GuidePage({ guide }: { guide: Guide }) {
  const related = guide.related.map(guideBySlug).filter((g): g is Guide => g !== undefined);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-10 pb-24 sm:px-6 lg:pt-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Guides", path: guidesIndexPath },
            { name: guide.label, path: guidePath(guide.slug) },
          ]}
        />

        <header className="mt-10">
          <BrandTile brand={guide.brand} />
          <h1 className={`mt-6 ${pageHeading}`}>
            {guide.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-fg/80">{guide.intro}</p>
          <p className="mt-5 text-sm text-muted">
            Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
          </p>
        </header>

        <section aria-labelledby="steps-title" className="mt-12 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 id="steps-title" className={h2}>
            {guide.stepsHeading}
          </h2>
          <ol className="mt-8 grid gap-7">
            {guide.steps.map((step, i) => (
              <li key={step.title} id={`step-${i + 1}`} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-fill text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-fg">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">
                    <RichText text={step.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {guide.sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-16">
            <h2 id={`${s.id}-title`} className={h2}>
              {s.heading}
            </h2>
            <div className={prose}>{s.body}</div>
          </section>
        ))}

        <section aria-labelledby="faq-title" className="mt-16">
          <h2 id="faq-title" className={h2}>
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={guide.faqs} />
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-title" className="mt-16">
            <h2 id="related-title" className={h2}>
              Keep reading
            </h2>
            <div className="mt-6">
              <GuideCards guides={related} headingLevel="h3" />
            </div>
          </section>
        )}
      </article>
      <Download />
    </>
  );
}
