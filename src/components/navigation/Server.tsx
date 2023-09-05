import { RiSettings5Fill } from "react-icons/ri";
import { UserButton } from "@clerk/nextjs";
import { palette } from "app/styles/services/palette";
import { absoluteCenter, appShadows } from "app/styles/services/styles";

export function UserImage() {
  return (
    <div
      style={{
        background: palette.background_third,
        overflow: "hidden",
        width: "9.6rem",
        height: "9.6rem",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(5)",
        }}
      >
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export function Settings() {
  return (
    <div style={{ position: "absolute", right: "0rem", bottom: "0rem" }}>
      <div
        style={{
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
          style={{
            ...absoluteCenter,
          }}
        />
      </div>
    </div>
  );
}
