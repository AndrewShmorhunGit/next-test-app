/** @jsxImportSource theme-ui */
"use client";
import { UserButton } from "@clerk/nextjs";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}
export function AuthUserMenu() {
  return (
    <div
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(5)",
      }}
    >
      <UserButton afterSignOutUrl={"/login"} />
    </div>
  );
}
