import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as CodeXml, H as Moon, J as Sun, X, K as Menu, d as Github, o as Linkedin, M as Mail, P as Phone, p as MapPin } from "../_libs/lucide-react.mjs";
const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/github", label: "GitHub" },
  { href: "/achievements", label: "Achievements" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" }
];
const SKILLS = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Python"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"] },
  {
    group: "Engineering Practice",
    items: [
      "REST APIs",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Database Design",
      "Agile Development"
    ]
  }
];
const PROJECTS = [
  {
    title: "University Internship & Career Management System",
    description: "A complete platform for internships, career opportunities, applications, approvals, communication and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: ["Full Stack", "Academic"],
    github: "https://github.com/hasira-nenuka/university_internship_career_management_system",
    demo: "#",
    gradient: "from-teal-400/30 via-amber-300/20 to-rose-500/25",
    image: "/University%20internship%20and%20career%20management%20system.png"
  },
  {
    title: "Automated Language Conversion Tests",
    description: "Playwright UI automation suite for validating Singlish and Thanglish conversion flows into Sinhala and Tamil.",
    tech: ["Playwright", "TypeScript", "Node.js", "GitHub Actions"],
    category: ["Academic"],
    github: "https://github.com/hasira-nenuka/language-conversion-tests",
    gradient: "from-lime-400/25 via-teal-400/20 to-violet-500/25",
    image: "/Automated%20language%20conversion%20test.png"
  },
  {
    title: "Facilities Halls Booking System",
    description: "A campus facilities platform for hall bookings, maintenance requests, ticket tracking, approvals and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Academic"],
    github: "https://github.com/GimaR03/facilities_booking_system",
    demo: "#",
    gradient: "from-emerald-400/25 via-orange-300/20 to-fuchsia-500/20",
    image: "/Facilities%20halls%20booking%20system.png"
  },
  {
    title: "Helpdesk Management System",
    description: "A support system with user/admin dashboards, ticket assignment, PDF exports and REST API endpoints.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/HelpdeskManagementSystem",
    demo: "#",
    gradient: "from-rose-500/25 via-teal-400/20 to-lime-400/25",
    image: "/Helpdesk%20management%20system.png"
  },
  {
    title: "University Book Exchange System",
    description: "A MERN application for orders, inventory, finance, support/helpdesk workflows and navigation integrations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Full Stack"],
    github: "https://github.com/hasira-nenuka/Ama-MERN",
    demo: "#",
    gradient: "from-violet-500/22 via-orange-500/20 to-amber-300/25",
    image: "/MERN%20application.png"
  },
  {
    title: "Wellness Tracker App",
    description: "A mobile wellness tracking application for recording daily health habits, monitoring progress and supporting personal wellbeing routines.",
    tech: ["Mobile App", "Wellness Tracking", "Health"],
    category: ["Mobile", "Academic"],
    github: "https://github.com/hasira-nenuka/Wellness-_Tracker_App.git",
    gradient: "from-cyan-400/25 via-emerald-300/20 to-violet-500/25",
    image: "/1.png"
  },
  {
    title: "Test Automation Assignment",
    description: "Exploration of automation testing types - unit, integration, performance, regression, smoke and API testing.",
    tech: ["Selenium", "Java", "TestNG"],
    category: ["Academic"],
    github: "https://github.com/hasira-nenuka/it23698604_test_automation",
    gradient: "from-teal-400/25 via-lime-300/20 to-rose-500/22",
    image: "/Test%20Automation%20Assignment.jpg"
  }
];
const PROJECT_FILTERS = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobile",
  "Academic"
];
const CERTIFICATIONS = [
  {
    title: "Training Certificates",
    org: "Oracle / Microsoft Learn",
    year: "2019 - Present",
    image: "/Training%20Certificates.jpeg"
  },
  {
    title: "Online Certifications",
    org: "Coursera / Udemy",
    year: "2019 - Present",
    image: "/Online%20Certifications.jpg"
  },
  {
    title: "Extra Skills Certificates",
    org: "Sports / Additional Skill Certificates",
    year: "2019 - Present",
    image: "/Extra%20Skills%20Certificates.jpg"
  },
  {
    title: "Workshop Certificates",
    org: "Industry Tech Talks",
    year: "2019 - Present",
    image: "/Workshop%20Certificates.jpg"
  }
];
const SECURITY_INTERESTS = [
  {
    title: "Network Security",
    desc: "Protecting computer networks, systems and data from unauthorized access through firewalls, secure protocols, intrusion detection and active monitoring.",
    keyAreas: [
      "TCP/IP & Networking Fundamentals",
      "Firewalls & VPN Configuration",
      "Intrusion Detection Systems",
      "Secure Network Architecture",
      "Traffic Analysis & Monitoring"
    ]
  },
  {
    title: "Ethical Hacking Fundamentals",
    desc: "Identifying vulnerabilities through authorized security testing so weaknesses can be discovered and fixed before they become real risks.",
    keyAreas: [
      "Reconnaissance",
      "Vulnerability Assessment",
      "Penetration Testing Basics",
      "Testing Methodologies",
      "Responsible Disclosure"
    ]
  },
  {
    title: "Secure Software Development",
    desc: "Building security into the software development life cycle so applications are designed, tested and maintained with resilience in mind.",
    keyAreas: [
      "OWASP Top 10",
      "Secure Coding Standards",
      "Authentication & Authorization",
      "Input Validation",
      "Security Code Review"
    ]
  },
  {
    title: "Linux Administration",
    desc: "Managing, configuring and securing Linux-based systems through permissions, monitoring, troubleshooting and server hardening.",
    keyAreas: [
      "Shell Scripting",
      "User & Permission Management",
      "Server Configuration",
      "System Monitoring",
      "Security Hardening"
    ]
  },
  {
    title: "Web Application Security",
    desc: "Protecting websites and APIs from common vulnerabilities through secure coding practices, defensive controls and careful testing.",
    keyAreas: [
      "XSS Prevention",
      "CSRF Protection",
      "SQL Injection Mitigation",
      "Session Management",
      "API Security"
    ]
  }
];
const STATS = [
  { value: "3+", label: "Years of Learning" },
  { value: "15+", label: "Completed Projects" },
  { value: "20+", label: "Technologies Learned" },
  { value: "10+", label: "Academic Achievements" }
];
const HIGHLIGHTS = [
  "Full-stack web applications",
  "Secure software practices",
  "Automation and testing",
  "Academic project leadership"
];
const CAPABILITIES = [
  {
    title: "Product-Focused Web Apps",
    desc: "Designing and building responsive dashboards, portals and workflow tools with clean user journeys.",
    points: ["Interface architecture", "Reusable React components", "Responsive delivery"]
  },
  {
    title: "Reliable Backend Systems",
    desc: "Creating practical APIs, data models and authentication flows that support real application needs.",
    points: ["REST API design", "MongoDB and SQL models", "Role-based access"]
  },
  {
    title: "Security-Aware Delivery",
    desc: "Applying secure development habits across forms, sessions, validation and deployment thinking.",
    points: ["OWASP awareness", "Input validation", "Testing mindset"]
  }
];
const SOCIALS = {
  github: "https://github.com/hasira-nenuka",
  linkedin: "https://www.linkedin.com/in/hasira-nenuka",
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=hasiranenuka20896@gmail.com"
};
const EMAIL = "hasiranenuka20896@gmail.com";
const PHONE_DISPLAY = "+94 72 990 2000";
const LOCATION = "Maharagama, Sri Lanka";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-16 border-t border-border bg-background/70 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-55"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(220px,0.9fr)_minmax(420px,1.25fr)_minmax(280px,0.95fr)] lg:gap-20 xl:gap-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:justify-self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display text-base font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-8 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hasira Nenuka" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xs text-xs leading-5 text-muted-foreground", children: "Aspiring software engineer building thoughtful, scalable and secure applications." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:justify-self-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-sm font-semibold", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid max-w-xl grid-cols-2 gap-x-8 gap-y-2 text-xs sm:grid-cols-3", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "inline-flex rounded-md px-1 py-0.5 text-muted-foreground transition-colors hover:text-foreground",
            children: l.label
          }
        ) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:justify-self-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-sm font-semibold", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: SOCIALS.github,
              "aria-label": "GitHub",
              target: "_blank",
              rel: "noreferrer",
              className: "grid size-9 place-items-center rounded-lg border border-white/10 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: SOCIALS.linkedin,
              "aria-label": "LinkedIn",
              target: "_blank",
              rel: "noreferrer",
              className: "grid size-9 place-items-center rounded-lg border border-white/10 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: Mail, label: EMAIL }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: Phone, label: PHONE_DISPLAY }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: MapPin, label: LOCATION })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-xs text-muted-foreground sm:flex-row sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Copyright ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Hasira Nenuka. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Designed and developed by",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text font-semibold", children: "Hasira Nenuka" })
      ] })
    ] }) })
  ] });
}
function ContactInfo({
  icon: Icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex min-w-0 items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-6 shrink-0 place-items-center rounded-md bg-white text-black shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words", children: label })
  ] });
}
function Loader() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface flex min-w-48 flex-col items-center gap-4 rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl border border-[var(--brand)]/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-xl border border-[var(--brand-2)]/35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl border-2 border-transparent border-t-[var(--brand)] border-r-[var(--brand-2)] animate-spin" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest gradient-text", children: "Loading Portfolio" })
  ] }) });
}
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `transition-all duration-300 ${scrolled ? "glass premium-border rounded-2xl px-3 shadow-[var(--shadow-card)]" : "px-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex h-14 items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Hasira Nenuka" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Hasira" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: "hidden h-2 w-2 rounded-full bg-[var(--brand-2)] shadow-[0_0_18px_var(--brand-2)] md:block"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 xl:flex", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.href,
                  className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.07] hover:text-foreground hover:shadow-[inset_0_0_0_1px_oklch(1_0_0/0.08)]",
                  activeProps: {
                    className: "rounded-lg px-3 py-2 text-sm bg-white/[0.07] text-foreground shadow-[inset_0_0_0_1px_oklch(1_0_0/0.08)]"
                  },
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Toggle theme",
                    onClick: () => setLight((v) => !v),
                    className: "grid size-9 place-items-center rounded-xl border border-border bg-background/25 transition-colors hover:bg-accent",
                    children: light ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "hidden items-center rounded-xl bg-[image:var(--gradient-brand)] bg-[length:180%_180%] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 animate-gradient-pan sm:inline-flex",
                    children: "Hire me"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Menu",
                    className: "grid size-9 place-items-center rounded-xl border border-border bg-background/25 xl:hidden",
                    onClick: () => setOpen((v) => !v),
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
                  }
                )
              ] })
            ] }),
            open && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-1 pb-4 pt-2 animate-fade-up sm:grid-cols-3 xl:hidden", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.href,
                onClick: () => setOpen(false),
                className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.055] hover:text-foreground",
                activeProps: {
                  className: "block rounded-lg px-3 py-2 text-sm bg-white/[0.055] text-foreground"
                },
                children: l.label
              }
            ) }, l.href)) })
          ]
        }
      ) })
    }
  );
}
function PortfolioPage({
  children,
  contentClassName = "pt-16 md:pt-[4.75rem]"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "page-shell relative min-h-dvh overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: contentClassName, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CAPABILITIES as C,
  HIGHLIGHTS as H,
  PortfolioPage as P,
  SKILLS as S,
  SECURITY_INTERESTS as a,
  PROJECTS as b,
  PROJECT_FILTERS as c,
  SOCIALS as d,
  CERTIFICATIONS as e,
  STATS as f
};
