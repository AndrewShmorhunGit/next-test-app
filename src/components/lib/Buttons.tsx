/** @jsxImportSource theme-ui */
"use client";

import { selectNav, setModal, useAppDispatch, useSelector } from "app/redux";
import { IProduct } from "interfaces/IProducts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";

import { Button } from "theme-ui";
import { httpDeleteProduct } from "utils/http/http";

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
  const dispatch = useAppDispatch();
  const data = useSelector((store) => store.modal.data);
  const [isState, setState] = useState<IProduct | IProduct[] | null>(null);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        console.log(
          "It is an array of products! Need to write special function for this request!"
        );
      } else {
        data && httpDeleteProduct(data.id);
      }
    }
  }, [isState]);

  return (
    <Button
      sx={{ variant: "styles.buttons.modal" }}
      children={[<BsTrashFill size={12} sx={{ color: "error" }} />, "delete"]}
      onClick={() => {
        setState(data);
        dispatch(setModal({ value: "none", data: null }));
      }}
    />
  );
}

export { ErrorButton, CloseModalButton, ModalDeleteButton };
