import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, f as STATS } from "./PortfolioPage-D4CHDhWE.mjs";
import { h as GraduationCap, t as CodeXml, u as Layers, b as ShieldCheck } from "../_libs/lucide-react.mjs";
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
const POINTS = [
  {
    icon: GraduationCap,
    text: "Information Technology undergraduate with hands-on academic project experience."
  },
  {
    icon: CodeXml,
    text: "Focused on full-stack systems with practical interfaces and maintainable APIs."
  },
  {
    icon: Layers,
    text: "Comfortable learning modern tools and turning coursework into working products."
  },
  {
    icon: ShieldCheck,
    text: "Growing security awareness across authentication, validation and application design."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "About Me",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "A developer shaped by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "curiosity and craft" })
      ] }),
      subtitle: "I am an Information Technology undergraduate and aspiring full-stack developer who enjoys building efficient, user-friendly and scalable applications. My work combines academic learning, self-study and practical project building.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: POINTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.08 },
            className: "surface group flex items-start gap-4 rounded-2xl p-5 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-6 text-foreground/90 md:text-base", children: p.text })
            ]
          },
          p.text
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            className: "surface relative overflow-hidden rounded-2xl p-6 text-center card-hover hover:-translate-y-1 hover:border-[var(--brand-2)]/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-70"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold gradient-text md:text-4xl", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground md:text-sm", children: s.label })
            ]
          },
          s.label
        )) })
      ] })
    }
  );
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) });
}
export {
  AboutPage as component
};
