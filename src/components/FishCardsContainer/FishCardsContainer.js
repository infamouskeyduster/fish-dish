import React from "react";
import "./FishCardsContainer.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FishCard from '../FishCards/FishCard';

const FishCardsContainer = ({ mostPopular }) => {
  console.log('mostPopular fish in FishCardsContainer', mostPopular);
  const allFishCards = mostPopular.map(currentFish => {
    return(
      <FishCard key={mostPopular.indexOf(currentFish)} fish={currentFish}/>
    )
  })

  return(
    <div className="fish-cards-container">
      {allFishCards}
    </div>
  )
}

export default FishCardsContainer;
