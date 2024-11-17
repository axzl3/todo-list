import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  <div id="error-page">
    <h1>Error</h1>
  </div>;
};

export default ErrorPage;
