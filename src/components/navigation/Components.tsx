"use client";
import { palette } from "app/styles/services/palette";
import { appShadows, flexCenter } from "app/styles/services/styles";
import { SettingsLogo } from "components/lib/Logos";
import { getNavigationData } from "data/static.components";

import Link from "next/link";
import React from "react";

const { navigationData: navigation } = getNavigationData();

export function MenuWrapper({ children }: { children: React.ReactNode }) {
  const [isWindowHeight, setWindowHeight] = React.useState(500);

  React.useEffect(() => {
    setWindowHeight(global.innerHeight);
  }, [global.innerHeight]);

  return (
    <div
      id="navigation"
      style={{
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        display: "block",
        minHeight: isWindowHeight >= 400 ? `calc(100vh - 10rem)` : "100%",
        boxShadow: appShadows.header,
        paddingBottom: "8rem",
      }}
    >
      {children}
    </div>
  );
}

export function User() {
  return (
    <div style={{ padding: "8rem 4rem", ...flexCenter }}>
      <div style={{ position: "relative" }}>
        <UserImage />
        <Settings />
      </div>
    </div>
  );
}

export function UserImage() {
  return (
    <div
      style={{
        background: palette.background_third,
        overflow: "hidden",
        width: "12rem",
        height: "12rem",
        borderRadius: "50%",
      }}
    >
      <img
        style={{ width: "12rem", height: "12rem" }}
        src={
          "https://res.cloudinary.com/natalie-cakes/image/upload/v1693496671/dzenCode/user_ajakc7.jpg"
        }
      />
    </div>
  );
}

export function Settings() {
  return (
    <div
      style={{
        boxShadow: appShadows.settings,
        background: palette.background_second,
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        position: "absolute",
        right: "0rem",
        bottom: "0rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SettingsLogo height={20} width={20} fill={palette.text_dark} />
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.6rem",
      }}
    >
      {navigation.map(({ name, link, active }) => {
        return (
          <Link
            style={{
              display: "block",
              textDecoration: "none",
              padding: "0 0.4rem",
              border: "none",
              background: "transparent",
              color: palette.text_dark,
              fontSize: "1.6rem",
              fontWeight: "600",
              textAlign: "center",
              cursor: "pointer",
              textTransform: "uppercase",
              borderBottom: active
                ? `solid 0.4rem ${palette.main_primary_dark}`
                : "none",
            }}
            href={`/${link}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
