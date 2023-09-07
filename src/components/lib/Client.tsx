/** @jsxImportSource theme-ui */
"use client";
import { palette } from "app/styles/services/palette";

export function Button({
  type,
  content,
  clickHandler,
}: {
  type: "primary" | "secondary" | "modal" | "error";
  content: string | React.ReactNode[];
  clickHandler?: Function;
}) {
  const variants = {
    primary: { background: palette.background_main, color: palette.error },
    secondary: {
      background: palette.main_primary,
      color: palette.white,
    },
    modal: {
      background: palette.background_main,
      color: palette.error,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.2rem",
    },
    error: {
      background: palette.error,
      color: "white",
    },
  };

  return (
    <button
      className="hover"
      sx={{
        variant: "styles.buttons.standard",
        ...variants[type],
      }}
      onClick={() =>
        clickHandler
          ? clickHandler()
          : typeof content === "string" &&
            console.log(`button "${content}" clicked`)
      }
    >
      {typeof content === "string"
        ? content
        : content.map((el, index) => {
            return <div key={index}>{el}</div>;
          })}
    </button>
  );
}
