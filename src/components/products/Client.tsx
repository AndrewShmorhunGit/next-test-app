/** @jsxImportSource theme-ui */
"use client";
import { palette } from "app/styles/services/palette";
import { ICatProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import { setModal, useAppDispatch, useSelector } from "app/redux";
import { RootState } from "app/redux/store";

export function DeleteProductButton({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        color={palette.text_dark}
        sx={{ cursor: "pointer" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}

export function ProductsPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <div
      sx={{
        p: "2rem 3.2rem",
        maxWidth: isToggle ? "calc(100vw - 20rem)" : "100vw",
        bg: ["inherit", "green", "blue", "yellow"],
      }}
    >
      {children}
    </div>
  );
}
