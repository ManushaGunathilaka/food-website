import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/*from react-router-dom, all children will be rendered from here */}
      <footer>Footer</footer>;
    </>
  );
};

export default Main;
