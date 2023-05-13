//This is Named Export
export const Title = () => {
  return (
    <div className="logo-img">
      <a href="/">
        <img src="" alt="This is logo" />
      </a>
    </div>
  );
};

//This is default Export

const Header = () => {
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
    </div>
  );
};

export default Header;
