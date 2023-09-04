import config from "config";
import { ICatProduct } from "interfaces/IProducts";

export async function httpProducts(
  endpoint?: string
): Promise<ICatProduct[] | string> {
  try {
    const response = await fetch(config.api + "/products" + endpoint);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
    return "Bad product request!";
  }
}
