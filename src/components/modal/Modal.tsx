"use client";

import React from "react";
import { palette } from "app/styles/services/palette";
import { RootState } from "app/redux/store";
import { ModalTestContent } from "./Components";
import { GrFormClose } from "react-icons/Gr";
import { absoluteCenter, appShadows } from "app/styles/services/styles";
import { useClickOutside } from "hooks/useClickOutside";
import { setModal, useAppDispatch, useSelector } from "app/redux";

export function Modal() {
  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  const isModal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () => dispatch(setModal("none")));
  return (
    <div
      style={{
        boxShadow: "border-box",
        position: "fixed",
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        zIndex: 1,
        opacity: 1,
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
        {isModal === "test" && <ModalTestContent />}

        <div
          style={{
            position: "absolute",
            width: "3.2rem",
            height: "3.2rem",
            top: "-1.6rem",
            right: "-1.6rem",
            borderRadius: "50%",
            background: palette.background_second,
            boxShadow: appShadows.header,
            display: "grid",
            cursor: "pointer",
          }}
          onClick={() => dispatch(setModal("none"))}
        >
          <GrFormClose
            style={{
              ...absoluteCenter,
              opacity: 0.5,
            }}
            color={palette.text_dark}
            size={24}
          />
        </div>
      </div>
    </div>
  );
}
