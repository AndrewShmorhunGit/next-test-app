"use client";

import React from "react";
import { palette } from "app/styles/services/palette";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { setModal } from "app/redux/features/modal/modal.slice";
import { RootState } from "app/redux/store";
import { ModalTestContent } from "./Components";

import { GrFormClose } from "react-icons/Gr";

import { absoluteCenter, appShadows } from "app/styles/services/styles";
// import { useMedia } from "hooks/useMedia";

export function Modal() {
  // const { isMedia } = useMedia();
  const isModal = useSelector((state: RootState) => state.modal.value);
  useAppDispatch();
  const dispatch = useAppDispatch();
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
        style={{
          width: "80rem",
          height: "32rem",
          background: palette.background_main,
          cursor: "auto",
          transform: "translate(0, -5rem)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isModal === "test" && <ModalTestContent />}
        <div>
          <h2>Operation block</h2>
        </div>
        <div>
          <h2>Position block</h2>
        </div>
        <div>
          <h2>Action block</h2>
        </div>
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
