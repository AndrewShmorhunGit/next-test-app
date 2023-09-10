/** @jsxImportSource theme-ui */
"use client";
import { Products, ProductsHeader } from "./Server";
import { ActivePageWrapper } from "./Client";

export default function ProductsPage() {
  return (
    <ActivePageWrapper>
      <ProductsHeader />
      <Products />
    </ActivePageWrapper>
  );
}
