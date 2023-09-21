"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "interfaces/IProducts";

const initialState: {
  value: string;
  data: IProduct | IProduct[] | null;
} = {
  value: "none",
  data: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (
      state,
      action: PayloadAction<{
        value: string;
        data: IProduct | IProduct[] | null;
      }>
    ) => {
      state.value = action.payload.value;
      state.data = action.payload.data;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
