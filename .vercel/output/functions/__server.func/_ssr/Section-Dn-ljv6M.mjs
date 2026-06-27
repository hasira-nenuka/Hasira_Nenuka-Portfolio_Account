import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "relative scroll-mt-24 py-10 md:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/20 via-50% to-transparent"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "section-ribbon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6 },
          className: "mb-10 max-w-3xl md:mb-12",
          children: [
            eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "premium-border mb-3 inline-flex overflow-hidden rounded-full bg-white/[0.055] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand)] shadow-[0_10px_30px_-22px_var(--brand)]", children: eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold leading-tight md:text-5xl", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg", children: subtitle })
          ]
        }
      ),
      children
    ] })
  ] });
}
export {
  Section as S
};
