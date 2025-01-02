import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const queryClient = new QueryClient();

// import pages
import {
  AboutPage,
  ErrorPage,
  HomePage,
  NoPageFound,
} from "../Pages";

import HomeLayout from "../Layout/HomeLayout";

import TestPage from "../Pages/testPage";

const router = createBrowserRouter(
  [
    {
      path: "*",
      Component: NoPageFound,
    },
    {
      path: "/",
      Component: HomeLayout,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: "/about",
          Component: AboutPage,
        },
        {
          path: "/test",
          Component: TestPage,
        },
      ],
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      />{" "}
    </QueryClientProvider>
  );
};

export default App;
