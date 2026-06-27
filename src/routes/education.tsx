import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

function EducationPage() {
  return (
    <PortfolioPage>
      <Education />
    </PortfolioPage>
  );
}
