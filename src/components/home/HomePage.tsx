"use client";

import { Button, MainHeader } from "components/lib/Components";
import { setModal, useAppDispatch } from "app/redux";
import { UserButton } from "@clerk/nextjs";

export function HomePage() {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "16rem",
        }}
      >
        <MainHeader text={"Home 🙂"} />

        <Button
          type={"secondary"}
          content={"modal"}
          clickHandler={() => dispatch(setModal({ value: "test", data: null }))}
        />
      </div>
    </div>
  );
}
