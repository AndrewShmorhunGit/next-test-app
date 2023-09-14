"use client";
import { AddProductsPage } from "components/products/AddProductsPage";
import { ProductsToAdd } from "components/products/ProductsToAdd";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Add Products",
};

export default function Products() {
  return (
    <AddProductsPage>
      <ProductsToAdd />
    </AddProductsPage>
  );
}
