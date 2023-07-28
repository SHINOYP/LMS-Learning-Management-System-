import error from "../img/error.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[100vw] md:w-[80vw] h-screen">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <h2 className="text-xl font-bold">Iam working on it!</h2>
        <img alt="" className="mt-14" src={error}></img>
        <Link to="/Dashboard">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
