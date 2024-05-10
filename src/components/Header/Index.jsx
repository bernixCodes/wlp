import logo from "/logo.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <p> World Problems Log</p>
      </div>

      <div className="header__action">
        <div className="header__search">
          <span className="material-icons-sharp search__icon">search</span>
          <input type="text" placeholder="Search" />
        </div>

        <button className="header__cta">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
