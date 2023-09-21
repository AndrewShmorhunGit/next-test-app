"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "interfaces/IProducts";

const initialState: {
  loading: boolean;
  error: string;
  products: IProduct[];
  toggle: boolean;
  isStateFilter: "all" | "new" | "used";
  isStatusFilter: "all" | "available" | "not available";
} = {
  loading: false,
  error: "",
  products: [],
  toggle: false,
  isStateFilter: "all",
  isStatusFilter: "all",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProducts: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    setProductsLocalStorage: (_state, action) => {
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    setStateFilter: (state, action: PayloadAction<"all" | "new" | "used">) => {
      state.isStateFilter = action.payload;
    },
    setStatusFilter: (
      state,
      action: PayloadAction<"all" | "available" | "not available">
    ) => {
      state.isStatusFilter = action.payload;
    },
  },
});

export const {
  setStatusFilter,
  setStateFilter,
  fetchingProducts,
  fetchProductsSuccess,
  setProductsLocalStorage,
  fetchProductsError,
} = productsSlice.actions;

export default productsSlice.reducer;
