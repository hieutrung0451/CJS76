import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Invoices = () => {
  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        <li>
          <NavLink to="/home/invoices/1">Invoice 1</NavLink>
        </li>
        <li>
          <NavLink to="/home/invoices/2">Invoice 2</NavLink>
        </li>
        <li>
          <NavLink to="/home/invoices/3">Invoice 3</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Invoices;
