"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: { select: string } = {
  select: "none",
};

export const groupsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      if (state.select === action.payload) {
        state.select = "none";
      }
      state.select = action.payload;
    },
  },
});

export const { setGroup } = groupsSlice.actions;

export default groupsSlice.reducer;
