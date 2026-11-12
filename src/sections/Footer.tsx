import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterIcon } from "@hugeicons/core-free-icons";
import { links, navItems } from "../content";
import { Logo } from "../components/Logo";
import { ExternalLink } from "../components/ExternalLink";
import { guidePath, guides } from "../guides";
import { watchOrders, watchPath } from "../watch";

const heading = "text-sm font-semibold text-fg";

// The full list lives on /watch; the footer shows the first few of each kind.
const footerWatchOrders = [
  ...watchOrders.filter((o) => o.category === "anime").slice(0, 4),
  ...watchOrders.filter((o) => o.category === "movies").slice(0, 4),
];
const linkClass = "text-sm text-muted transition-colors hover:text-fg";

export function Footer() {
  // Starts at the build year to match the prerendered HTML, then corrects itself if a new year has begun since.
  const [year, setYear] = useState(__BUILD_YEAR__);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The movie and TV tracker for keeping up with everything you watch, across every streaming service.
          </p>
        </div>

        <div>
          <h3 className={heading}>Product</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Guides</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link to={guidePath(g.slug)} className={linkClass}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Watch orders</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footerWatchOrders.map((o) => (
              <li key={o.slug}>
                <Link to={watchPath(o.slug)} className={linkClass}>
                  {o.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/watch" className={`${linkClass} font-semibold`}>
                All watch orders →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Support</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href={`mailto:${links.email}`} className={linkClass}>
                Email support
              </a>
            </li>
            <li>
              <ExternalLink href={links.playStore} className={linkClass}>
                Google Play listing
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Social</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <ExternalLink
                href={links.x}
                aria-label="ShowSeek on X"
                className="-m-2 inline-flex rounded-full p-2 text-muted transition-colors hover:text-fg"
              >
                <HugeiconsIcon icon={NewTwitterIcon} size={20} strokeWidth={1.8} aria-hidden />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            <p>&copy; {year} ShowSeek. All rights reserved.</p>
            <p className="text-xs">Poster artwork via TMDB. ShowSeek is not endorsed or certified by TMDB.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <ExternalLink href={links.privacy} className="transition-colors hover:text-fg">
                Privacy Policy
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={links.terms} className="transition-colors hover:text-fg">
                Terms of Service
              </ExternalLink>
            </li>
            <li>
              <a href={`mailto:${links.email}`} className="transition-colors hover:text-fg">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
