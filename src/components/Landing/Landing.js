import React from "react";
import "./Landing.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Landing = () => {
  return(
    <div className="landing">
      <div className="landing-btn-container">
        <Link to="/most-popular">
          <button className="most-popular-btn">Popular Fish</button>
        </Link>
        <Link to="/my-dishes">
          <button className="my-dishes-button">Saved Fish</button>
        </Link>
        <Link to="/search-fish">
          <button className="my-dishes-button">Search Fish</button>
        </Link>
      </div>
      <div className="loader"></div>
    </div>
  )
}

export default Landing;
