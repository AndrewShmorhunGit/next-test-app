/** @jsxImportSource theme-ui */
"use client";
import { ICatProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import {
  setModal,
  setStateFilter,
  setStatusFilter,
  useAppDispatch,
  useSelector,
} from "app/redux";
import { RootState } from "app/redux/store";
import { Grid, Box } from "theme-ui";
import { checkState, checkStatus, filterProducts } from "utils/filters";
import { Product } from "./Server";
import { Select } from "components/lib/Servet";

export function ProductDeleteButton({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}

export function IncomeDeleteButton({
  product,
}: {
  product: ICatProduct | ICatProduct[];
}) {
  const dispatch = useAppDispatch();
  return (
    <div sx={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        sx={{ cursor: "pointer", color: "text.tables" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}

export function ActivePageWrapper({ children }: { children: React.ReactNode }) {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <div
      sx={{
        pt: 5,
        pl: 6,
        pr: 5,
        pb: 2,
        maxWidth: isToggle ? "calc(100vw - 20rem)" : "100vw",
      }}
    >
      {children}
    </div>
  );
}

export const ProductImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <div sx={{ alignSelf: "center" }}>
    <img
      height={24}
      width={24}
      sx={{ maxHeight: "3.2rem", borderRadius: 4 }}
      src={image}
      alt={altText}
    />
  </div>
);

export function ProductsAmount({ title }: { title: string }) {
  // const { products } = useSelector(store => store.products);
  return (
    <h2 sx={{ variant: "styles.headers.title" }}>
      {title} / {/* {products.length} */}
    </h2>
  );
}

export function ProductsWithFilter({
  rate,
  products,
}: {
  rate: number;
  products: ICatProduct[];
}) {
  const { isStateFilter: stateFilter, isStatusFilter: statusFilter } =
    useSelector((store) => store.products);

  return filterProducts(stateFilter, statusFilter, products)?.map(
    (product: ICatProduct) => {
      return (
        <Product
          key={product.position.name + product.id}
          product={product}
          rate={rate || 38}
        />
      );
    }
  );
}

export function StateSelect() {
  const { isStateFilter: isStateOption } = useSelector(
    (store) => store.products
  );
  const dispatch = useAppDispatch();
  return (
    <Select
      label={"state"}
      options={["all", "new", "used"]}
      value={isStateOption}
      onChange={(e) => dispatch(setStateFilter(checkState(e.target.value)))}
    />
  );
}

export function StatusSelect() {
  const { isStatusFilter: isStatusOption } = useSelector(
    (store) => store.products
  );
  const dispatch = useAppDispatch();
  return (
    <Select
      label={"status"}
      options={["all", "available", "not available"]}
      value={isStatusOption}
      onChange={(e) => dispatch(setStatusFilter(checkStatus(e.target.value)))}
    />
  );
}
