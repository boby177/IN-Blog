import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=tech">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=news">
            <h6>News</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=games">
            <h6>Games</h6>
          </Link>
          <Link className="link" to="/?cat=others">
            <h6>Others</h6>
          </Link>
          <span>Bob</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
