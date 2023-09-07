/** @jsxImportSource theme-ui */
"use client";
import { useClock } from "hooks/useClock";
import { useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { BiSolidServer } from "react-icons/bi";
import { useSocket } from "providers/socket.provider";

export function SocketConnection() {
  const count = useSelector((state: RootState) => state.counter.value);
  const { isConnected } = useSocket();
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        gridColumn: 2,
        gridRow: 1,
        gap: 3,
      }}
    >
      <BiSolidServer
        size={16}
        sx={{ color: isConnected ? "primary.second" : "error" }}
      />
      <p sx={{ color: isConnected ? "primary.second" : "error" }}>
        {isConnected ? "Connected" : "Disconnected"}
      </p>
    </div>
  );
}

export function Clocks() {
  const { time } = useClock();
  return <p>{time}</p>;
}
