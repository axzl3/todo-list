import {
  ErrorPage,
  HomePage,
  NoPageFound,
} from "../Pages";
import HomeLayout from "../Layout/HomeLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  );
};

export default App;
