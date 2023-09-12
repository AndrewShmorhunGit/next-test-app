/** @jsxImportSource theme-ui */
import { getFooterData } from "data/static.components";
import { useMedia } from "hooks/useMedia";

export function FooterText() {
  const { content, year } = getFooterData();
  const { isMedia } = useMedia();
  return (
    <>
      {(isMedia.big || isMedia.medium) && (
        <p sx={{ fontSize: "1rem" }}> &copy; {content + " " + year}</p>
      )}
    </>
  );
}
