"use client";
import React, { useEffect } from "react";

export function useClock() {
  const getTime = () => new Date().toLocaleTimeString().slice(0, -3);
  const time = getTime();
  const [isTime, setTime] = React.useState(time);

  const updateTime = () => {
    let time = getTime();
    setTime(time);
  };
  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return { time: isTime };
}
