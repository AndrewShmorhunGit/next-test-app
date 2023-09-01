"use client";
import { headerHight } from "components/header/TopMenu";
import { SettingsLogo } from "components/lib/Logos";
import { appShadows, flexCenter } from "app/styles/services/styles";
import { palette } from "app/styles/services/palette";
import styles from "app/styles/modules/main.module.css";
import Link from "next/link";

export function NavigationMenu() {
  const navigation = [
    { name: "income", link: "products", active: false },
    { name: "groups", link: "orders", active: true },
    { name: "products", link: "", active: false },
    { name: "users", link: "", active: false },
    { name: "settings", link: "", active: false },
  ];

  return (
    <div
      id="navigation"
      style={{
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        // height: "minMax(100vh, 160rem)",
        // maxHeight: "180rem",
        display: "block",
        minHeight:
          window.innerHeight >= 400
            ? `calc(100vh - ${headerHight}rem)`
            : "100%",
        boxShadow: appShadows.header,
        paddingBottom: "8rem",
      }}
    >
      <div style={{ padding: "8rem 4rem", ...flexCenter }}>
        <div style={{ position: "relative" }}>
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
        </div>
      </div>
      <div style={flexCenter}>
        <div style={{ gap: "2rem", display: "flex", flexDirection: "column" }}>
          {navigation.map(({ name, link, active }) => {
            return (
              <Link
                key={name}
                style={{
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
      </div>
    </div>
  );
}
