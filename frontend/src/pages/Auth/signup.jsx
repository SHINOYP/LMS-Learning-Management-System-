import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import sqr from "../../img/sqr.svg";
import sqr2 from "../../img/sqr2.svg";
import sqr3 from "../../img/sqr3.svg";
import sqr4 from "../../img/sqr4.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
    setEmail("");
    setName("");
    setPassword("");
    navigate("/login");
  };
  return (
    <div className="login text-white flex items-center justify-center  overflow-hidden">
      <img
        alt="err"
        src={sqr}
        className="absolute top-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"
      ></img>
      <img
        alt="err"
        src={sqr2}
        className="absolute top-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"
      ></img>
      <img
        alt="err"
        src={sqr3}
        className="absolute bottom-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"
      ></img>
      <img
        alt="err"
        src={sqr4}
        className="absolute bottom-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"
      ></img>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3 className="mx-auto mb-14 font-medium text-4xl">Sign Up</h3>
        <div className="relative mx-auto">
          <label className=" mb-2 absolute -top-8 left-2">Username :</label>
          <input
            placeholder="     full name"
            className="field peer border rounded-xl border-slate-600 "
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="relative mx-auto mt-14">
          <label className="mt-4 mb-2 absolute -top-12 left-2">Email:</label>
          <input
            placeholder="   you@example.com"
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
        <div className="relative mx-auto mt-8">
          <label className="mt-4 mb-2 absolute -top-12 left-2">Password</label>
          <input
            placeholder="  *************"
            className="field rounded-xl border border-slate-600 "
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="on"
          />
        </div>
        <button
          disabled={isLoading}
          className="bg-sky-600 mx-auto hover:bg-sky-800 rounded-xl mt-10  text-white text-xl md:w-[398px] w-[90vw] h-[58px]"
          
        >
          Submit
        </button>
        {error && <div>{error}</div>}
        <h1 className="mt-6 mx-auto ">
         -------------------<span className="text-lg">Or</span>
          -------------------
        </h1>
        <span className="mt-6 mx-auto">
          {" "}
          Have an account !{" "}
          <Link to={"/login"} className="text-blue-400">
            log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
