import { HomePage } from "components/home/HomePage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomePage />;
}
