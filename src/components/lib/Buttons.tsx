/** @jsxImportSource theme-ui */
"use client";

import {
  productsToggle,
  selectNav,
  setModal,
  useAppDispatch,
  useSelector,
} from "app/redux";
import Link from "next/link";
import { BsTrashFill } from "react-icons/bs";
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
      sx={{
        variant: "styles.buttons.modal",
        bg: "primary.main",
        color: "text.main",
        "&:hover": { bg: "primary.second" },
      }}
      children={"cancel"}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    />
  );
}

function ModalDeleteButton() {
  return (
    <Button
      sx={{ variant: "styles.buttons.modal" }}
      children={[<BsTrashFill size={12} sx={{ color: "error" }} />, "delete"]}
      onClick={() => console.log("del")}
    />
  );
}

export function ProductsToggleInfoButton() {
  const toggle = useSelector((store) => store.products.toggle);
  const dispatch = useAppDispatch();
  return (
    // Change button style
    <Button
      mr={2}
      variant="styles.buttons.toggle"
      onClick={() => dispatch(productsToggle())}
    >
      {toggle ? "show" : "hide"}
    </Button>
  );
}

export { ErrorButton, CloseModalButton, ModalDeleteButton };
