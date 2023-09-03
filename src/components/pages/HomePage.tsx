"use client";

import { RootState } from "app/redux/store";
import { MainHeader } from "components/lib/Components";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { setModal } from "app/redux/features/modal/modal.slice";
import { palette } from "app/styles/services/palette";
import { Button } from "components/modal/Components";

export function HomePage() {
  const isModal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "16rem",
        }}
      >
        <MainHeader text={"Home 🙂"} />
        <Button
          type={"secondary"}
          content={"modal"}
          clickHandler={() => dispatch(setModal("test"))}
        />
      </div>
    </div>
  );
}
