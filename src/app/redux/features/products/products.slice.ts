"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  toggle: boolean;
  isStateFilter: "all" | "new" | "used";
  isStatusFilter: "all" | "available" | "not available";
} = {
  toggle: false,
  isStateFilter: "all",
  isStatusFilter: "all",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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

export const { setStatusFilter, setStateFilter } = productsSlice.actions;

export default productsSlice.reducer;
