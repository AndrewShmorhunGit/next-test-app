"use client";
import { palette } from "app/styles/services/palette";

export function Button({
  type,
  content,
  clickHandler,
}: {
  type: "primary" | "secondary" | "modal" | "error";
  content: string | React.ReactNode;
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
      color: palette.white,
    },
  };

  return (
    <button
      className="hover"
      style={{
        border: "none",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: "1.6rem",
        padding: "2rem 4rem",
        borderRadius: "10rem",
        cursor: "pointer",
        letterSpacing: "0.1rem",
        ...variants[type],
      }}
      onClick={() =>
        clickHandler
          ? clickHandler()
          : typeof content === "string" &&
            console.log(`button "${content}" clicked`)
      }
    >
      {content}
    </button>
  );
}
