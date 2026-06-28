import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioPage, C as CAPABILITIES } from "./PortfolioPage-D83AEUa4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as Braces, R as Radar, b as ShieldCheck, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const ICONS = [Braces, Radar, ShieldCheck];
function Capabilities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "capabilities", className: "relative scroll-mt-24 py-12 md:py-18", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "premium-border surface relative overflow-hidden rounded-[1.5rem] p-5 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:220%_220%] opacity-80 animate-gradient-pan"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-[var(--brand-2)]/30 to-transparent"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.55 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "premium-border mb-3 inline-flex overflow-hidden rounded-full bg-white/[0.055] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand)]", children: "What I Deliver" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-xl text-2xl font-bold leading-tight md:text-4xl", children: [
              "Practical engineering with a",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "premium product eye" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl leading-7 text-muted-foreground", children: "I combine software engineering fundamentals, full-stack implementation and security-aware thinking to build useful systems that feel clear, trustworthy and maintainable." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: CAPABILITIES.map((item, index) => {
        const Icon = ICONS[index % ICONS.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.07 },
            className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-background/28 p-5 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/45 hover:bg-background/42",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-4 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition group-hover:opacity-80"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: item.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children: item.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-xs text-foreground/82",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[var(--brand-2)]" }),
                    point
                  ]
                },
                point
              )) })
            ]
          },
          item.title
        );
      }) })
    ] })
  ] }) }) });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Capabilities, {}) });
}
export {
  ServicesPage as component
};
