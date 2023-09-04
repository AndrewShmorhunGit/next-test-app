import { flexCenter } from "app/styles/services/styles";
import { getFooterData } from "data/static.components";
import { useMedia } from "hooks/useMedia";
import React from "react";

const { footerHight, content, year } = getFooterData();

function FooterWrapper({ children }: { children: React.ReactNode }) {
  const { isMedia } = useMedia();
  return (
    <div
      style={{
        maxHeight: `${footerHight}rem`,
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <div style={{ ...flexCenter, gap: "2rem" }}>{children}</div>
      {(isMedia.big || isMedia.medium) && (
        <p style={{ fontSize: "1rem" }}> &copy; {content + " " + year}</p>
      )}
    </div>
  );
}

export { FooterWrapper };
