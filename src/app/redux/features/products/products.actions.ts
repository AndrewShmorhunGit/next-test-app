"use client";

import {
  fetchProductsError,
  fetchProductsSuccess,
  fetchingProducts,
  setProductsLocalStorage,
} from "app/redux";
import { AppDispatch } from "app/redux/store";
import { httpProducts } from "utils/http/http";

export const fetchProductsAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingProducts());
      const products = await httpProducts();
      dispatch(fetchProductsSuccess(products || []));
      dispatch(setProductsLocalStorage(products));
    } catch (error) {
      dispatch(fetchProductsError(error as Error));
    }
  };
};
