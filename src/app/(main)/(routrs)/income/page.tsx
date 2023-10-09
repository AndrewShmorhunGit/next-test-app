import ProductsPage from "components/pages/ProductsPage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Income",
};

export default function Income() {
  return <ProductsPage />;
}
