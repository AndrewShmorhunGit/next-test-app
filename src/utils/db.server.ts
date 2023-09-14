import { ICatProduct, IResponseProduct } from "interfaces/IProducts";
import db from "./db";
import { transformDbProducts } from "./functions";

export async function getDbProducts() {
  const response: IResponseProduct[] = await db.product.findMany({});
  const products: ICatProduct[] = transformDbProducts(response);
  return products;
}
