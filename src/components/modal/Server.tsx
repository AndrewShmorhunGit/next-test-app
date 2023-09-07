/** @jsxImportSource theme-ui */

import { palette } from "app/styles/services/palette";
import { createGrid, flexCenter } from "app/styles/services/styles";
import { ICatProduct } from "interfaces/IProducts";
import Image from "next/image";
import { CloseModalButton, ModalDeleteButton } from "components/lib/Buttons";

export function ModalBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      sx={{
        variant: "styles.box.flex.center",
        position: "fixed",
        // height: "100%",
        height: "100vh",
        minWidth: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

export function ModalDeleteProduct({ product }: { product: ICatProduct }) {
  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <ModalMessage
        message={"Are you sure that you want to delete this income?"}
      />
      <ModalBody product={product} />
      <ModalFooterWrapper>
        <CloseModalButton />
        <ModalDeleteButton />
      </ModalFooterWrapper>
    </div>
  );
}

function ModalMessage({ message }: { message: string }) {
  return (
    <div
      sx={{
        height: "8rem",
        padding: "2.4rem 3.2rem",
        borderBottom: `lightgrey`,
      }}
    >
      <h2 sx={{ color: "text", fontSize: 3 }}>{message}</h2>
    </div>
  );
}

export function ModalFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      sx={{
        height: "10rem",
        background: palette.main_primary,
        display: "flex",
        justifyContent: "flex-end",
        padding: "2.4rem",
        gap: "2rem",
      }}
    >
      {children}
    </div>
  );
}

function ModalBody({ product }: { product: ICatProduct }) {
  return (
    <div
      sx={{
        ...createGrid("4rem 6rem auto", 1),
        padding: "0.8rem 2.4rem",

        columnGap: "2.8rem",
      }}
    >
      <div sx={{ alignSelf: "center", paddingLeft: "1.6rem" }}>
        <div
          sx={{
            ...flexCenter,
            width: "0.8rem",
            height: "0.8rem",
            background: palette.main_primary,
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div sx={{ alignSelf: "center" }}>
        <Image
          sx={{ maxHeight: "3.2rem" }}
          src={product.image}
          alt={product.position.name}
        />
      </div>
      <div sx={{ alignSelf: "center", paddingLeft: "2rem" }}>
        <p
          sx={{
            textDecoration: "underline lightgrey",
            color: palette.text_dark,
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          {product.position.name}
        </p>
        <p
          sx={{
            textDecoration: "underline lightgrey",
            color: "grey",
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          {product.position.code}
        </p>
      </div>
    </div>
  );
}
