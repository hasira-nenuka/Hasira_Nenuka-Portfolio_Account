import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, S as SKILLS } from "./PortfolioPage-D83AEUa4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Cpu, S as Server, D as Database, W as Wrench, B as BookOpen } from "../_libs/lucide-react.mjs";
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
const ICONS = [Cpu, Server, Database, Wrench, BookOpen];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Technical Skills",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]", children: [
        "A practical toolkit for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "shipping software" })
      ] }),
      subtitle: "A growing toolkit across the full stack, from responsive interfaces and APIs to databases, testing and developer workflows.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: SKILLS.map((g, idx) => {
        const Icon = ICONS[idx % ICONS.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: idx * 0.05 },
            className: "surface group relative overflow-hidden rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition group-hover:opacity-80"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: g.group }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    g.items.length,
                    " technologies"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-border bg-background/30 px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:border-[var(--brand)]/50 hover:bg-accent/50",
                  children: t
                },
                t
              )) })
            ]
          },
          g.group
        );
      }) })
    }
  );
}
function SkillsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}) });
}
export {
  SkillsPage as component
};
