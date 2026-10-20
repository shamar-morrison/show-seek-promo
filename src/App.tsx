import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Tooltip } from "@base-ui/react/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./sections/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

/** Scrolls to the URL hash after route changes (e.g. /#features from the 404 page). */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Tooltip.Provider delay={150}>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Tooltip.Provider>
  );
}
