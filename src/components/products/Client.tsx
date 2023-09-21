/** @jsxImportSource theme-ui */
"use client";
import { decrement, setCount, useSelector } from "app/redux";
import { ProductsAmount } from "components/incomes/Client";
import { ModalBody } from "components/modal/Server";
import { useAppDispatch } from "hooks/useAppDispatch";
import { IProduct } from "interfaces/IProducts";
import { useEffect, useState } from "react";

import { Box } from "theme-ui";
import { addProductToDb } from "utils/db/db.actions";
import { httpProducts } from "utils/http/http";

export function ProductToAdd({ prod }: { prod: IProduct }) {
  const dispatch = useAppDispatch();
  const [isProd, setProd] = useState(false);
  const addProd = () => {
    setProd(true);
    addProductToDb(prod);
    dispatch(decrement());
  };
  if (!isProd)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bg: "white",
          mb: 2,
        }}
      >
        <Box sx={{ width: "54rem" }}>
          <ModalBody product={prod} />
        </Box>
        <Box sx={{ p: 2 }}>
          <button
            sx={{ variant: "styles.buttons.standard" }}
            onClick={() => addProd()}
          >
            Add
          </button>
        </Box>
      </Box>
    );
}

export function ProductsHeader() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    httpProducts().then((data) => {
      if (data) {
        const amount = data.length;

        dispatch(setCount(amount));
      }
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12rem",
        pb: "3.2rem",
      }}
    >
      <ProductsAmount title={"Products"} amount={10 - value} />
    </Box>
  );
}
