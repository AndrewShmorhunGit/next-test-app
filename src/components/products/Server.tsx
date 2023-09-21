import { Box } from "theme-ui";
import { ProductToAdd } from "../incomes/Client";
import { IProduct } from "interfaces/IProducts";
import { getProductsToAdd } from "data/products";

export async function ProductsToAdd() {
  const productsToAdd = await getProductsToAdd();
  return (
    <Box sx={{ bg: "background.first" }}>
      {productsToAdd.map((prod: IProduct) => (
        <ProductToAdd prod={prod} key={prod.id} />
      ))}
    </Box>
  );
}
