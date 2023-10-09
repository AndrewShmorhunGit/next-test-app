"use client";
import { ActivePageWrapper } from "../incomes/Client";
import { ScrollContainer } from "../incomes/Server";
import { ProductsHeader } from "../products/Client";

export function ProductsPage({ children }: { children: React.ReactNode }) {
  return (
    <ActivePageWrapper>
      <ProductsHeader />
      <ScrollContainer>{children}</ScrollContainer>
    </ActivePageWrapper>
  );
}
