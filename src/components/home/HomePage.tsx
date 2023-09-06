/** @jsxImportSource theme-ui */
"use client";
import { MainHeader } from "components/lib/Components";
import { Button } from "theme-ui";

export function HomePage() {
  return (
    <div
      sx={{
        minHeight: "100%",
        display: "grid",
      }}
    >
      <div
        sx={{
          alignSelf: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "16rem",
        }}
      >
        <MainHeader text={"Home 🙂"} />
        <Button />
      </div>
    </div>
  );
}
