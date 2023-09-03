"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: { selector: string | null; toggle: boolean } = {
  selector: null,
  toggle: true,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    selectNav: (state, action) => {
      state.selector = action.payload;
    },
    unselectNav: (state) => {
      state.selector = null;
    },
    toggleNav: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { selectNav, unselectNav, toggleNav } = navigationSlice.actions;

export default navigationSlice.reducer;
