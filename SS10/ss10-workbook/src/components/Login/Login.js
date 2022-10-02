import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <form>
      <h1>Login</h1>
      <div className="form-control">
        <label className="username">Username:</label>
        <input type="text" placeholder="Enter username" />
      </div>
      <div className="form-control">
        <label className="password">Password:</label>
        <input type="password" placeholder="Enter password" />
      </div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
