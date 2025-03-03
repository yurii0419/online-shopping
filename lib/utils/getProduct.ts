import { cache } from "react";
import IProduct from "../types/product";

const getProduct = cache(async (id: number): Promise<IProduct> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  return response.json();
});

export default getProduct;
