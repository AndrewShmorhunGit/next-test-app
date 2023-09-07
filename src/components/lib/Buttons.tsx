/** @jsxImportSource theme-ui */
"use client";

import { selectNav, useAppDispatch } from "app/redux";
import Link from "next/link";
import { Button } from "theme-ui";

function ErrorButton() {
  const dispatch = useAppDispatch();
  return (
    <Link
      href={"/"}
      sx={{
        textDecoration: "none",
      }}
    >
      <Button
        sx={{ variant: "styles.buttons.error" }}
        children={"home"}
        onClick={() => dispatch(selectNav(null))}
      />
    </Link>
  );
}

export { ErrorButton };
