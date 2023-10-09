"use client";
import { ActivePageWrapper } from "../incomes/Client";
import { ProductsHeader, ScrollContainer } from "../incomes/Server";

export function ProductsPage({ children }: { children: React.ReactNode }) {
  return (
    <ActivePageWrapper>
      <ProductsHeader />
      <ScrollContainer>{children}</ScrollContainer>
    </ActivePageWrapper>
  );
}
