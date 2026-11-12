import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export { pages } from "./routes";
export { SITE_URL } from "./seo";

/** Build-time only (see scripts/prerender.mjs). Keep this tree in sync with main.tsx so hydration matches. */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
