import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logotype"
        src={process.env.PUBLIC_URL + '/Fish_Dish_assets/vectors/fish_dish_logotype.png'}
        alt="Fish Dish Logo"
      />
    </div>
  )
}

export default Header;
