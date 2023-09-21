"use client";
import { ProductsPage } from "components/products/AddProductsPage";
import { ProductsToAdd } from "components/products/Server";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  return (
    <ProductsPage>
      <ProductsToAdd />
    </ProductsPage>
  );
}
