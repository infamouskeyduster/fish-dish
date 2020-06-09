import React from "react";
import FishDetailsContainer from "./FishDetailsContainer";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

let fish, name;

describe('Fish Details Container', () => {
  it('as a user when I click the SELECT button on a fish card, I should see the fish\'s details', () => {
    fish = {
      "atlantic-sea-scallop":
        {
          "Population": "Above target population level.",
          "PopulationStatus": "<ul>\n<li>According to the <a href=\"https://fish.nefsc.noaa.gov/saw/reviews_report_options.php\">2018 stock assessment</a>, Atlantic sea scallops are not overfished and are not subject to overfishing.</li>\n</ul>\n",
          "ScientificName": "Placopecten magellanicus",
          "SpeciesIllustrationPhoto": {
            "src": "https://www.fishwatch.gov/sites/default/files/atlantic_sea_scallop.png",
            "alt": "Illustration of an Atlantic Sea Scallop",
            "title": "Atlantic Sea Scallop"
          },
          "SpeciesName": "Atlantic Sea Scallop",
          "Calories": "88",
          "Carbohydrate": "2.36 g",
          "Cholesterol": "33 mg",
          "Fat": "0.76 g",
          "Fiber": "0 g",
          "HarvestType": "Wild",
          "HealthBenefits": "<p>Scallops are a good low-fat source of protein and are high in selenium and B vitamins.</p>\n",
          "Protein": "16.7 g",
          "Quote": "U.S. wild-caught Atlantic sea scallop is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.",
          "SaturatedFattyAcids": "0.079 g",
          "Selenium": "22.2 mcg",
          "ServingWeight": "100 g",
          "Sodium": "161 mg",
          "Source": "<p>U.S. wild-caught from Maine to North Carolina.</p>\n",
          "Sugars, Total": "0 g",
          "Taste": "<p>Sea scallops have a sweet, rich taste that can be mild or briny.</p>\n",
          "Texture": "<p>Firm and lean.</p>\n",
        }
      };

    let name = "atlantic-sea-scallop";

    const { getByText, getByAltText } = render (
        <FishDetailsContainer
          fish={fish}
          name={name}
        />
    )

    const fishNameOnCard = getByText("Atlantic Sea Scallop");
    const nutritionFacts = getByText("Nutrition Facts");
    const quote = getByText("U.S. wild-caught Atlantic sea scallop is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.")

    expect(fishNameOnCard).toBeInTheDocument();
    expect(nutritionFacts).toBeInTheDocument();
    expect(quote).toBeInTheDocument();
  });

});
