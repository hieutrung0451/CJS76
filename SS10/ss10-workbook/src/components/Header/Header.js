import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className="link" to="/home/products">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/invoices">
            Invoices
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/" style={{ color: "red" }}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
