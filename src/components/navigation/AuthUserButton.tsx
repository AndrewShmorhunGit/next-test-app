/** @jsxImportSource theme-ui */
// import { UserButton } from "@clerk/nextjs";
import user from "data/content/images/navigation/user.jpg";

import Image from "next/image";
import { Box } from "theme-ui";

export function AuthUserMenu() {
  return (
    // <div
    //   sx={{
    //     position: "absolute",
    //     left: "50%",
    //     top: "50%",
    //     transform: "translate(-50%, -50%) scale(5)",
    //   }}
    // >
    // {/* <UserButton afterSignOutUrl=
    // </div>

    <Image width={96} height={96} src={user} alt={"avatar"} />
  );
}
