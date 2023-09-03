import { ErrorPage } from "components/pages/ErrorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
};
export default function Error() {
  return <ErrorPage />;
}
