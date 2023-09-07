/** @jsxImportSource theme-ui */
// import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Avatar } from "theme-ui";

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
    // {/* <UserButton afterSignOutUrl={"/login"} /> */}
    <>
      <Avatar
        src={
          "https://tse4.mm.bing.net/th?id=OIP.H4BrVLytennIKdVCJcxsIQAAAA&pid=Api&P=0&h=180"
        }
        sx={{ backgroundColor: "white" }}
      />
      <Image
        src={
          "https://tse4.mm.bing.net/th?id=OIP.H4BrVLytennIKdVCJcxsIQAAAA&pid=Api&P=0&h=180"
        }
        alt={""}
      />
    </>
    // </div>
  );
}
