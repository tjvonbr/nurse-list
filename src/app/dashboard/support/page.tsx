import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardShell } from "@/components/DashboardWrapper";

export default function Billing() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Support"
        text="Submit a support ticket if you're running into problems."
      />
    </DashboardShell>
  );
}
