"use client";

import { useSelector } from "app/redux";
import { RootState } from "app/redux/store";
import { Products } from "components/products/Server";
// import { useLocalStorageState } from "hooks/useLocalStorageState";
import { useMedia } from "hooks/useMedia";

export default function ProductsPage() {
  // const [isProducts, setProducts] = useLocalStorageState("products");
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);

  console.log(process.env.PRODUCTS_API_URL);

  const { setMedia } = useMedia();
  return (
    <div
      style={{
        padding: "2rem 3.2rem",
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
        {/* <h1>Products / {products.length} </h1> */}
        <div>
          <label htmlFor="">
            status
            <select></select>
          </label>
        </div>
      </div>
      <div
        className="scroll-bar"
        style={{
          maxHeight: "calc(100vh - 30rem)",
          overflowY: "scroll",
          overflowX: "scroll",
        }}
      >
        <Products />
      </div>
    </div>
  );
}
