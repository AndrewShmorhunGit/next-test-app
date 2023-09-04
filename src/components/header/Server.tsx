import { palette } from "app/styles/services/palette";
import { appShadows } from "app/styles/services/styles";

export function TopMenuServerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        maxWidth: "100vw",
        boxShadow: appShadows.header,
        background: palette.background_main,
        gridColumn: "1/3",
      }}
    >
      {children}
    </div>
  );
}
