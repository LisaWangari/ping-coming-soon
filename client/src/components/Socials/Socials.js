import React from "react";
import PropTypes from "prop-types";

import "./Socials.css";

// The socials component is the section of the page that contains any number of social media icons. Use the SocialIcon component to create the social media icons.

const Socials = ({ children }) => {
  return <section className="socialSection">{children}</section>;
};

Socials.propTypes = {
  children: PropTypes.node
};

export default Socials;
