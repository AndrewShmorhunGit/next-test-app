"use client";
import { setModal, useAppDispatch } from "app/redux";
import { palette } from "app/styles/services/palette";
import { appShadows, absoluteCenter } from "app/styles/services/styles";
import { Button } from "components/lib/Components";
import { IoMdClose } from "react-icons/io";

export function CloseModalButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      type={"secondary"}
      content={"cancel"}
      clickHandler={() => dispatch(setModal({ value: "none", data: null }))}
    />
  );
}

export function ModalCloseX() {
  const dispatch = useAppDispatch();
  return (
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
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    >
      <IoMdClose
        style={{
          ...absoluteCenter,
          opacity: 0.5,
        }}
        color={palette.text_dark}
        size={20}
      />
    </div>
  );
}
