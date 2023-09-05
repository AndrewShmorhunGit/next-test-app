import { getFooterData } from "data/static.components";
import { useMedia } from "hooks/useMedia";
import React from "react";

const { content, year } = getFooterData();

export function FooterText() {
  const { isMedia } = useMedia();
  return (
    <>
      {(isMedia.big || isMedia.medium) && (
        <p style={{ fontSize: "1rem" }}> &copy; {content + " " + year}</p>
      )}
    </>
  );
}
