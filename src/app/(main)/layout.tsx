import { LayoutWrapper } from "components/wrapper/Wrapper";
import React from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
