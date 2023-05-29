import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
