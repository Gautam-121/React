import { useState } from "react";
import { Link } from "react-router-dom";

const authenticateUser = () => {
  //Api call to check Authentication
  return false;
};

const Title = () => {
  return (
    <div className="logo-img">
      <a href="/">
        <img src={""} alt="This is logo" />
      </a>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [logged , setLogged] = useState(false)
  return (
    <div className="header">
      <Title />
      <nav className="nav-item">
        <ul>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Cart</a>
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
