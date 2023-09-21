/** @jsxImportSource theme-ui */

import { palette } from "app/styles/services/palette";
import { createGrid, flexCenter } from "app/styles/services/styles";
import { IProduct } from "interfaces/IProducts";
import { CloseModalButton, ModalDeleteButton } from "components/lib/Buttons";
import { ModalCloseX } from "./Client";
import { StatusIndicator } from "components/incomes/Server";
import { Box } from "theme-ui";

export function ModalBackground({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        variant: "styles.box.flex.center",
        position: "fixed",
        height: "100%",
        minWidth: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        zIndex: 99,
      }}
    >
      {children}
    </Box>
  );
}

export function ModalDeleteProduct({
  product,
}: {
  product: IProduct | IProduct[];
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ModalMessage
        message={"Are you sure that you want to delete this income?"}
      />
      <ModalBody product={product} />
      <ModalCloseX />
      <ModalFooterWrapper>
        <CloseModalButton />
        <ModalDeleteButton />
      </ModalFooterWrapper>
    </Box>
  );
}

function ModalMessage({ message }: { message: string }) {
  return (
    <Box
      sx={{
        height: "8rem",
        padding: "2.4rem 3.2rem",
        borderBottom: `lightgrey`,
      }}
    >
      <h2 sx={{ color: "text", fontSize: 3 }}>{message}</h2>
    </Box>
  );
}

export function ModalFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        height: "10rem",
        background: palette.main_primary,
        display: "flex",
        justifyContent: "flex-end",
        p: "2.4rem",
        gap: "2rem",
      }}
    >
      {children}
    </Box>
  );
}

export function ModalBody({ product }: { product: IProduct | IProduct[] }) {
  return (
    <>
      {Array.isArray(product) ? (
        product.map((prod) => <ModalBody product={prod} />)
      ) : (
        <Box
          sx={{
            p: "1.6rem 2.4rem",
            columnGap: "2.8rem",
            borderBottom: "1px lightgrey solid",
            ...createGrid("4rem 6rem auto", 1),
          }}
        >
          <StatusIndicator status={product.status} />
          <Box sx={{ variant: "styles.box.flex.center" }}>
            <img
              sx={{ maxHeight: "3.2rem" }}
              src={product.image}
              alt={product.position.name}
            />
          </Box>
          <Box sx={{ alignSelf: "center", paddingLeft: "2rem" }}>
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
          </Box>
        </Box>
      )}
    </>
  );
}
