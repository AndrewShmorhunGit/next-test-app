"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: { toggle: boolean } = {
  toggle: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { productsToggle } = productsSlice.actions;

export default productsSlice.reducer;
