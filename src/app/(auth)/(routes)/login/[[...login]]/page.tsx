"use client";
import { SignIn } from "@clerk/nextjs";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return <SignIn />;
}
