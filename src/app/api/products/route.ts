import { NextResponse } from "next/server";
import db from "utils/db/db";
import { deleteDbProduct } from "utils/db/db.server";

export const GET = async (request: Request) => {
  const products = await db.product.findMany();
  return NextResponse.json({ data: products });
};

export const DELETE = async (request: Request, response: Response) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log("Deleting an Item...");

  if (id) {
    try {
      await deleteDbProduct(id);
      return { message: `Item with id:${id} deleted successfully` };
    } catch (error) {}
  } else {
    return { message: "Operation failed" };
  }
};
