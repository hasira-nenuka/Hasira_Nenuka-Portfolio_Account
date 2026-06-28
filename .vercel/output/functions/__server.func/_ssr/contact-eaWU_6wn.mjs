import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-Dn-ljv6M.mjs";
import { P as PortfolioPage, d as SOCIALS } from "./PortfolioPage-D83AEUa4.mjs";
import { l as Bot, j as Sparkles, m as CircleCheck, M as Mail, n as MessageSquare, P as Phone, d as Github, o as Linkedin, p as MapPin } from "../_libs/lucide-react.mjs";
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
const EMAIL = "hasiranenuka20896@gmail.com";
const PHONE = "+94729902000";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const assistantReply = reactExports.useMemo(
    () => createAssistantReply(form.subject, form.message, form.name),
    [form.name, form.subject, form.message]
  );
  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5e3);
  }
  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }
  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    form.subject || "Project opportunity for Hasira Nenuka"
  )}&body=${encodeURIComponent(
    `Hi Hasira,

My name is ${form.name || "[Your name]"}.

${form.message || "I would like to discuss an opportunity with you."}

Reply to: ${form.email || "[Your email]"}
`
  )}`;
  const whatsappHref = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
    `Hi Hasira, I saw your portfolio. ${form.subject ? `About: ${form.subject}. ` : ""}${form.message || "I would like to discuss an opportunity with you."}`
  )}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "contact",
      eyebrow: "AI Contact Desk",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]", children: [
        "Hire me through a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "smart contact flow" })
      ] }),
      subtitle: "Open to internships, collaborations, project work and interesting engineering problems.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.08fr_0.92fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit,
            className: "surface premium-border relative overflow-hidden rounded-2xl p-6 space-y-4 md:p-7",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:180%_180%] animate-gradient-pan"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start gap-3 rounded-2xl border border-white/10 bg-background/30 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Hasira AI contact assistant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: "Type your message and the assistant reply updates instantly." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    id: "name",
                    label: "Full Name",
                    value: form.name,
                    onChange: (value) => updateField("name", value),
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    id: "email",
                    type: "email",
                    label: "Email",
                    value: form.email,
                    onChange: (value) => updateField("email", value),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field,
                {
                  id: "subject",
                  label: "Subject",
                  value: form.subject,
                  onChange: (value) => updateField("subject", value),
                  required: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-xs font-medium text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "message",
                    required: true,
                    rows: 5,
                    value: form.message,
                    onChange: (event) => updateField("message", event.target.value),
                    className: "mt-1.5 w-full resize-none rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none",
                    placeholder: "Tell me about your project or opportunity..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }),
                    " ",
                    sent ? "AI reply prepared" : "Prepare Smart Reply"
                  ]
                }
              ),
              sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/10 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-semibold text-[var(--brand)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }),
                  " Ready to contact Hasira"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: emailHref,
                      className: "inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
                        " Send Email"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: whatsappHref,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4" }),
                        " WhatsApp"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface premium-border relative overflow-hidden rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Instant Assistant Reply" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Auto response preview" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)]", children: "Live" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-white/10 bg-background/35 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-foreground/90", children: assistantReply }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactItem,
            {
              icon: Mail,
              title: "Email",
              value: EMAIL,
              href: SOCIALS.email
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, title: "Mobile", value: "0729902000", href: `tel:${PHONE}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactItem,
            {
              icon: Github,
              title: "GitHub",
              value: "github.com/hasira-nenuka",
              href: SOCIALS.github
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactItem,
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "linkedin.com/in/hasira-nenuka",
              href: SOCIALS.linkedin
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactItem,
            {
              icon: MapPin,
              title: "Location",
              value: "Maharagama, Sri Lanka",
              href: "https://www.google.com/maps/search/?api=1&query=Maharagama%2C%20Sri%20Lanka"
            }
          )
        ] })
      ] })
    }
  );
}
function createAssistantReply(subject, message, name = "") {
  const text = `${subject} ${message}`.toLowerCase();
  const greeting = name.trim() ? `Hi ${name.trim()}, ` : "Hi, ";
  if (!text.trim()) {
    return "Hi, I am Hasira's portfolio assistant. Share your opportunity and I will prepare a clear next step instantly.";
  }
  if (text.includes("intern")) {
    return `${greeting}thanks for the internship opportunity. Hasira is open to software engineering internships and can share his project experience, GitHub work, and availability for an interview.`;
  }
  if (text.includes("freelance") || text.includes("project") || text.includes("website")) {
    return `${greeting}thanks for the project inquiry. Hasira can help with modern web applications, React interfaces, backend APIs, dashboards, and automation-focused work. A short project brief would be the best next step.`;
  }
  if (text.includes("security") || text.includes("testing") || text.includes("automation")) {
    return `${greeting}thanks for reaching out. Hasira is especially interested in secure software, testing, and automation workflows. He can discuss the scope, tools, timeline, and expected outcomes.`;
  }
  return `${greeting}thanks for your message. Hasira will review the opportunity and reply as soon as possible. For a faster response, include the role, timeline, budget or company details.`;
}
function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        name: id,
        type,
        value,
        onChange: (event) => onChange(event.target.value),
        required,
        className: "mt-1.5 w-full rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none",
        placeholder: label
      }
    )
  ] });
}
function ContactItem({
  icon: Icon,
  title,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface group flex items-center gap-4 rounded-2xl p-5 card-hover hover:-translate-y-0.5 hover:border-[var(--brand)]/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "break-words font-medium", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", children: inner }) : inner;
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) });
}
export {
  ContactPage as component
};
