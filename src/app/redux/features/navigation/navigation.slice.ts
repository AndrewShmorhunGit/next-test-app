"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: { selector: string | null } = {
  selector: null,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    selectNav: (state, action) => {
      state.selector = action.payload;
    },
    unselectNav: (state, action) => {
      state.selector = null;
    },
  },
});

export const { selectNav, unselectNav } = navigationSlice.actions;

export default navigationSlice.reducer;
