import { ICatProduct } from "interfaces/IProducts";

export const filterProducts = (
  state: "all" | "new" | "used",
  status: "all" | "available" | "not available",
  products: ICatProduct[]
): ICatProduct[] | null => {
  return filterByStatusProducts(status, filterByStateProducts(state, products));
};

const filterByStateProducts = (
  state: "all" | "new" | "used",
  products: ICatProduct[] | null
): ICatProduct[] | null => {
  if (state === "new")
    return products?.filter((prod) => prod.state.new && prod) || null;
  if (state === "used")
    return products?.filter((prod) => !prod.state.new && prod) || null;
  return products;
};

const filterByStatusProducts = (
  status: "all" | "available" | "not available",
  products: ICatProduct[] | null
): ICatProduct[] | null => {
  if (status === "available")
    return (
      products?.filter((prod) => prod.status === "available" && prod) || null
    );

  if (status === "not available") {
    return (
      products?.filter((prod) => prod.status === "not available" && prod) ||
      null
    );
  }
  return products;
};

export const checkStatus = (status: string) =>
  status === "available" || status === "not available" ? status : "all";

export const checkState = (state: string) =>
  state === "new" || state === "used" ? state : "all";
