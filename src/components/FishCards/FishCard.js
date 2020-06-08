import React from "react";
import "./FishCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FishCard = ({ fish }) => {
  const fishName = Object.keys(fish);
  return(
    <div className="fish-card">
      <img
        className="fish-illustration-small"
        src={fish[fishName].SpeciesIllustrationPhoto.src}
        alt={fish[fishName].SpeciesIllustrationPhoto.alt}
      />
      <h3 className="species-name-fish-card">{fish[fishName].SpeciesName}</h3>
      <Link to={`/details/${fishName}`}>
        <button>select</button>
      </ Link>
    </div>
  );
}
export default FishCard;
