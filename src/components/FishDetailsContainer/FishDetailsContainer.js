import React from "react";
// import "./FishDetailsContainer.css";
import PropTypes from "prop-types";

const FishDetailsContainer = ({ fish, name }) => {
  const fishObj = fish[name];
  console.log('fishObj in FishDetailsContainer', fishObj);
  return(
    <div className="fish-details-container">
    
      <h1>{fishObj.SpeciesName}</h1>
      <h3><i>{fishObj.ScientificName}</i></h3>
      <img
        src={fishObj.SpeciesIllustrationPhoto.src}
        alt={fishObj.SpeciesIllustrationPhoto.alt}
      />

      <hr/>
      <p>{fishObj.Quote}</p>
      <hr/>

      <div className="nutrition-table">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Nutrition Facts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>{fishObj.Calories}</td>
            </tr>
            <tr>
              <td>Carbohydrate</td>
              <td>{fishObj.Carbohydrate}</td>
            </tr>
            <tr>
              <td>Cholesterol</td>
              <td>{fishObj.Cholesterol}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{fishObj.Fat}</td>
            </tr>
            <tr>
              <td>Fiber</td>
              <td>{fishObj.Fiber}</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{fishObj.Protein}</td>
            </tr>
            <tr>
              <td>Saturated Fatty Acids</td>
              <td>{fishObj.SaturatedFattyAcids}</td>
            </tr>
            <tr>
              <td>Selenium</td>
              <td>{fishObj.Selenium}</td>
            </tr>
            <tr>
              <td>Sodium</td>
              <td>{fishObj.Sodium}</td>
            </tr>
            <tr>
              <td>Sugars</td>
              <td>{fishObj.Sugars}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FishDetailsContainer;