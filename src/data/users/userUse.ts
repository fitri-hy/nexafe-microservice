import { useQuery } from "@tanstack/react-query";
import { userService } from "./userService";
import type { User } from "./userTypes";

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => userService.getUsers(),
  });
}
