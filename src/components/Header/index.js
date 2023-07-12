import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Food.png";
import "./header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Link to={isLoggedIn ? "/logOut" : "/login"}>
          {isLoggedIn ? " " : "Login"}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
