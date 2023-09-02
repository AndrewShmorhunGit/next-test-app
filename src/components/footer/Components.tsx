import { flexCenter } from "app/styles/services/styles";
import { getFooterData } from "data/static.components";
import Link from "next/link";
import React from "react";

const { links, footerHight, content, year } = getFooterData();

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxHeight: `${footerHight}rem`,
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <div style={{ ...flexCenter, gap: "2rem" }}>{children}</div>
      <p style={{ fontSize: "1rem" }}>{content + " " + year}</p>
    </div>
  );
}

export function FooterLinks() {
  return (
    <>
      {links.map(({ icon, link }) => {
        return (
          <Link key={link} href={link}>
            <div>{icon}</div>
          </Link>
        );
      })}
    </>
  );
}
