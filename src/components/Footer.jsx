import React from "react";
import Logo from "../imgs/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with Bob and <b>React JS</b>
      </span>
    </footer>
  );
};

export default Footer;
