import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, e as CERTIFICATIONS } from "./PortfolioPage-D83AEUa4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { q as Award, r as Eye, I as Images, X, s as Maximize2 } from "../_libs/lucide-react.mjs";
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
const PROGRAMMING_CERTIFICATES = [
  {
    title: "JMC Certificate in Microsoft Office",
    src: "/JMC%20Certificate%20in%20Microsoft%20Office.jpg"
  },
  {
    title: "NIBM Certificate in Computer Science",
    src: "/NIBM%20Certificate%20in%20Computer%20Science.jpg"
  },
  {
    title: "JMC Business English Programme Result Sheet",
    src: "/JMC%20Business%20English%20Programme%20Result%20Sheet.png"
  }
];
const ONLINE_LEARNING_CERTIFICATES = [
  {
    title: "Getting Started with MongoDB Atlas",
    src: "/Getting%20Started%20with%20MongoDB%20Atlas.png"
  },
  {
    title: "Business Analysis Basics",
    src: "/2.png"
  },
  {
    title: "Learn CCNA 200-301 Network Fundamentals Online",
    src: "/3.png"
  },
  {
    title: "Free Project Manager Course",
    src: "/4.png"
  },
  {
    title: "Free Time Management Course",
    src: "/5.png"
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    src: "/6.png"
  },
  {
    title: "Introduction to Generative AI Studio",
    src: "/7.png"
  },
  {
    title: "Introduction to Image Generation",
    src: "/8.png"
  },
  {
    title: "Introduction to DevOps Tools",
    src: "/9.png"
  },
  {
    title: "Business Intelligence using Excel Basics Tutorial",
    src: "/10.png"
  },
  {
    title: "Introduction to Power Query in Excel Basics Course",
    src: "/11.png"
  },
  {
    title: "AI for Business Professionals",
    src: "/12.png"
  },
  {
    title: "Critical Thinking in the AI Era",
    src: "/13.png"
  },
  {
    title: "Effective Leadership",
    src: "/14.png"
  },
  {
    title: "Professional Networking for Career Growth",
    src: "/15.png"
  },
  {
    title: "PRDV430: AI for Business Applications",
    src: "/16.png"
  },
  {
    title: "ESL005: Business-Proficient English as a Second Language",
    src: "/17.png"
  },
  {
    title: "ESL001: Elementary English as a Second Language",
    src: "/18.png"
  },
  {
    title: "BUS301: Human Resource Management",
    src: "/19.png"
  },
  {
    title: "BUS250: Introduction to Business Intelligence and Analytics",
    src: "/20.png"
  },
  {
    title: "PRDV226: Introduction to Human Resource Management",
    src: "/21.png"
  },
  {
    title: "BUS605: Strategic Project Management",
    src: "/22.png"
  },
  {
    title: "Front-End Web Development",
    src: "/23.png"
  },
  {
    title: "Introduction to Software Quality Assurance",
    src: "/24.png"
  },
  {
    title: "Python for Beginners",
    src: "/25.png"
  },
  {
    title: "Python Programming",
    src: "/26.png"
  },
  {
    title: "Web Design for Beginners",
    src: "/27.png"
  },
  {
    title: "Computer Hardware Basics",
    src: "/28.png"
  },
  {
    title: "AI/ML Engineer - Stage 1",
    src: "/29.png"
  }
];
const WORKSHOP_CERTIFICATES = [
  {
    title: "JMC Workshop Certificate",
    src: "/JMC%20Workshop%20Certificate.jpg"
  }
];
const EXTRA_SKILLS_CERTIFICATES = [
  {
    title: "State Children's Drama Festival",
    src: "/Drama.jpg"
  },
  {
    title: "Divisional Sports Meet Volleyball",
    src: "/volleyball.jpg"
  }
];
const CERTIFICATE_GALLERIES = {
  "Training Certificates": {
    eyebrow: "Training Certificates",
    title: "Certificate Gallery",
    certificates: PROGRAMMING_CERTIFICATES
  },
  "Online Certifications": {
    eyebrow: "Online Certifications",
    title: "Certificate Gallery",
    certificates: ONLINE_LEARNING_CERTIFICATES
  },
  "Workshop Certificates": {
    eyebrow: "Workshop Certificates",
    title: "Certificate Gallery",
    certificates: WORKSHOP_CERTIFICATES
  },
  "Extra Skills Certificates": {
    eyebrow: "Extra Skills Certificates",
    title: "Certificate Gallery",
    certificates: EXTRA_SKILLS_CERTIFICATES
  }
};
function Certifications() {
  const [activeGallery, setActiveGallery] = reactExports.useState(null);
  const [selectedCertificate, setSelectedCertificate] = reactExports.useState(null);
  function closeGallery() {
    setSelectedCertificate(null);
    setActiveGallery(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "certs",
      eyebrow: "Achievements & Certifications",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]", children: [
        "Credentials that show ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "continued growth" })
      ] }),
      subtitle: "Certificates, workshops and extra achievements that support my technical path.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4", children: CERTIFICATIONS.map((c, i) => {
          const galleryTitle = c.title in CERTIFICATE_GALLERIES ? c.title : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: i * 0.06 },
              className: "h-full",
              children: galleryTitle ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveGallery(galleryTitle),
                  className: "surface group h-full min-h-[21rem] w-full cursor-pointer overflow-hidden rounded-2xl text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]",
                  "aria-haspopup": "dialog",
                  "aria-label": `Open ${c.title}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CertificationCardContent,
                    {
                      title: c.title,
                      org: c.org,
                      year: c.year,
                      image: c.image,
                      isClickable: true
                    }
                  )
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface group h-full min-h-[21rem] overflow-hidden rounded-2xl text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CertificationCardContent,
                {
                  title: c.title,
                  org: c.org,
                  year: c.year,
                  image: c.image
                }
              ) })
            },
            c.title
          );
        }) }),
        activeGallery ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CertificatesModal,
          {
            gallery: CERTIFICATE_GALLERIES[activeGallery],
            selectedCertificate,
            onSelectCertificate: setSelectedCertificate,
            onClose: closeGallery
          }
        ) : null
      ]
    }
  );
}
function CertificationCardContent({
  title,
  org,
  year,
  image,
  isClickable = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[10.5rem] place-items-center overflow-hidden border-b border-white/10 bg-white/95", children: image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: "",
        className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-16 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-7" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[10.5rem] flex-col p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-4 grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold leading-snug", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: org }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-[var(--brand)]", children: year }),
        isClickable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4 text-muted-foreground", "aria-hidden": "true" }) : null
      ] })
    ] })
  ] });
}
function CertificatesModal({
  gallery,
  selectedCertificate,
  onSelectCertificate,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-md p-4 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "certificates-gallery-title",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-4 z-10 mb-6 glass rounded-2xl px-4 py-4 sm:px-5 flex items-center justify-between gap-4 shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-11 shrink-0 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-[var(--brand)] font-semibold truncate", children: gallery.eyebrow }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "certificates-gallery-title", className: "font-semibold text-lg sm:text-xl", children: gallery.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  gallery.certificates.length,
                  " ",
                  gallery.certificates.length === 1 ? "certificate" : "certificates"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "grid place-items-center size-10 shrink-0 rounded-xl bg-secondary/80 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] transition",
                "aria-label": "Close certificate gallery",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-8", children: gallery.certificates.map((certificate) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CertificateThumbnail,
            {
              certificate,
              onClick: () => onSelectCertificate(certificate)
            },
            certificate.src
          )) })
        ] }),
        selectedCertificate ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "fixed inset-0 z-[110] overflow-y-auto bg-background/95 backdrop-blur-sm p-4 sm:p-6",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": selectedCertificate.title,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => onSelectCertificate(null),
                  className: "fixed right-4 top-4 z-10 grid place-items-center size-10 rounded-xl bg-secondary/90 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] transition",
                  "aria-label": "Close enlarged certificate",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex min-h-full w-full max-w-7xl items-center justify-center px-2 pt-14 pb-8 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-2 shadow-2xl sm:p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid max-h-[82vh] place-items-center overflow-hidden rounded-xl bg-white shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selectedCertificate.src,
                    alt: selectedCertificate.title,
                    className: "max-h-[82vh] w-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "px-2 py-3 text-center text-sm font-medium text-foreground", children: selectedCertificate.title })
              ] }) })
            ]
          }
        ) : null
      ]
    }
  );
}
function CertificateThumbnail({
  certificate,
  onClick
}) {
  const [hasLoaded, setHasLoaded] = reactExports.useState(true);
  if (!hasLoaded) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: "group surface rounded-2xl p-2.5 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/50 hover:shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]",
      "aria-label": `View ${certificate.title} larger`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-xl bg-white overflow-hidden grid place-items-center shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: certificate.src,
              alt: certificate.title,
              onError: () => setHasLoaded(false),
              className: "h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 grid place-items-center size-9 rounded-full bg-background/80 text-foreground shadow-lg backdrop-blur-sm opacity-0 transition group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition group-hover:opacity-100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start justify-between gap-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-snug text-foreground", children: certificate.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4 shrink-0 text-[var(--brand)]", "aria-hidden": "true" })
        ] })
      ]
    }
  );
}
function AchievementsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}) });
}
export {
  AchievementsPage as component
};
