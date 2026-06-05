import { useState } from "react";
import { Section } from "./Section";
import { CERTIFICATIONS, SOCIALS } from "./data";
import { Award, ExternalLink, Eye, Images, Maximize2, X } from "lucide-react";
import { motion } from "framer-motion";

const PROGRAMMING_CERTIFICATES = [
  {
    title: "JMC Certificate in Microsoft Office",
    src: "/JMC%20Certificate%20in%20Microsoft%20Office.jpg",
  },
  {
    title: "NIBM Certificate in Computer Science",
    src: "/NIBM%20Certificate%20in%20Computer%20Science.jpg",
  },
  {
    title: "JMC Business English Programme Result Sheet",
    src: "/JMC%20Business%20English%20Programme%20Result%20Sheet.png",
  },
];

const ONLINE_LEARNING_CERTIFICATES = [
  {
    title: "Getting Started with MongoDB Atlas",
    src: "/Getting%20Started%20with%20MongoDB%20Atlas.png",
  },
];

const WORKSHOP_CERTIFICATES = [
  {
    title: "JMC Workshop Certificate",
    src: "/JMC%20Workshop%20Certificate.jpg",
  },
];

const EXTRA_SKILLS_CERTIFICATES = [
  {
    title: "State Children's Drama Festival",
    src: "/Drama.jpg",
  },
  {
    title: "Divisional Sports Meet Volleyball",
    src: "/volleyball.jpg",
  },
];

const CERTIFICATE_GALLERIES = {
  "Programming Certifications": {
    eyebrow: "Programming Certifications",
    title: "Certificate Gallery",
    certificates: PROGRAMMING_CERTIFICATES,
  },
  "Online Learning Certificates": {
    eyebrow: "Online Learning Certificates",
    title: "Certificate Gallery",
    certificates: ONLINE_LEARNING_CERTIFICATES,
  },
  Workshops: {
    eyebrow: "Workshops",
    title: "Certificate Gallery",
    certificates: WORKSHOP_CERTIFICATES,
  },
  "Extra Skills": {
    eyebrow: "Extra Skills",
    title: "Certificate Gallery",
    certificates: EXTRA_SKILLS_CERTIFICATES,
  },
} as const;

type Certificate = (typeof CERTIFICATE_GALLERIES)[keyof typeof CERTIFICATE_GALLERIES]["certificates"][number];
type CertificateGalleryTitle = keyof typeof CERTIFICATE_GALLERIES;

const GITHUB_PROJECTS_URL = `${SOCIALS.github}?tab=repositories`;

