import React from "react";
import "./FishCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FishCard = ({ fish, savedFish, addOrRemoveFishFromSavedFish }) => {

  const fishName = Object.keys(fish);

  const savedFishImagePath = (savedFish) => {
    if(savedFish.includes(fishName[0]) === true) {
      return(
        process.env.PUBLIC_URL + '/Fish_Dish_assets/vectors/star_filled.svg'
      )
    } else {
      return(
        process.env.PUBLIC_URL + '/Fish_Dish_assets/vectors/star_outline.svg'
      )
    }
  }

  return(
    <div className="fish-card">
      <img
        className="star-svg"
        src={savedFishImagePath(savedFish)}
        alt="save this fish"
        id={fishName[0]}
        onClick={(event) => {addOrRemoveFishFromSavedFish(event.target.id)}}
      />
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
