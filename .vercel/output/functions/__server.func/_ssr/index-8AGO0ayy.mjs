import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioPage, H as HIGHLIGHTS, d as SOCIALS, f as STATS } from "./PortfolioPage-D4CHDhWE.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { m as Sparkles, n as CircleCheck, v as ArrowRight, M as Mail, w as Download, d as Github, p as Linkedin, q as MapPin, x as SquareTerminal, b as ShieldCheck, y as MonitorDot, z as Workflow } from "../_libs/lucide-react.mjs";
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
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-[88vh] overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16",
      children: [
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
            className: "absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--brand-2)]/40 to-[var(--brand-3)]/20"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute left-1/2 top-20 h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "tech-3d-scene hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-3d-core", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-cube", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tech-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tech-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tech-chip", children: "REACT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tech-chip", children: "API" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tech-chip", children: "SEC" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "premium-border mb-6 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-[var(--brand-2)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "Available for internships, freelance work and collaborations" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-4xl text-4xl font-bold leading-[1.02] sm:text-5xl md:text-7xl", children: [
                  "Hasira Nenuka",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block gradient-text bg-[length:180%_180%] animate-gradient-pan", children: "Software Developer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground/92", children: "with a security mindset." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg font-medium text-foreground/90 md:text-xl", children: "Information Technology undergraduate building reliable web applications with clean interfaces, practical backends and a growing security mindset." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl leading-7 text-muted-foreground", children: "I focus on useful software: campus systems, helpdesk workflows, automation projects and modern full-stack applications that solve real problems with thoughtful design." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap gap-2.5", children: HIGHLIGHTS.map((highlight) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-foreground/85 shadow-[0_12px_30px_-24px_var(--brand-2)] backdrop-blur",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3 text-[var(--brand-2)]" }),
                      highlight
                    ]
                  },
                  highlight
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/projects",
                      className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            "aria-hidden": true,
                            className: "absolute inset-y-0 left-0 w-16 bg-white/25 blur-xl animate-sheen"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "View Projects" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative size-4 transition-transform group-hover:translate-x-1" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/contact",
                      className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/30 px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:bg-accent/60",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
                        " Contact Me"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/Hasira-Nenuka-Profile-Summary.pdf",
                      download: "Hasira-Nenuka-Profile-Summary.pdf",
                      className: "inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:border-[var(--brand-2)]/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
                        " Download Profile"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: SOCIALS.github, label: "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: SOCIALS.linkedin, label: "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: SOCIALS.email, label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-[var(--brand)]" }),
                    "Maharagama, Sri Lanka"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.1 },
              className: "relative w-full max-w-[470px] justify-self-center lg:justify-self-end",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "premium-border surface holo-panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:200%_200%] animate-gradient-pan"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--brand-2)]/35 to-transparent"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 bg-[linear-gradient(115deg,transparent_0_28%,oklch(1_0_0/0.05)_29%,transparent_36%)]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/35 px-4 py-3 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareTerminal, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Portfolio Console" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Full-stack + security learning" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)] shadow-[0_0_24px_-10px_var(--brand)]", children: "Online" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-[0_20px_70px_-40px_var(--brand)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/Profile.jpeg",
                      alt: "Hasira Nenuka portrait",
                      width: 680,
                      height: 760,
                      className: "aspect-[4/4.25] w-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--brand)]/24 to-transparent"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent animate-scan"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 grid gap-2", children: [
                    ["React", "UI"],
                    ["API", "JWT"],
                    ["Secure", "Flow"]
                  ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/62 px-2.5 py-1 text-[10px] font-medium backdrop-blur",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[var(--brand-2)]" }),
                        label,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: value })
                      ]
                    },
                    label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/94 via-background/35 to-transparent p-5 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Building modern web systems" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5" }),
                        " Secure, usable and maintainable"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5" }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold gradient-text md:text-3xl", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: stat.label })
                    ]
                  },
                  stat.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-background/30 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold text-foreground/90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorDot, { className: "size-4 text-[var(--brand)]" }),
                      " Interface"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[86%] rounded-full bg-[image:var(--gradient-brand)]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-background/30 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold text-foreground/90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "size-4 text-[var(--brand-2)]" }),
                      " Delivery"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[78%] rounded-full bg-[image:var(--gradient-brand)]" }) })
                  ] })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function SocialIcon({
  href,
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      "aria-label": label,
      target: "_blank",
      rel: "noreferrer",
      className: "grid size-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:text-[var(--brand)]",
      children
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { contentClassName: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}) });
}
export {
  Index as component
};
