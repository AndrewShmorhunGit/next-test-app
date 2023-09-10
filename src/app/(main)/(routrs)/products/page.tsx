import ProductsPage from "components/products/ProductsPage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  return <ProductsPage />;
}
