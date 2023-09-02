"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.slice";

// export const store = configureStore({
//   reducer: counterReducer,
// });

export const store = configureStore({
  reducer: { counterReducer },
  devTools: process.env.NODE_ENV !== "production",
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
