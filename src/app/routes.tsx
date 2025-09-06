import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../ui/layouts/MainLayout";

const Host = lazy(() => import("../ui/pages/Host"));
const AppOne = lazy(() => import("../infra/app1/App"));
const AppTwo = lazy(() => import("../infra/app2/App"));

const LoadingFallback = () => (
  <div className="text-center p-8">Loading...</div>
);

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Host />
          </Suspense>
        ),
      },
      {
        path: "/app1",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AppOne />
          </Suspense>
        ),
      },
      {
        path: "/app2",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AppTwo />
          </Suspense>
        ),
      },
    ],
  },
]);
