import React from "react";
import PropTypes from "prop-types";

// This component is to be used with the Socials component to display individual social icons, you can set the font awesome icons name with prop iconName, socialLink to lead the user to a site when clicking on the icon and the so

const SocialIcon = ({ socialLink, iconName }) => {
  return (
    <div className="socialIcon">
      <a href={socialLink}>
        <i className={`${iconName} socialColor`} />
      </a>
    </div>
  );
};

SocialIcon.propTypes = {
  socialLink: PropTypes.string,
  iconName: PropTypes.string
};

export default SocialIcon;
