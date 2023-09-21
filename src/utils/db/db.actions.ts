"use server";

import { IProduct } from "interfaces/IProducts";
import db from "./db";

export const newProd = async (product: IProduct) => {
  const prod = await db.product.create({
    data: {
      image: product.image,
      name: product.position.name,
      code: product.position.code,
      status: product.status,
      from: product.date.from,
      to: product.date.to,
      new: product.state.new,
      price: product.price.usd.toString(),
      group: product.group,
      income: product.income,
      supplier: product.supplier,
      guaranty: product.guaranty || "",
    },
  });
};
