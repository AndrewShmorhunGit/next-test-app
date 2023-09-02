"use client";
import { Footer } from "components/footer/Footer";
import { TopMenu } from "components/header/TopMenu";
import { NavigationMenu } from "components/navigation/NavigationMenu";
import {
  PageWrapper,
  LayoutSubWrapper,
  FooterExtraWrapper,
} from "./Components";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LayoutSubWrapper>
      <TopMenu />
      <NavigationMenu />
      <PageWrapper>{children}</PageWrapper>
    </LayoutSubWrapper>
  );
}
