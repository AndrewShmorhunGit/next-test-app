/** @jsxImportSource theme-ui */
"use client";
import { setModal, useAppDispatch, useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { appShadows, absoluteCenter } from "app/styles/services/styles";
import { useClickOutside } from "hooks/useClickOutside";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { ModalDeleteProduct } from "./Server";

export function ModalContent() {
  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  const isModal = useSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );
  return (
    <div
      ref={refClickOutside}
      sx={{
        variant: "styles.box.flex.center",
        width: "80rem",
        bg: "background.main",
        cursor: "auto",
        transform: "translate(0, -5rem)",
        position: "relative",
      }}
    >
      {isModal.value === "delete" && isModal.data !== null && (
        <ModalDeleteProduct product={isModal.data} />
      )}
    </div>
  );
}

export function ModalCloseX() {
  const dispatch = useAppDispatch();
  return (
    <div
      sx={{
        position: "absolute",
        width: "3.2rem",
        height: "3.2rem",
        top: "-1.6rem",
        right: "-1.6rem",
        borderRadius: "50%",
        bg: "second",
        boxShadow: "standard",
        display: "grid",
        cursor: "pointer",
      }}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    >
      <IoMdClose
        sx={{
          ...absoluteCenter,
          opacity: 0.5,
          color: "text.main",
        }}
        size={20}
      />
    </div>
  );
}
