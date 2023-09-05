import config from "config";
import { ICatProduct } from "interfaces/IProducts";

export async function httpProducts(
  endpoint?: string
): Promise<ICatProduct[] | void> {
  try {
    const response = await fetch(config.api + "/products" + endpoint);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
  }
}
