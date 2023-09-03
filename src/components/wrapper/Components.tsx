"use client";
import { Footer } from "components/footer/Footer";
import { Modal } from "components/modal/Modal";
import React from "react";

export function LayoutSubWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 100fr",
        gridTemplateRows: "10rem 100fr",
      }}
    >
      {children}
    </div>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Modal /> */}
      <div style={{ height: "90%", overflow: "hidden", background: "red" }}>
        {children}
      </div>
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
