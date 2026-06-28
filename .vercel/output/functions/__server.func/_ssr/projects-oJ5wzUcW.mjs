import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PortfolioPage, b as PROJECTS, c as PROJECT_FILTERS } from "./PortfolioPage-D83AEUa4.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { F as Folder, d as Github, E as ExternalLink } from "../_libs/lucide-react.mjs";
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
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "projects",
      eyebrow: "Featured Projects",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]", children: [
        "Selected work with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "real product shape" })
      ] }),
      subtitle: "A snapshot of full-stack systems, automation work and academic projects with practical workflows and user-facing screens.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "premium-border mb-8 flex flex-wrap gap-2 overflow-hidden rounded-2xl bg-background/25 p-2 backdrop-blur", children: PROJECT_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setFilter(f),
            className: `rounded-xl border px-4 py-2 text-sm font-medium transition-all ${filter === f ? "border-transparent bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]" : "border-border bg-background/25 text-muted-foreground hover:border-[var(--brand)]/40 hover:text-foreground"}`,
            children: f
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            layout: true,
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.35, delay: i * 0.04 },
            className: "premium-border group surface flex flex-col overflow-hidden rounded-2xl card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-52 overflow-hidden bg-gradient-to-br ${p.gradient}`, children: [
                p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.title,
                    loading: "lazy",
                    className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "size-12 text-foreground/40 group-hover:scale-110 transition-transform" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/12 to-transparent opacity-0 transition group-hover:opacity-100"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 z-10 flex flex-wrap gap-1", children: p.category.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full border border-white/15 bg-background/65 px-2 py-0.5 text-[10px] font-medium backdrop-blur",
                    children: c
                  },
                  c
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 rounded-full border border-white/15 bg-background/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--brand)] shadow-[0_0_24px_-12px_var(--brand)] backdrop-blur", children: "Case Study" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex grow flex-col p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold leading-snug", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 grow text-sm leading-6 text-muted-foreground", children: p.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-lg border border-white/10 bg-background/40 px-2 py-1 text-[11px] text-foreground/80",
                    children: t
                  },
                  t
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 border-t border-white/10 pt-4", children: [
                  p.github && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: p.github,
                      target: p.github === "#" ? void 0 : "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm transition hover:bg-white/[0.055] hover:text-[var(--brand)]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" }),
                        " Code"
                      ]
                    }
                  ),
                  p.demo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: p.demo,
                      className: "inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm transition hover:bg-white/[0.055] hover:text-[var(--brand)]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
                        " Demo"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          p.title
        )) }) })
      ]
    }
  );
}
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}) });
}
export {
  ProjectsPage as component
};
