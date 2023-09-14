import {
  ICatProduct,
  IProductsResponseData,
  IResponseProduct,
} from "interfaces/IProducts";

export function transformFetchedProducts(
  response: IProductsResponseData
): ICatProduct[] {
  const data = response.data;
  const products = data.map((prod: IResponseProduct) => {
    return {
      id: prod.id,
      image: prod.image,
      position: { name: prod.name, code: prod.code },
      status: prod.status,
      date: {
        from: prod.from,
        to: prod.to,
      },
      state: {
        new: prod.new,
      },
      price: {
        usd: +prod.price,
      },
      group: prod.group,
      income: prod.income,
      supplier: prod.supplier,
      guaranty: prod.guaranty || "",
    };
  });
  return products;
}
