import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>There is some errors</p>
        <span>
          Do you have any account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
