import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [nameLog, setNameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [home, setHome] = useState(true);
  const [flag, setFlag] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let name = localStorage.getItem("Name").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (nameLog !== name || passwordLog !== pass) {
      setHome(home);
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="form-control">
            <label className="username">Username:</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setNameLog(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label className="password">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPasswordLog(e.target.value);
              }}
            />
          </div>
          <button type="submit">Login</button>
          {flag && (
            <span style={{ color: "red" }}>
              Username or Password not correct!
            </span>
          )}
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </form>
      ) : (
        navigate("/home")
      )}
    </div>
  );
};

export default Login;
