/** @jsxImportSource theme-ui */
import { Products } from "components/products/Server";
import { ProductsPageWrapper } from "./Client";

export default function ProductsPage() {
  return (
    <ProductsPageWrapper>
      <div
        sx={{
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
        sx={{
          maxHeight: "calc(100vh - 30rem)",
          overflowY: "scroll",
          overflowX: "scroll",
        }}
      >
        <Products />
      </div>
    </ProductsPageWrapper>
  );
}
