export interface ICatProduct {
  id: string;
  image: string;
  position: { name: string; code: string };
  status: string;
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
  guaranty?: string;
}

export interface IResponseProduct {
  id: string;
  image: string;
  name: string;
  code: string;
  status: string;
  from: string;
  to: string;
  new: boolean;
  price: string;
  group: string;
  income: string;
  supplier: string;
  guaranty: string;
}

export interface IProductsResponseData {
  data: IResponseProduct[];
}
