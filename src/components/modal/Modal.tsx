"use client";

import { palette } from "app/styles/services/palette";
import { useMedia } from "hooks/useMedia";
import React from "react";

export function Modal() {
  const { isMedia } = useMedia();

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
        }}
      ></div>
    </div>
  );
}
