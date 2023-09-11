/** @jsxImportSource theme-ui */
import { getFooterData } from "data/static.components";
import { useMedia } from "hooks/useMedia";

const { content, year } = getFooterData();

export function FooterText() {
  const { isMedia } = useMedia();
  return (
    <>
      {(isMedia.big || isMedia.medium) && (
        <p sx={{ fontSize: "1rem" }}> &copy; {content + " " + year}</p>
      )}
    </>
  );
}
