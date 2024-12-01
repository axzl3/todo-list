import { useNavigate } from "react-router-dom";
import { Button } from "../Components";

const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does
        not exist.
      </p>
      <Button
        btnText={"Return Home"}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default NoPageFound;
