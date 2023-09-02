import { Footer } from "components/footer/Footer";
import React from "react";

export function LayoutSubWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "10rem 1fr",
      }}
    >
      {children}
    </div>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ height: "90%" }}>{children}</div>
      <FooterExtraWrapper>
        <Footer />
      </FooterExtraWrapper>
    </div>
  );
}

export function FooterExtraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10%",
      }}
    >
      {children}
    </div>
  );
}
