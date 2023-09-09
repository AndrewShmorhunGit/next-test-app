/** @jsxImportSource theme-ui */
"use client";
import { ICatProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import { setModal, useAppDispatch, useSelector } from "app/redux";
import { RootState } from "app/redux/store";

export function ProductDeleteButton({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}

export function IncomeDeleteButton({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}

export function ActivePageWrapper({ children }: { children: React.ReactNode }) {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <div
      sx={{
        pt: 5,
        pl: 6,
        pr: 5,
        pb: 2,
        maxWidth: isToggle ? "calc(100vw - 20rem)" : "100vw",
      }}
    >
      {children}
    </div>
  );
}

export const ProductImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <div sx={{ alignSelf: "center" }}>
    <img
      height={24}
      width={24}
      sx={{ maxHeight: "3.2rem", borderRadius: 4 }}
      src={image}
      alt={altText}
    />
  </div>
);
