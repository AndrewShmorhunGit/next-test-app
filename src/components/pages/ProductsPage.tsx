/** @jsxImportSource theme-ui */
"use client";
import { Products } from "../incomes/Server";
import { ActivePageWrapper } from "../incomes/Client";

export default function ProductsPage() {
  return (
    <ActivePageWrapper>
      <Products />
    </ActivePageWrapper>
  );
}
