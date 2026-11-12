import { Fragment } from "react";
import { Link } from "react-router-dom";

/** Visible breadcrumb trail; the last item is the current page. Mirrors the BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, i) => (
          <Fragment key={item.path}>
            {i > 0 && <li aria-hidden>/</li>}
            {i < items.length - 1 ? (
              <li>
                <Link to={item.path} className="transition-colors hover:text-fg">
                  {item.name}
                </Link>
              </li>
            ) : (
              <li aria-current="page" className="text-fg">
                {item.name}
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
