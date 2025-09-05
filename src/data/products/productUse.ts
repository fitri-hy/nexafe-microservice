import { useQuery } from "@tanstack/react-query";
import { productService } from "./productService";
import type { Product } from "./productTypes";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => productService.getProducts(),
  });
}
