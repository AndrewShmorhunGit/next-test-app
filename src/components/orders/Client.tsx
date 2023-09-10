/** @jsxImportSource theme-ui */
"use client";

import { setGroup, useAppDispatch, useSelector } from "app/redux";
import { BsPlus } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Box } from "theme-ui";

export function GroupInfoHeader() {
  const group = useSelector((store) => store.groups.select);
  return (
    <Box sx={{ borderBottom: "lightgrey 1px solid" }}>
      <h2 sx={{ variant: "styles.headers.title", pl: 4, pb: 3 }}>{group}</h2>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          pl: 4,
          pb: 3,
        }}
      >
        <div
          sx={{
            bg: "primary.second",
            height: "2rem",
            width: "2rem",
            borderRadius: 0,
            variant: "styles.box.flex.center",
            boxShadow: "green",
            cursor: "pointer",
          }}
        >
          <BsPlus color={"white"} size={14} />
        </div>
        <p sx={{ fontSize: 3 }}>Add product</p>
      </div>
    </Box>
  );
}

export function GroupCloseX() {
  const dispatch = useAppDispatch();
  return (
    <div
      sx={{
        variant: "styles.buttons.x",
      }}
      onClick={() => dispatch(setGroup("none"))}
    >
      <IoMdClose
        sx={{
          variant: "styles.box.absolute.center",
          color: "text.main",
          opacity: 0.6,
        }}
        size={20}
      />
    </div>
  );
}
