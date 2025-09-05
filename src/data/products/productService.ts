import { ProductsAPI } from "../Api";
import type { Product } from "./productTypes";

export const productService = {
  async getProducts(): Promise<Product[]> {
    const res = await ProductsAPI.get("");
    return res.data.products;
  },

  async getProductById(id: number): Promise<Product> {
    const res = await ProductsAPI.get(`/${id}`);
    return res.data;
  },
};
