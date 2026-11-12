import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Tooltip } from "@base-ui/react/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./sections/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { GuidePage } from "./pages/GuidePage";
import { GuidesIndex } from "./pages/GuidesIndex";
import { guidePath, guides } from "./guides";
import { WatchIndex } from "./pages/WatchIndex";
import { WatchOrderPage } from "./pages/WatchOrderPage";
import { watchOrders, watchPath } from "./watch";
import { guidesIndexPath, pageForPath, watchIndexPath } from "./routes";

/** Scrolls to the URL hash after route changes (e.g. /#features from the 404 page). */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      // Instant: the CSS smooth-scroll default would animate this, and it can be interrupted partway.
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

/** The static <head> is written per page at build time; this only keeps the tab title right after client-side navigation. */
function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageForPath(pathname);
    if (page) document.title = page.title;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Tooltip.Provider delay={150}>
      <ScrollToHash />
      <DocumentTitle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={guidesIndexPath} element={<GuidesIndex />} />
          {guides.map((g) => (
            <Route key={g.slug} path={guidePath(g.slug)} element={<GuidePage guide={g} />} />
          ))}
          <Route path={watchIndexPath} element={<WatchIndex />} />
          {watchOrders.map((o) => (
            <Route key={o.slug} path={watchPath(o.slug)} element={<WatchOrderPage order={o} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Tooltip.Provider>
  );
}
