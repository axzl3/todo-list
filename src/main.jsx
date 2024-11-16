import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, ErrorPage } from "./Components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home,
      ErrorBoundary: ErrorPage,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  </React.StrictMode>
);
