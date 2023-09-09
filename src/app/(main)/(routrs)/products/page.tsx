import ProductsPage from "components/products/ProductsPage.1";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  return <ProductsPage />;
}
