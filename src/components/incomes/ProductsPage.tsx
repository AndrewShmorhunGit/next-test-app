/** @jsxImportSource theme-ui */
"use client";
import { Products } from "./Server";
import { ActivePageWrapper } from "./Client";

export default function ProductsPage() {
  return (
    <ActivePageWrapper>
      <Products />
    </ActivePageWrapper>
  );
}
