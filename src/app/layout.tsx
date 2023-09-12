/** @jsxImportSource theme-ui */
"use client";
import { Metadata } from "next/types";
import { AppProviders } from "components/application/AppProviders";

export const metadata: Metadata = {
  title: "Next.js Web App",
  description: "DzenCode Testing App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProviders>{children}</AppProviders>;
}
