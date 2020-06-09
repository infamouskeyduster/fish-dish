import React from "react";
import "./MenuButtons.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuButtons = () => {
  return(
    <div className="menu-buttons-container">
      <Link to="/most-popular">
        <button className="most-popular-btn">Popular</button>
      </Link>
      <Link to="/saved-fish">
        <button className="saved-fish-btn">Saved</button>
      </Link>
      <Link to="/search-fish">
        <button className="search-fish-btn">Search</button>
      </Link>
    </div>
  )
}

export default MenuButtons;
