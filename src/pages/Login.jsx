import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>There is some errors</p>
        <span>
          Doesn't have any account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
