import React from "react";

import Header from "../Header/Header";
import Email from "../Email/Email";
import Dashboard from "../Dashboard/Dashboard";
import Socials from "../Socials/Socials";
import SocialIcon from "../SocialIcon/SocialIcon";

import "./Ping.css";

const Ping = () => {
  return (
    <main>
      <Header />
      <Email />
      <Dashboard />
      <Socials>
        <SocialIcon
          socialLink="https://facebook.com"
          iconName="fab fa-facebook-f"
        />
        <SocialIcon
          socialLink="https://twitter.com"
          iconName="fab fa-twitter"
        />
        <SocialIcon
          socialLink="https://instagram.com"
          iconName="fab fa-instagram"
        />
      </Socials>
    </main>
  );
};

export default Ping;
