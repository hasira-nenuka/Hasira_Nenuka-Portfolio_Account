import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage } from "./PortfolioPage-D4CHDhWE.mjs";
import { d as Github, F as Folder, e as GitCommitHorizontal, f as Star, g as Activity } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STATS = [
  { icon: Folder, label: "Repositories", value: "30+" },
  { icon: GitCommitHorizontal, label: "Total Commits", value: "1.2k+" },
  { icon: Star, label: "Stars Earned", value: "60+" },
  { icon: Activity, label: "Contributions / yr", value: "800+" }
];
const LANGS = [
  { name: "JavaScript", pct: 32, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", pct: 24, color: "from-sky-400 to-blue-600" },
  { name: "Java", pct: 22, color: "from-orange-400 to-red-500" },
  { name: "Python", pct: 12, color: "from-emerald-400 to-teal-500" },
  { name: "PHP", pct: 10, color: "from-violet-400 to-purple-600" }
];
function GitHubShowcase() {
  const cells = Array.from({ length: 7 * 26 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "github",
      eyebrow: "GitHub Showcase",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Development activity and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "technical direction" })
      ] }),
      subtitle: "A portfolio-style view of repositories, practice areas and frequently used technologies.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface rounded-2xl p-6 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Contribution graph" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Last 6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid gap-1 rounded-2xl border border-white/10 bg-background/30 p-3",
              style: { gridTemplateColumns: "repeat(26, minmax(0, 1fr))" },
              "aria-label": "Decorative GitHub-style contribution grid",
              children: cells.map((_, i) => {
                const intensity = (i * 17 + Math.floor(i / 7) * 11) % 100 / 100;
                const lvl = intensity > 0.85 ? "bg-[var(--brand-2)]" : intensity > 0.65 ? "bg-[var(--brand)]" : intensity > 0.4 ? "bg-[var(--brand)]/50" : intensity > 0.2 ? "bg-[var(--brand)]/20" : "bg-secondary";
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-[3px] ${lvl}` }, i);
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background/25 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-4 text-[var(--brand)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-5", children: "Top languages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: LANGS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                l.pct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${l.pct}%` },
                viewport: { once: true },
                transition: { duration: 0.9, delay: i * 0.08 },
                className: `h-full rounded-full bg-gradient-to-r ${l.color}`
              }
            ) })
          ] }, l.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://github.com/hasira-nenuka",
              target: "_blank",
              rel: "noreferrer",
              className: "mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--brand)] transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" }),
                " Visit GitHub Profile"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function GitHubPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubShowcase, {}) });
}
export {
  GitHubPage as component
};
