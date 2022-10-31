import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-right">
        <div className="logo">
          <img src={logo} alt="logo" srcset="" />
        </div>
        <div className="site-map">
          <ul>
            <li>Home</li>
            <li>What is GPT3</li>
            <li>Open AI</li>
            <li>Case Studies</li>
            <li>Library</li>
          </ul>
        </div>
      </div>

      <div className="account">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
