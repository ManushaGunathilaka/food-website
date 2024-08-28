import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <Navbar />
      <Outlet />
      {/*from react-router-dom, all children will be rendered from here */}
      <footer>Footer</footer>;
    </div>
  );
};

export default Main;
