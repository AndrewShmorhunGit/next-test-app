import { Box } from "theme-ui";
import { catProducts } from "data/income";
import { ProductToAdd } from "./Client";
import { ICatProduct } from "interfaces/IProducts";
import { httpProducts } from "utils/http.requests";

export async function ProductsToAdd() {
  const existedProducts = (await httpProducts()) || [];
  const existedProdNameList = existedProducts.map(
    ({ position: { name } }) => name
  );
  const productsToAdd = catProducts.filter((product) => {
    const isExist = existedProdNameList.reduce((total, existedName) => {
      if (existedName === product.position.name) total = true;
      return total;
    }, false);
    return !isExist && product;
  });

  return (
    <Box sx={{ bg: "background.first" }}>
      {productsToAdd.map((prod: ICatProduct) => (
        <ProductToAdd prod={prod} key={prod.id} />
      ))}
    </Box>
  );
}
