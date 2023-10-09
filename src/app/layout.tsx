import { Metadata } from "next/types";
import { AppProviders } from "components/application/providers/AppProviders";

export const metadata: Metadata = {
  title: "Next.js Web App",
  description: "DzenCode Testing App",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppProviders>{children}</AppProviders>;
}
