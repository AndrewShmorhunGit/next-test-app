/** @jsxImportSource theme-ui */
import { RiSettings5Fill } from "react-icons/ri";
import { absoluteCenter } from "app/styles/services/styles";
import { AuthUserMenu } from "./AuthUserButton";

export function Settings() {
  return (
    <div sx={{ position: "absolute", right: "0rem", bottom: "0rem" }}>
      <div
        sx={{
          boxShadow: "grey",
          bg: "background.main",
          width: "2.8rem",
          height: "2.8rem",
          borderRadius: 0,
          position: "relative",
        }}
      >
        <RiSettings5Fill
          size={16}
          sx={{
            ...absoluteCenter,
            color: "primary.second",
          }}
        />
      </div>
    </div>
  );
}

export function UserImage() {
  return (
    <div
      sx={{
        bg: "background.third",
        overflow: "hidden",
        width: "9.6rem",
        height: "9.6rem",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <div
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          //  scale(5)
        }}
      >
        <AuthUserMenu />
      </div>
    </div>
  );
}
