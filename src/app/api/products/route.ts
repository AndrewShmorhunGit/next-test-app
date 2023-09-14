import { NextResponse } from "next/server";
import db from "utils/db";

export const GET = async (request: Request) => {
  const products = await db.product.findMany();
  return NextResponse.json({ data: products });
};

// export const DELETE = async (request: Request) => {
//   const products = await db.product.findMany();
//   return NextResponse.json({ data: products });
// };
