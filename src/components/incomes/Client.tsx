/** @jsxImportSource theme-ui */
"use client";
import { IProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import {
  setModal,
  setStateFilter,
  setStatusFilter,
  useAppDispatch,
  useSelector,
} from "app/redux";
import { RootState } from "app/redux/store";
import { Box } from "theme-ui";
import { checkState, checkStatus, filterProducts } from "utils/filters";
import { Product } from "./Server";
import { Select } from "components/lib/Server";
import { httpGetAllProducts } from "utils/http/http";
import { useEffect, useState } from "react";

export function ProductDeleteButton({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </Box>
  );
}

export function IncomeDeleteButton({
  product,
}: {
  product: IProduct | IProduct[];
}) {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </Box>
  );
}

export function ActivePageWrapper({ children }: { children: React.ReactNode }) {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <Box
      sx={{
        pt: 5,
        pl: 6,
        pr: 5,
        pb: 2,
        maxWidth: isToggle ? "calc(100vw - 20rem)" : "100vw",
      }}
    >
      {children}
    </Box>
  );
}

export const ProductImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <Box sx={{ alignSelf: "center" }}>
    <img
      height={24}
      width={24}
      sx={{ maxHeight: "3.2rem", borderRadius: 4 }}
      src={image}
      alt={altText}
    />
  </Box>
);

export function ProductsAmount({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) {
  return (
    <h2 sx={{ variant: "styles.headers.title" }}>
      {title} / {amount}
    </h2>
  );
}

export function ProductsWithFilter({
  rate,
  products,
}: {
  rate: number;
  products: IProduct[];
}) {
  const { isStateFilter: stateFilter, isStatusFilter: statusFilter } =
    useSelector((store) => store.products);

  return filterProducts(stateFilter, statusFilter, products)?.map(
    (product: IProduct) => {
      return (
        <Product
          key={product.position.name + product.id}
          product={product}
          rate={rate || 38}
        />
      );
    }
  );
}

export function StateSelect() {
  const { isStateFilter: isStateOption } = useSelector(
    (store) => store.products
  );
  const dispatch = useAppDispatch();
  return (
    <Select
      label={"state"}
      options={["all", "new", "used"]}
      value={isStateOption}
      onChange={(e) => dispatch(setStateFilter(checkState(e.target.value)))}
    />
  );
}

export function StatusSelect() {
  const { isStatusFilter: isStatusOption } = useSelector(
    (store) => store.products
  );
  const dispatch = useAppDispatch();
  return (
    <Select
      label={"status"}
      options={["all", "available", "not available"]}
      value={isStatusOption}
      onChange={(e) => dispatch(setStatusFilter(checkStatus(e.target.value)))}
    />
  );
}
