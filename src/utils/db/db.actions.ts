"use server";

import { IProduct } from "interfaces/IProducts";
import { addProduct } from "./db.server";

export const addProductToDb = async (product: IProduct) => {
  const prod = await addProduct(product);
};
