"use client";

import { RootState } from "app/redux/store";
import { MainHeader } from "components/lib/Components";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { setModal } from "app/redux/features/modal/modal.slice";
import { palette } from "app/styles/services/palette";

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
        <button
          style={{
            fontSize: "2rem",
            padding: "2rem 2,4rem",
            display: "block",
            border: `${palette.main_primary_dark} 0.2rem solid`,
            cursor: "pointer",
          }}
          onClick={() => dispatch(setModal("test"))}
        >
          Open Modal
        </button>
      </div>
    </div>
  );
}
