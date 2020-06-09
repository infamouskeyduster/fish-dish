import React from "react";
import "./FishCardsContainer.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FishCard from '../FishCards/FishCard';

const FishCardsContainer = ({ data, savedFish, addOrRemoveFishFromSavedFish }) => {
  if(data.length === 0) {
    return(
      <div className="error-message-container">
        <h2 className="error-message">
          An error has occurred! Either there was a problem retrieving data,
          or you do not have any saved fish!
        </h2>
      </div>
    )
  }

  const allFishCards = data.map(currentFish => {
    return(
      <FishCard
        key={data.indexOf(currentFish)}
        fish={currentFish}
        savedFish={savedFish}
        addOrRemoveFishFromSavedFish={addOrRemoveFishFromSavedFish}
      />
    )
  })

  return(
    <div className="fish-cards-container">
      {allFishCards}
    </div>
  )
}

export default FishCardsContainer;
