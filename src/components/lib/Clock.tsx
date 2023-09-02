"use client";
import React, { useEffect } from "react";

export function Clock() {
  // let time = new Date().toLocaleTimeString().slice(0, -3);
  const [isTime, setTime] = React.useState("");

  const updateTime = () => {
    let time = new Date().toLocaleTimeString().slice(0, -3);
    setTime(time);
  };
  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return { time: isTime };
}
