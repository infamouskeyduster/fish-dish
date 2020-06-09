import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return(
    <div className="landing">
      <div className="landing-btn-container">
        <Link to="/most-popular">
          <button className="most-popular-btn">Popular Fish</button>
        </Link>
        <Link to="/saved-fish">
          <button className="saved-fish-btn">Saved Fish</button>
        </Link>
        <Link to="/search-fish">
          <button className="search-fish-btn">Search Fish</button>
        </Link>
      </div>
      <div className="loader"></div>
    </div>
  )
}

export default Landing;
