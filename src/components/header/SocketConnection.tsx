"use client";
import { palette } from "app/styles/services/palette";
import { useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { PiUsersBold } from "react-icons/pi";
import { useSocket } from "providers/socket.provider";

export function SocketConnection() {
  const count = useSelector((state: RootState) => state.counter.value);
  const { isConnected } = useSocket();
  return (
    <>
      <div>
        <PiUsersBold
          style={{ cursor: "pointer" }}
          size={18}
          color={isConnected ? palette.main_primary_dark : palette.error}
        />
      </div>
      <p>{count}</p>
    </>
  );
}
