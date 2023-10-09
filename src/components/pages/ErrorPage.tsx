/** @jsxImportSource theme-ui */
"use client";
import { FlexBox } from "components/lib/Boxes";
import { ErrorButton } from "components/lib/Buttons";

export function ErrorPage() {
  return (
    <FlexBox
      flex={"column"}
      sx={{
        minHeight: "100%",
      }}
    >
      <h2 sx={{ variant: "styles.headers.page" }}>It Is an Error!</h2>
      <ErrorButton />
    </FlexBox>
  );
}
