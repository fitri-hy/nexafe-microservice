export interface AppItem {
  name: string;
  path: string;
  description?: string;
}

export const AppHost: AppItem[] = [
  { name: "List Data", path: "/app1", description: "View and manage all your data efficiently." },
  { name: "Todo List", path: "/app2", description: "Organize tasks with a lightweight todo system." },
];
