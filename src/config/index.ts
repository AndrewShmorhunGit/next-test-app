import "dotenv/config";

export const config = {
  api: {
    products:
      process.env.PRODUCTS_API_URL || "http://localhost:3000/api/products",
    exchange:
      process.env.NEXT_PUBLIC_EXCHANGE_URL ||
      "https://api.exchangerate.host/latest?base=USD",
  },
};
