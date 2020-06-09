import React from "react";
import "./FishCardsContainer.css";
import PropTypes from "prop-types";
import FishCard from '../FishCards/FishCard';

const FishCardsContainer = ({ data, savedFish, addOrRemoveFishFromSavedFish }) => {
  if(!data.length) {
    return(
      <div className="error-message-container">
        <h2 className="error-message">
          An error has occurred!
          There was a problem retrieving your data.
          Potential causes for this error:
        </h2>
        <hr />
          <ol>
            <li>The data has not been fully loaded from the server.</li>
            <li>You do not have any saved fish yet.</li>
            <li>Your search results did not return any data.</li>
          </ol>
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

FishCardsContainer.propTypes = {
  data: PropTypes.array,
  savedFish: PropTypes.array,
  addOrRemoveFishFromSavedFish: PropTypes.func,
};

export default FishCardsContainer;
