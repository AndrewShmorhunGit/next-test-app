/** @jsxImportSource theme-ui */
"use client";

import { selectNav, setModal, useAppDispatch } from "app/redux";
import Link from "next/link";
import { GiConfirmed } from "react-icons/gi";
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

function CloseModalButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      sx={{ variant: "styles.buttons.modal" }}
      children={"cancel"}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    />
  );
}

function ModalDeleteButton() {
  return (
    <Button
      sx={{ variant: "styles.buttons.modal" }}
      children={[<GiConfirmed size={12} sx={{ color: "error" }} />, "delete"]}
      onClick={() => console.log("del")}
    />
  );
}

export { ErrorButton, CloseModalButton, ModalDeleteButton };
