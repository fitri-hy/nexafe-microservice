import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../ui/layouts/MainLayout";
import Host from "../ui/pages/Host";

import AppOne from "../infra/app1/App";
import AppTwo from "../infra/app2/App";

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Host /> },
      { path: "/app1", element: <AppOne /> },
      { path: "/app2", element: <AppTwo /> },
    ],
  },
]);
