import { IProduct, IProductsResponseData } from "interfaces/IProducts";
import { config } from "config/index";
import { transformFetchedProducts } from "../functions";

export async function httpProducts(): Promise<IProduct[] | void> {
  try {
    const response = await fetch(config.api.products);
    const products: IProductsResponseData = await response.json();
    return transformFetchedProducts(products);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function httpExchange(): Promise<number | void> {
  try {
    const res: any = await fetch(config.api.exchange);
    const data = await res.json();
    const course: number = data.rates["UAH"];
    return course;
  } catch (error) {
    console.error("Error:", error);
  }
}
