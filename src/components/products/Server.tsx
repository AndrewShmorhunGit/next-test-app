import { createGrid } from "app/styles/services/styles";
import { Product } from "./Client";
import { httpProducts } from "utils/http.requests";

export const Products = async () => {
  const products = await httpProducts();
  return (
    <div
      style={{
        minHeight: "100rem",
        maxHeight: "60rem",
        paddingBottom: "2rem",
        paddingRight: "2rem",
        rowGap: "1.6rem",
        ...createGrid(1, 100),
      }}
    >
      {products.map((product) => {
        return <Product key={product.position.name} product={product} />;
      })}
    </div>
  );
};
