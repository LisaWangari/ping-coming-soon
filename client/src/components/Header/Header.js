import React from "react";

import logo from "../../images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <section className="headerContainer">
      <img className="headerLogo" src={logo} alt="ping logo" />
      <h1 className="launchHeader">
        We are launching <span className="launchSpan">soon!</span>
      </h1>
      <h3 className="subHeader">Subscribe and get notified</h3>
    </section>
  );
};

export default Header;
