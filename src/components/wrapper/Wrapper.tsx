"use client";

import { appShadows } from "app/styles/services/styles";
import { Footer } from "components/footer/Footer";
import { TopMenu } from "components/header/TopMenu";

import { NavigationMenu } from "components/nav/NavigationMenu";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "10rem 1fr",
      }}
    >
      <div style={{ gridColumn: "1/3", boxShadow: appShadows.header }}>
        <TopMenu />
      </div>
      <div style={{}}>
        <NavigationMenu />
      </div>
      <div>
        <div style={{ height: "95%" }}>{children}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5%",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
