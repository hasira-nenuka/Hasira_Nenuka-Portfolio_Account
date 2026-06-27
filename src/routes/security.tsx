import { createFileRoute } from "@tanstack/react-router";
import { CyberSecurity } from "@/components/portfolio/CyberSecurity";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <PortfolioPage>
      <CyberSecurity />
    </PortfolioPage>
  );
}
