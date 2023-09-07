/** @jsxImportSource theme-ui */
"use client";
import { Spinner } from "components/lib/Spinner";

const Loading = () => {
  return (
    <div
      sx={{
        minHeight: "100%",
        variant: "styles.box.flex.center",
      }}
    >
      <Spinner size={16} />
    </div>
  );
};

export default Loading;
