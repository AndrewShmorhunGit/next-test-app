"use client"
import { palette } from "app/styles/services/palette";
import { MainHeader } from "components/lib/Components";
import Link from "next/link";

export function ErrorPage() {
  return (
    <div style={{ minHeight: "100%", minWidth: "100%", display: "grid" }}>
      <div style={{ alignSelf: "center" }}>
        <MainHeader text={"Ooops, something went wrong 😕"} />
      </div>
      <Link
        href={"/"}
        style={{
          padding: "2rem 4rem",
          border: `${palette.error} 0.2rem solid`,
        }}
      >
        Go home
      </Link>
    </div>
  );
}
