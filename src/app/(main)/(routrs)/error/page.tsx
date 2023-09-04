import { ErrorPage } from "components/error/ErrorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
};
export default function Error() {
  return <ErrorPage />;
}
