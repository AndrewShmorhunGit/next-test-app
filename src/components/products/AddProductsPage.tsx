"use client";
import { ActivePageWrapper } from "../incomes/Client";
import { ScrollContainer } from "../incomes/Server";

export function ProductsPage({ children }: { children: React.ReactNode }) {
  return (
    <ActivePageWrapper>
      <ScrollContainer>{children}</ScrollContainer>
    </ActivePageWrapper>
  );
}
