import { useNavigate } from "react-router-dom";
import errorImg from "../img/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-center mt-4 mb-10 ">
      <img className="m-0" src={errorImg} alt="NotFound" />
      <div>
        <button
          className=" bg-green-500 p-4 m-5 rounded-md font-bold "
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className=" bg-amber-300 p-4 rounded-md font-bold"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
