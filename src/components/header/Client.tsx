/** @jsxImportSource theme-ui */
"use client";
import { useClock } from "hooks/useClock";

export function Clocks() {
  const { time } = useClock();
  return <p>{time}</p>;
}
