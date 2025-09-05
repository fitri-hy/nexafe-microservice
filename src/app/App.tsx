import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Providers } from "./providers";

export const App = () => (
  <Providers>
    <RouterProvider router={routes} />
  </Providers>
);
