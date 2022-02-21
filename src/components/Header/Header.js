import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/eden.jpeg";
const Header = () => {
  return (
    <header className={css.Header}>
      <img src={logo} alt='logo'/>
      <span> Eden</span>
    </header>
  );
};

export default Header;
