"use client";
import { RootState } from "app/redux/store";
import { Footer } from "components/footer/Footer";
import { Modal } from "components/modal/Modal";
import React from "react";
import { useSelector } from "app/redux";

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
  const isModal = useSelector((state: RootState) => state.modal.value);
  return (
    <div>
      {isModal !== "none" && <Modal />}
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          minHeight: "90%",
        }}
      >
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
