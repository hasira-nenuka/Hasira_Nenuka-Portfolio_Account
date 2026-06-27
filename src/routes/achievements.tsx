import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/portfolio/Certifications";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <PortfolioPage>
      <Certifications />
    </PortfolioPage>
  );
}
