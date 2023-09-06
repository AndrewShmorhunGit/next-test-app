/** @jsxImportSource theme-ui */
import { RiSettings5Fill } from "react-icons/ri";
import { palette } from "app/styles/services/palette";
import { absoluteCenter, appShadows } from "app/styles/services/styles";

export function Settings() {
  return (
    <div sx={{ position: "absolute", right: "0rem", bottom: "0rem" }}>
      <div
        sx={{
          boxShadow: appShadows.settings,
          background: palette.background_second,
          width: "2.8rem",
          height: "2.8rem",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <RiSettings5Fill
          size={16}
          color={palette.main_primary_dark}
          sx={{
            ...absoluteCenter,
          }}
        />
      </div>
    </div>
  );
}
