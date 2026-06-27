import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, E as EDUCATION } from "./PortfolioPage-D4CHDhWE.mjs";
import { h as GraduationCap, i as Award, j as Calendar, k as BookMarked } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "education",
      eyebrow: "Education",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Academic foundation in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "software engineering" })
      ] }),
      subtitle: "Formal computing studies supported by practical modules in development, databases, networks and information security.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[1fr_0.85fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface relative overflow-hidden rounded-2xl p-6 md:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: EDUCATION.degree }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: EDUCATION.university })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Award, label: "Current GPA", value: EDUCATION.gpa }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Calendar, label: "Graduation", value: EDUCATION.graduation })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "size-3.5" }),
              " Relevant Modules"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: EDUCATION.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium",
                children: m
              },
              m
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: [
          ["Foundation", "Programming, databases and software engineering principles."],
          ["Application", "Full-stack coursework transformed into working project systems."],
          ["Direction", "Security, automation and maintainable product engineering."]
        ].map(([label, text], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface flex gap-4 rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 text-sm font-semibold text-[var(--brand)]", children: index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: text })
          ] })
        ] }, label)) })
      ] })
    }
  );
}
function Info({ icon: Icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background/25 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium", children: value })
  ] });
}
function EducationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}) });
}
export {
  EducationPage as component
};
