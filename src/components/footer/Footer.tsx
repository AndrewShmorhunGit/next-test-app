"use client";
import { flexCenter } from "app/styles/services/styles";
import Link from "next/link";

export const footerHight = 5.2;
export function Footer() {
  return (
    <div style={{ maxHeight: `${footerHight}rem`, ...flexCenter }}>
      <div>
        <Link href="">Git hub</Link>
        <Link href="">Lined In</Link>
        <Link href="">Repository</Link>
        <Link href="">SSH Key</Link>
      </div>
      <p>
        Developed by Andrew Shmorhun for testing porpoises. All rights reserved
      </p>
    </div>
  );
}
