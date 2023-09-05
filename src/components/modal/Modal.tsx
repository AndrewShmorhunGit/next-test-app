"use client";
import React from "react";
import { palette } from "app/styles/services/palette";
import { RootState } from "app/redux/store";
import { ModalDeleteProduct } from "./Server";
import { IoMdClose } from "react-icons/io";
import { absoluteCenter, appShadows } from "app/styles/services/styles";
import { useClickOutside } from "hooks/useClickOutside";
import { setModal, useAppDispatch, useSelector } from "app/redux";

export function Modal() {
  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  const isModal = useSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );

  return (
    <div
      style={{
        boxShadow: "border-box",
        position: "fixed",
        height: "100%",
        minWidth: "100%",
        display: "flex",
        // inset: 0,
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        zIndex: 1,
        // opacity: 1,
      }}
    >
      <div
        ref={refClickOutside}
        style={{
          width: "80rem",
          background: palette.background_main,
          cursor: "auto",
          transform: "translate(0, -5rem)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isModal.value === "delete" && isModal.data !== null && (
          <ModalDeleteProduct product={isModal.data} />
        )}
      </div>
    </div>
  );
}
