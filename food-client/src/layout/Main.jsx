import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/*from react-router-dom, all children will be rendered from here */}
    </div>
  );
};

export default Main;
