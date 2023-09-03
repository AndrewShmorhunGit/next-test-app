"use client";

import { createGrid } from "app/styles/services/styles";
import { Product } from "components/products/Components";
import { catProducts } from "data/products";
// import { useLocalStorageState } from "hooks/useLocalStorageState";

export default function ProductsPage() {
  // const [isState, setState] = useLocalStorageState({});

  const products = catProducts;

  return (
    <div
      style={{
        padding: "4rem 8rem",
        maxWidth: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6rem",
          paddingBottom: "6rem",
        }}
      >
        <h1>Products / {products.length} </h1>
        <div>
          <label htmlFor="">
            status
            <select></select>
          </label>
        </div>
      </div>
      <div
        style={{
          padding: "2rem",

          overflowX: "scroll",
          rowGap: "1.6rem",
          ...createGrid(1, 100),
        }}
      >
        {products.map((product) => {
          return <Product key={product.position.name} product={product} />;
        })}
      </div>
    </div>
  );
}
