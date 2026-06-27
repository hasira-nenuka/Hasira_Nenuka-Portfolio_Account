import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasira Nenuka - Software Engineering Undergraduate & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Hasira Nenuka, an Information Technology undergraduate and full-stack developer building scalable, secure and modern web applications.",
      },
      { property: "og:title", content: "Hasira Nenuka - Software Engineer" },
      {
        property: "og:description",
        content: "Full-stack developer building modern, scalable software.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PortfolioPage contentClassName="">
      <Hero />
    </PortfolioPage>
  );
}
