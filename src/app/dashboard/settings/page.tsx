import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardShell } from "@/components/DashboardWrapper";

export default function Billing() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Edit your personal information and preferences."
      />
    </DashboardShell>
  );
}
