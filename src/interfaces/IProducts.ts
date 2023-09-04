export interface ICatProduct {
  id: string;
  image: string;
  position: { name: string; code: string };
  status: "available" | "not available";
  date: {
    from: string;
    to: string;
  };
  state: {
    new: boolean;
  };
  price: {
    usd: number;
  };
  group: string;
  income: string;
  supplier: string;
}
