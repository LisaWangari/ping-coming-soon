import React from "react";

import logo from "../../images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <section className="headerContainer">
      <img className="headerLogo" src={logo} alt="ping logo" />
    </section>
  );
};

export default Header;
