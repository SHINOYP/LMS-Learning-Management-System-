import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import sqr from "../../img/sqr.svg";
import sqr2 from "../../img/sqr2.svg";
import sqr3 from "../../img/sqr3.svg";
import sqr4 from "../../img/sqr4.svg";
import Book from "../../img/icons/Book2.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    if (user) {
      <Navigate to="/Dashboard" replace={true} />;
    }
  };

  return (
    <div className="login relative text-white flex flex-col items-center justify-center overflow-hidden">
      {user && <Navigate to="/Dashboard" replace={true} />}
      <img alt="err" src={sqr} className="absolute top-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"></img>
      <img alt="err" src={sqr2} className="absolute top-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"></img>
      <img alt="err" src={sqr3} className="absolute bottom-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"></img>
      <img alt="err" src={sqr4} className="absolute bottom-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"></img>

      <img alt="err" src={Book} className="absolute top-20  md:w-[100px] w-[80px] "></img>
      <form className="flex flex-col" onSubmit={handleSubmit}>
      
        <h3 className="mx-auto mb-14 font-medium text-4xl">Log in</h3>
        <div className="relative">
        <label className="absolute -top-8 left-2">Email:</label>
        <input
          placeholder="  you@example.com"
          className="field peer  border rounded-xl border-slate-600 "
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="on"
        />
        <p className="mt-2 invisible peer-invalid:visible  text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
        </div>

       
        <div className="relative mt-10">
        <label className="absolute -top-8 left-2">Password:</label>
        <input
          placeholder="Password@123"
          className="field   rounded-xl border border-slate-600 "
          type={visible ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="on"
        />
        {visible ? (<>
          <VisibilityIcon
            className="relative -top-10 cursor-pointer"
            style={{left:"350px"}}
            onClick={() => setVisible(false)}
          />
         
          </>
        ) : (
          <VisibilityOffIcon
            className="absolute cursor-pointer right-5 bottom-5"

            onClick={() => setVisible(true)}
          />
        )}
        {error && <div className="mx-auto text-red-600  ">{error}</div>}
          </div>
        <button
          disabled={isLoading}
          className="bg-sky-600 hover:bg-sky-400 rounded-xl mt-10 mx-auto text-white text-xl  md:w-[398px] w-[90vw] h-[58px] "
        >
          Log in
        </button>
      </form>
      <h1 className="mt-6">
        -------------------<span className="text-lg">Or</span>
        -------------------
      </h1>
      <span className="mt-4 ">
        Don't have an account?{" "}
        <Link to={"/signup"} className="text-blue-400">
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default Login;
