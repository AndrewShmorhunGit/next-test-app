import { httpGetAllProducts } from "utils/http/http";
import { productsList } from "./income";

export const getProductsToAdd = async () => {
  const existedProducts = (await httpGetAllProducts()) || [];
  const existedProdNameList = existedProducts.map(
    ({ position: { name } }) => name
  );
  const productsToAdd = productsList.filter((product) => {
    const isExist = existedProdNameList.reduce((total, existedName) => {
      if (existedName === product.position.name) total = true;
      return total;
    }, false);
    return !isExist && product;
  });
  return productsToAdd;
};
