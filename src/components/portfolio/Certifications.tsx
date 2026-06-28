import { useState } from "react";
import { Section } from "./Section";
import { CERTIFICATIONS } from "./data";
import { Award, Eye, Images, Maximize2, X } from "lucide-react";
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
  {
    title: "Business Analysis Basics",
    src: "/2.png",
  },
  {
    title: "Learn CCNA 200-301 Network Fundamentals Online",
    src: "/3.png",
  },
  {
    title: "Free Project Manager Course",
    src: "/4.png",
  },
  {
    title: "Free Time Management Course",
    src: "/5.png",
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    src: "/6.png",
  },
  {
    title: "Introduction to Generative AI Studio",
    src: "/7.png",
  },
  {
    title: "Introduction to Image Generation",
    src: "/8.png",
  },
  {
    title: "Introduction to DevOps Tools",
    src: "/9.png",
  },
  {
    title: "Business Intelligence using Excel Basics Tutorial",
    src: "/10.png",
  },
  {
    title: "Introduction to Power Query in Excel Basics Course",
    src: "/11.png",
  },
  {
    title: "AI for Business Professionals",
    src: "/12.png",
  },
  {
    title: "Critical Thinking in the AI Era",
    src: "/13.png",
  },
  {
    title: "Effective Leadership",
    src: "/14.png",
  },
  {
    title: "Professional Networking for Career Growth",
    src: "/15.png",
  },
  {
    title: "PRDV430: AI for Business Applications",
    src: "/16.png",
  },
  {
    title: "ESL005: Business-Proficient English as a Second Language",
    src: "/17.png",
  },
  {
    title: "ESL001: Elementary English as a Second Language",
    src: "/18.png",
  },
  {
    title: "BUS301: Human Resource Management",
    src: "/19.png",
  },
  {
    title: "BUS250: Introduction to Business Intelligence and Analytics",
    src: "/20.png",
  },
  {
    title: "PRDV226: Introduction to Human Resource Management",
    src: "/21.png",
  },
  {
    title: "BUS605: Strategic Project Management",
    src: "/22.png",
  },
  {
    title: "Front-End Web Development",
    src: "/23.png",
  },
  {
    title: "Introduction to Software Quality Assurance",
    src: "/24.png",
  },
  {
    title: "Python for Beginners",
    src: "/25.png",
  },
  {
    title: "Python Programming",
    src: "/26.png",
  },
  {
    title: "Web Design for Beginners",
    src: "/27.png",
  },
  {
    title: "Computer Hardware Basics",
    src: "/28.png",
  },
  {
    title: "AI/ML Engineer - Stage 1",
    src: "/29.png",
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
  "Training Certificates": {
    eyebrow: "Training Certificates",
    title: "Certificate Gallery",
    certificates: PROGRAMMING_CERTIFICATES,
  },
  "Online Certifications": {
    eyebrow: "Online Certifications",
    title: "Certificate Gallery",
    certificates: ONLINE_LEARNING_CERTIFICATES,
  },
  "Workshop Certificates": {
    eyebrow: "Workshop Certificates",
    title: "Certificate Gallery",
    certificates: WORKSHOP_CERTIFICATES,
  },
  "Extra Skills Certificates": {
    eyebrow: "Extra Skills Certificates",
    title: "Certificate Gallery",
    certificates: EXTRA_SKILLS_CERTIFICATES,
  },
} as const;

type Certificate =
  (typeof CERTIFICATE_GALLERIES)[keyof typeof CERTIFICATE_GALLERIES]["certificates"][number];
type CertificateGalleryTitle = keyof typeof CERTIFICATE_GALLERIES;

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
      title={
        <span className="block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]">
          Credentials that show <span className="gradient-text">continued growth</span>
        </span>
      }
      subtitle="Certificates, workshops and extra achievements that support my technical path."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CERTIFICATIONS.map((c, i) => {
          const galleryTitle =
            c.title in CERTIFICATE_GALLERIES ? (c.title as CertificateGalleryTitle) : null;

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
                  className="surface group h-full min-h-[21rem] w-full cursor-pointer overflow-hidden rounded-2xl text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                  aria-haspopup="dialog"
                  aria-label={`Open ${c.title}`}
                >
                  <CertificationCardContent
                    title={c.title}
                    org={c.org}
                    year={c.year}
                    image={c.image}
                    isClickable
                  />
                </button>
              ) : (
                <div className="surface group h-full min-h-[21rem] overflow-hidden rounded-2xl text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40">
                  <CertificationCardContent
                    title={c.title}
                    org={c.org}
                    year={c.year}
                    image={c.image}
                  />
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
  image,
  isClickable = false,
}: {
  title: string;
  org: string;
  year: string;
  image?: string;
  isClickable?: boolean;
}) {
  return (
    <>
      <div className="grid min-h-[10.5rem] place-items-center overflow-hidden border-b border-white/10 bg-white/95">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            aria-hidden="true"
          />
        ) : (
          <span className="grid size-16 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105">
            <Award className="size-7" />
          </span>
        )}
      </div>
      <div className="flex min-h-[10.5rem] flex-col p-6">
        <span className="mb-4 grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105">
          <Award className="size-5" />
        </span>
        <h3 className="font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{org}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-xs font-medium text-[var(--brand)]">{year}</p>
          {isClickable ? <Eye className="size-4 text-muted-foreground" aria-hidden="true" /> : null}
        </div>
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
              <p className="text-xs uppercase tracking-widest text-[var(--brand)] font-semibold truncate">
                {gallery.eyebrow}
              </p>
              <h3 id="certificates-gallery-title" className="font-semibold text-lg sm:text-xl">
                {gallery.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {gallery.certificates.length}{" "}
                {gallery.certificates.length === 1 ? "certificate" : "certificates"}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-8">
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
      className="group surface rounded-2xl p-2.5 text-left card-hover hover:-translate-y-1 hover:border-[var(--brand)]/50 hover:shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
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
      <div className="mt-3 flex items-start justify-between gap-3 px-1">
        <p className="text-sm font-semibold leading-snug text-foreground">{certificate.title}</p>
        <Eye className="size-4 shrink-0 text-[var(--brand)]" aria-hidden="true" />
      </div>
    </button>
  );
}
