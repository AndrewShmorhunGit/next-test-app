"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.slice";
import modalReducer from "./features/modal/modal.slice";
import navigationReducer from "./features/navigation/navigation.slice";
import productsReducer from "./features/products/products.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
  navigation: navigationReducer,
  products: productsReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    // [api.reducerPath]: api.reducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
