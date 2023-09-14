"use client";
import { ErrorPage } from "components/error/ErrorPage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Error",
};
export default function Error() {
  return <ErrorPage />;
}
