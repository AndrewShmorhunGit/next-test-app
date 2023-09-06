import { OrdersPage } from "components/orders/OrdersPage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Orders",
};
export default function Orders() {
  return <OrdersPage />;
}
