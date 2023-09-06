/** @jsxImportSource theme-ui */
"use client";
import { palette } from "app/styles/services/palette";
import { useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { BiSolidServer } from "react-icons/bi";
import { useSocket } from "providers/socket.provider";

export function SocketConnection() {
  const count = useSelector((state: RootState) => state.counter.value);
  const { isConnected } = useSocket();
  return (
    <>
      <div>
        <BiSolidServer
          style={{ cursor: "pointer" }}
          size={16}
          color={isConnected ? palette.main_primary_dark : palette.error}
        />
      </div>
      <p
        sx={{ color: isConnected ? palette.main_primary_dark : palette.error }}
      >
        {isConnected ? "Connected" : "Disconnected"}
      </p>
    </>
  );
}
