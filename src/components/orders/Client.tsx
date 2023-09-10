/** @jsxImportSource theme-ui */
"use client";

import { useSelector } from "app/redux";
import { BsPlus } from "react-icons/bs";

export function GroupInfoHeader() {
  const group = useSelector((store) => store.groups.select);
  return (
    <div>
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
    </div>
  );
}
