import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <NavLink to="/home/products/1">Product 1</NavLink>
        </li>
        <li>
          <NavLink to="/home/products/2">Product 2</NavLink>
        </li>
        <li>
          <NavLink to="/home/products/3">Product 3</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
