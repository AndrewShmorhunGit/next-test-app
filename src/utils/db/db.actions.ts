"use server";

import { IProduct } from "interfaces/IProducts";
import { addDbProduct } from "./db.server";

export const addProductToDb = async (product: IProduct) => {
  const prod = await addDbProduct(product);
};
