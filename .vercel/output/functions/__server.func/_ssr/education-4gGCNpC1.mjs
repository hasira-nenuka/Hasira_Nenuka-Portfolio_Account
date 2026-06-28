import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage } from "./PortfolioPage-D83AEUa4.mjs";
import { h as GraduationCap, i as School, B as BookOpen, j as Sparkles, k as Calendar } from "../_libs/lucide-react.mjs";
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
const EDUCATION_ITEMS = [
  {
    icon: GraduationCap,
    logo: "/SLIIT%20logo.png",
    logoAlt: "Sri Lanka Institute of Information Technology logo",
    eyebrow: "University",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    details: [
      ["Degree", "B.Sc.(Hons) in Information Technology"],
      ["Current GPA", "2.12"],
      ["Graduation", "Expected 2027"]
    ],
    modules: [
      "Database Systems",
      "Software Engineering",
      "Web Application Development",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Information Security"
    ]
  },
  {
    icon: School,
    logo: "/D%20S%20logo.png",
    logoAlt: "D.S. Senanayake College Colombo 7 logo",
    eyebrow: "School",
    institution: "D.S. Senanayake College Colombo 7",
    details: [
      ["Stream", "Technology"],
      ["G.C.E. Advanced Level", "Pass"]
    ],
    subjects: [
      ["Engineering Technology", "C"],
      ["Science for Technology", "C"],
      ["Information & Communication Technology", "C"]
    ]
  },
  {
    icon: BookOpen,
    logo: "/NIBM%20logo.jpg",
    logoAlt: "National Institute of Business Management logo",
    eyebrow: "Institute",
    institution: "National Institute of Business Management (NIBM)",
    details: [
      ["Course", "Certificate in Computer Science"],
      ["Grade", "Completed"]
    ],
    description: "Covered fundamental concepts of Computer Science and Information Technology."
  },
  {
    icon: Sparkles,
    logo: "/JMC%20logo.png",
    logoAlt: "Jayasekera Management Centre logo",
    eyebrow: "Institute",
    institution: "Jayasekera Management Centre (JMC)",
    courses: [
      {
        name: "Certificate in Microsoft Office",
        grade: "Completed",
        description: "Gained practical knowledge in Microsoft Word, Excel, PowerPoint, Access, Windows, and Internet Applications."
      },
      {
        name: "Certificate in 3 in One Business English Programme",
        grade: "Completed",
        description: "Successfully completed Business English, Basic Grammar, Spoken English, Viva Voce Test, and Project Report assessments."
      }
    ]
  }
];
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "education",
      eyebrow: "Education",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block whitespace-nowrap text-[clamp(1.3rem,4.7vw,3rem)]", children: [
        "Building a Strong Foundation in",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Information Technology" })
      ] }),
      subtitle: "Formal computing studies supported by practical modules in development, databases, networks and information security.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid items-stretch gap-5 lg:grid-cols-2", children: EDUCATION_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(EducationCard, { item }, item.institution)) })
    }
  );
}
function EducationCard({ item }) {
  const Icon = item.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "surface premium-border group relative flex h-full min-h-[680px] flex-col overflow-hidden rounded-2xl p-4 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 md:p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:180%_180%] opacity-80 animate-gradient-pan"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPanel, { item, icon: Icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-1 flex-col px-1 pb-1 pt-5 md:px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-[var(--brand)]", children: item.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold leading-snug text-foreground", children: item.institution }),
      "details" in item && item.details ? /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: item.details.map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-background/28 p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-sm font-medium leading-5 text-foreground/92", children: value })
          ]
        },
        label
      )) }) : null,
      "modules" in item && item.modules ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3.5 text-[var(--brand)]" }),
          " Relevant Modules"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: item.modules.map((module) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/85",
            children: module
          },
          module
        )) })
      ] }) : null,
      "subjects" in item && item.subjects ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-2", children: item.subjects.map(([subject, grade]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/28 px-3 py-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/88", children: subject }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[var(--brand)]/12 px-3 py-1 text-xs font-bold text-[var(--brand)]", children: grade })
          ]
        },
        subject
      )) }) : null,
      "description" in item && item.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 rounded-xl border border-white/10 bg-background/28 p-4 text-sm leading-6 text-muted-foreground", children: item.description }) : null,
      "courses" in item && item.courses ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3", children: item.courses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-white/10 bg-background/28 p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold leading-snug", children: course.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[var(--brand)]/12 px-3 py-1 text-xs font-bold text-[var(--brand)]", children: course.grade })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: course.description })
          ]
        },
        course.name
      )) }) : null
    ] }) })
  ] });
}
function LogoPanel({
  item,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid min-h-[300px] w-full shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.065] p-8 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)] md:min-h-[330px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,oklch(1_0_0/0.08),transparent_48%)]"
      }
    ),
    "logo" in item && item.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: item.logo,
        alt: item.logoAlt,
        className: "relative max-h-[245px] w-full max-w-[82%] object-contain drop-shadow-[0_18px_40px_oklch(0.02_0.02_245_/_0.35)] md:max-h-[275px]",
        loading: "lazy"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid size-36 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: "logoFallback" in item && item.logoFallback ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-black tracking-wide", children: item.logoFallback }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-14" }) })
  ] });
}
function EducationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}) });
}
export {
  EducationPage as component
};
