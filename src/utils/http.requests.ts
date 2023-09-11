import config from "config";
import { ICatProduct } from "interfaces/IProducts";

export async function httpProducts(
  endpoint?: string
): Promise<ICatProduct[] | void> {
  try {
    const response = await fetch(config.api.products + "/products" + endpoint);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function httpExchange(): Promise<number | void> {
  try {
    const res: any = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    console.log("data fetched!");
    const data = await res.json();
    const course: number = data.rates["UAH"];
    return course;
  } catch (error) {
    console.error("Error:", error);
  }
}