export function Certifications() {
  const [activeGallery, setActiveGallery] = useState<CertificateGalleryTitle | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  function closeGallery() {
    setSelectedCertificate(null);
    setActiveGallery(null);
  }

  return (
    <Section
      id="certs"
      eyebrow="Achievements & Certifications"
      title={<>Milestones along the <span className="gradient-text">way</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => {
          const galleryTitle = c.title in CERTIFICATE_GALLERIES ? (c.title as CertificateGalleryTitle) : null;
          const isCourseworkProjects = c.title === "University Coursework Projects";

          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="h-full"
            >
              {galleryTitle ? (
                <button
                  type="button"
                  onClick={() => setActiveGallery(galleryTitle)}
                  className="glass rounded-2xl p-6 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] w-full h-full cursor-pointer"
                  aria-haspopup="dialog"
                  aria-label={`Open ${c.title}`}
                >
                  <CertificationCardContent title={c.title} org={c.org} year={c.year} isClickable />
                </button>
              ) : isCourseworkProjects ? (
                <a
                  href={GITHUB_PROJECTS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-6 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] w-full h-full cursor-pointer block"
                  aria-label="Open all projects on GitHub"
                >
                  <CertificationCardContent title={c.title} org={c.org} year={c.year} actionIcon="external" />
                </a>
              ) : (
                <div className="glass rounded-2xl p-6 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 h-full">
                  <CertificationCardContent title={c.title} org={c.org} year={c.year} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {activeGallery ? (
        <CertificatesModal
          gallery={CERTIFICATE_GALLERIES[activeGallery]}
          selectedCertificate={selectedCertificate}
          onSelectCertificate={setSelectedCertificate}
          onClose={closeGallery}
        />
      ) : null}
    </Section>
  );
}

function CertificationCardContent({
  title,
  org,
  year,
  isClickable = false,
  actionIcon,
}: {
  title: string;
  org: string;
  year: string;
  isClickable?: boolean;
  actionIcon?: "external";
}) {
  return (
    <>
      <span className="grid place-items-center size-10 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground mb-4">
        <Award className="size-5" />
      </span>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{org}</p>
      <div className="flex items-center justify-between gap-3 mt-3">
        <p className="text-xs text-[var(--brand)] font-medium">{year}</p>
        {actionIcon === "external" ? <ExternalLink className="size-4 text-muted-foreground" aria-hidden="true" /> : null}
        {isClickable ? <Eye className="size-4 text-muted-foreground" aria-hidden="true" /> : null}
      </div>
    </>
  );
}

function CertificatesModal({
  gallery,
  selectedCertificate,
  onSelectCertificate,
  onClose,
}: {
  gallery: (typeof CERTIFICATE_GALLERIES)[CertificateGalleryTitle];
  selectedCertificate: Certificate | null;
  onSelectCertificate: (certificate: Certificate | null) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificates-gallery-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-4 z-10 mb-6 glass rounded-2xl px-4 py-4 sm:px-5 flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3 min-w-0">
            <span className="grid place-items-center size-11 shrink-0 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Images className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-[var(--brand)] font-semibold truncate">{gallery.eyebrow}</p>
              <h3 id="certificates-gallery-title" className="font-semibold text-lg sm:text-xl">{gallery.title}</h3>
              <p className="text-sm text-muted-foreground">
                {gallery.certificates.length} {gallery.certificates.length === 1 ? "certificate" : "certificates"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid place-items-center size-10 shrink-0 rounded-xl bg-secondary/80 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] transition"
            aria-label="Close certificate gallery"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 pb-8">
          {gallery.certificates.map((certificate) => (
            <CertificateThumbnail
              key={certificate.src}
              certificate={certificate}
              onClick={() => onSelectCertificate(certificate)}
            />
          ))}
        </div>
      </div>

      {selectedCertificate ? (
        <div
          className="fixed inset-0 z-[110] overflow-y-auto bg-background/95 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >
          <button
            type="button"
            onClick={() => onSelectCertificate(null)}
            className="fixed right-4 top-4 z-10 grid place-items-center size-10 rounded-xl bg-secondary/90 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] transition"
            aria-label="Close enlarged certificate"
          >
            <X className="size-5" />
          </button>
          <div className="mx-auto flex min-h-full w-full max-w-7xl items-center justify-center px-2 pt-14 pb-8 sm:px-6">
            <figure className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-2 shadow-2xl sm:p-3">
              <div className="grid max-h-[82vh] place-items-center overflow-hidden rounded-xl bg-white shadow-inner">
                <img
                  src={selectedCertificate.src}
                  alt={selectedCertificate.title}
                  className="max-h-[82vh] w-full object-contain"
                />
              </div>
              <figcaption className="px-2 py-3 text-center text-sm font-medium text-foreground">
                {selectedCertificate.title}
              </figcaption>
            </figure>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CertificateThumbnail({
  certificate,
  onClick,
}: {
  certificate: Certificate;
  onClick: () => void;
}) {
  const [hasLoaded, setHasLoaded] = useState(true);

  if (!hasLoaded) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group glass rounded-2xl p-3 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/50 hover:shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
      aria-label={`View ${certificate.title} larger`}
    >
      <div className="relative aspect-[4/3] rounded-xl bg-white overflow-hidden grid place-items-center shadow-lg">
        <img
          src={certificate.src}
          alt={certificate.title}
          onError={() => setHasLoaded(false)}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute right-3 top-3 grid place-items-center size-9 rounded-full bg-background/80 text-foreground shadow-lg backdrop-blur-sm opacity-0 transition group-hover:opacity-100">
          <Maximize2 className="size-4" />
        </span>
        <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <p className="text-sm font-semibold text-foreground">{certificate.title}</p>
        <Eye className="size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
      </div>
    </button>
  );
}
