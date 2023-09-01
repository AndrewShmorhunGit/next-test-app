"use client";
import React from "react";

export function Clock() {
  let time = new Date().toLocaleTimeString();
  const [isTime, setTime] = React.useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return { time: isTime };
}
