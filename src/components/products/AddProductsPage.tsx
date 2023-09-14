"use client";
import { ActivePageWrapper } from "./Client";
import { ScrollContainer } from "./Server";

export function AddProductsPage({ children }: { children: React.ReactNode }) {
  return (
    <ActivePageWrapper>
      <ScrollContainer>{children}</ScrollContainer>
    </ActivePageWrapper>
  );
}
