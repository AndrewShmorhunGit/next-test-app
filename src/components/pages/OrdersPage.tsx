"use client";

import { useMedia } from "hooks/useMedia";

export function OrdersPage() {
  const { isMedia, setMedia } = useMedia();
  return (
    <div style={{ background: setMedia("inherit", "green", "blue", "yellow") }}>
      <h1>Order Page</h1>
    </div>
  );
}
