import config from "config";
import { ICatProduct } from "interfaces/IProducts";

export async function httpProducts(_endpoint?: string): Promise<ICatProduct[]> {
  const response = await fetch(config.api + "/products");
  const products = await response.json();
  return products;
}
