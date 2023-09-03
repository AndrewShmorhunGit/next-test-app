import { OrdersPage } from "components/pages/OrdersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
};
export default function Orders() {
  return <OrdersPage />;
}
