import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Food.png";
import "./header.css";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Header = () => {
  
  const {loginData : {loginUser , userName}} = useContext(UserContext)

  return (
    <div className="max-width header-container">
      <div className="header-logo-img">
        <Link to="/">
          <img src={Logo} alt="This is logo" width="70px" />
        </Link>
      </div>
      <nav className="header-navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/instamart">Instamart</Link>
        <Link to={loginUser ? "" : "/login"}>
          {loginUser? userName : "Login"}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
