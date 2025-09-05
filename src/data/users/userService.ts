import { UsersAPI } from "../Api";
import type { User } from "./userTypes";

export const userService = {
  async getUsers(): Promise<User[]> {
    const res = await UsersAPI.get("");
    return res.data.users;
  },

  async getUserById(id: number): Promise<User> {
    const res = await UsersAPI.get(`/${id}`);
    return res.data;
  },
};
