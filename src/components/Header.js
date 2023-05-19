import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/Food.png"

const authenticateUser = () => {
  //Api call to check Authentication
  return false;
};

const Title = () => {
  return (
    <div className="logo-img">
      <a href="/">
        <img 
        src={Logo} 
        alt="This is logo"
        width= "70px" 
        />
      </a>
    </div>
  );
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <nav className="nav-item">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to= {isLoggedIn? "/logOut" : "/login"}>{isLoggedIn?  " "  : "Login" }</Link>
        </ul>
      </nav>
      {
        // Any js Expression write not statement
        // ( a = 10, console.log(a))
        // isLoggedIn ? (
        //   <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
        // ) : (
        //   <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
        // )
      }
    </div>
  );
};

export default Header;
