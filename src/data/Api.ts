import axios from "axios";

export const UsersAPI = axios.create({
  baseURL: "https://dummyjson.com/users",
  headers: { "Content-Type": "application/json" },
});

export const ProductsAPI = axios.create({
  baseURL: "https://dummyjson.com/products",
  headers: { "Content-Type": "application/json" },
});
