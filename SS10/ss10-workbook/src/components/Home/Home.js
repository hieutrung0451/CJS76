import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <h1>Welcome</h1>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
