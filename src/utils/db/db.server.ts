import { IProduct, IResponseProduct } from "interfaces/IProducts";
import db from "./db";
import {
  transformDbProducts,
  transformProductToDbProduct,
} from "utils/functions";
import { revalidatePath } from "next/cache";

export async function getDbProducts(): Promise<IProduct[]> {
  const response: IResponseProduct[] = await db.product.findMany({});
  const products: IProduct[] = transformDbProducts(response);
  return products;
}

export async function addDbProduct(product: IProduct): Promise<void> {
  await db.product.create(transformProductToDbProduct(product));
  revalidatePath("/products");
}

export async function deleteDbProduct(id: string): Promise<void> {
  await db.product.delete({ where: { id } });
}
