"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ICounter {
  value: number;
}

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value += 1;
    },
    setCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = counterSlice.actions;

export default counterSlice.reducer;
