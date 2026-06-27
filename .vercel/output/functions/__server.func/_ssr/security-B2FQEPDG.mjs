import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, a as SECURITY_INTERESTS } from "./PortfolioPage-D4CHDhWE.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { N as Network, c as Shield, L as Lock, T as Terminal, G as Globe } from "../_libs/lucide-react.mjs";
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
const ICONS = [Network, Shield, Lock, Terminal, Globe];
function CyberSecurity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "security",
      eyebrow: "Exploring Cyber Security",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Building with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "security-first mindset" })
      ] }),
      subtitle: "A growing area of interest alongside my core software engineering studies, focused on safer systems and stronger development habits.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:grid-cols-2 xl:grid-cols-3", children: SECURITY_INTERESTS.map((s, i) => {
        const Icon = ICONS[i % ICONS.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45, delay: i * 0.06 },
            className: "surface group relative overflow-hidden rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition group-hover:opacity-80"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative mb-4 grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative font-semibold", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm leading-6 text-muted-foreground mt-3", children: s.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 border-t border-white/10 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-[var(--brand)] font-semibold", children: "Key Areas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: s.keyAreas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition group-hover:border-white/15",
                    children: area
                  },
                  area
                )) })
              ] })
            ]
          },
          s.title
        );
      }) })
    }
  );
}
function SecurityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CyberSecurity, {}) });
}
export {
  SecurityPage as component
};
