"use client";

import { useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { createGrid } from "app/styles/services/styles";
import { Product } from "components/products/Components";
import { catProducts } from "data/products";
import { useMedia } from "hooks/useMedia";
// import { useLocalStorageState } from "hooks/useLocalStorageState";

export default function ProductsPage() {
  // const [isState, setState] = useLocalStorageState({});
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  const products = catProducts;
  const { isMedia, setMedia } = useMedia();
  return (
    <div
      style={{
        padding: "4rem 8rem 0rem 4rem",
        maxWidth: isToggle ? "calc(100vw - 20rem)" : "100vw",
        background: setMedia("inherit", "green", "blue", "yellow"),
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
          maxHeight: "calc(100vh - 30rem)",
          overflowY: "scroll",
          overflowX: "scroll",
        }}
      >
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
      </div>
    </div>
  );
}
