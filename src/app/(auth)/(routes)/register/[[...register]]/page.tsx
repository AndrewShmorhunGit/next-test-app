"use client";

import { SignUp } from "@clerk/nextjs";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Register",
};

export default function Page() {
  return <SignUp />;
}
