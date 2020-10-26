import logoSVG from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logoSVG} alt="noty. logo" />
  </header>
);

export default Header;
