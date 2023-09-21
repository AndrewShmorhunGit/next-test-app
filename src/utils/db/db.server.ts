import { IProduct, IResponseProduct } from "interfaces/IProducts";
import db from "./db";
import {
  transformDbProducts,
  transformProductToDbProduct,
} from "utils/functions";
import { revalidatePath } from "next/cache";

export async function getDbProducts() {
  const response: IResponseProduct[] = await db.product.findMany({});
  const products: IProduct[] = transformDbProducts(response);
  return products;
}

export async function addProduct(product: IProduct) {
  const prod = await db.product.create(transformProductToDbProduct(product));
  revalidatePath("/products");
}
