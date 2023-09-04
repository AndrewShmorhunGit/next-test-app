"use client";
import { useAppDispatch, selectNav } from "app/redux";
import { flexCenter } from "app/styles/services/styles";
import { MainHeader } from "components/lib/Components";
import { Button } from "components/lib/Components";

import Link from "next/link";

export function ErrorPage() {
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
        <MainHeader text={"It Is an Error 😪"} />
        <Link href={"/"} style={{ ...flexCenter, textDecoration: "none" }}>
          <Button
            type={"error"}
            content={"home"}
            clickHandler={() => dispatch(selectNav(null))}
          />
        </Link>
      </div>
    </div>
  );
}
