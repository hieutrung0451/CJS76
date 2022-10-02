import { useNavigate, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Password", JSON.stringify(password));
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Register</h1>
      <div className="form-control">
        <label className="username">Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label className="password">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Register</button>
      {flag && (
        <span style={{ color: "red" }}>Complete username and password!</span>
      )}
      <NavLink className="link" to="/">
        Login
      </NavLink>
    </form>
  );
};

export default Register;
