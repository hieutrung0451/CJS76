import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import Invoices from "./pages/Invoices/Invoices";
import InvoiceDetail from "./pages/Invoices/InvoiceDetail";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/home/invoices" element={<Invoices />}>
            <Route path=":id" element={<InvoiceDetail />} />
          </Route>
          <Route path="/home/cart" element={<Cart />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home/about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
