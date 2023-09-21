import ProductsPage from "components/incomes/ProductsPage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Income",
};

export default function Income() {
  return <ProductsPage />;
}
