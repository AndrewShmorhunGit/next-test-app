import ProductsPage from "components/products/ProductsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  return <ProductsPage />;
}
