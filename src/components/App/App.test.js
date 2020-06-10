import React from 'react';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { fetchMostPopularFishData } from '../apiCalls/apiCalls';
jest.mock('../apiCalls/apiCalls');

describe('APP', () => {

 it('Should display the Landing page on load', () => {
   const { getByAltText, getByText, getAllByRole } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   );

   const fishDishLogo = getByAltText("Fish Dish Logo");
   const allButtons = getAllByRole("button");

   expect(fishDishLogo).toBeInTheDocument();
   expect(allButtons).toHaveLength(3);
 });

 it('As a user, when I hit the POPULAR button I should be taken to the POPULAR page', () => {

   let data = [];

   fetchMostPopularFishData.mockResolvedValueOnce(data);

   const { getByAltText, getByText, getByRole, getByTestId } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   );

   const popularFishButton = getByRole("button", {
     name: "Popular Fish",
   });

   expect(popularFishButton).toBeInTheDocument();
   fireEvent.click(popularFishButton);

   const errorMessageContainer = getByTestId("error-message-container");
   expect(errorMessageContainer).toBeInTheDocument();
 });

 it('As a user, when I hit the SAVED FISH button I should be taken to the SAVED FISH page', () => {
   const { getByAltText, getByText, getByRole, getByTestId } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   );

   const savedFishButton = getByRole("button", {
     name: "Saved Fish",
   });

   expect(savedFishButton).toBeInTheDocument();
   fireEvent.click(savedFishButton);

   const errorMessageContainer = getByTestId("error-message-container");
   expect(errorMessageContainer).toBeInTheDocument();
 });

 it('As a user, when I hit the SEARCH FISH button I should be taken to the SEARCH FISH page', () => {
   const { getByAltText, getByText, getByRole, getByTestId } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   );

   const searchFishButton = getByRole("button", {
     name: "Search Fish",
   });

   expect(searchFishButton).toBeInTheDocument();
   fireEvent.click(searchFishButton);

   const searchContainer = getByTestId("search-container");
   expect(searchContainer).toBeInTheDocument();
 });

 it ('As a user, when I hit the POPULAR button I should see the popular fish cards populate', async () => {

   let data =
    [
      {"atlantic-sea-scallop":
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
      }
    ]

   fetchMostPopularFishData.mockResolvedValueOnce(data);

   const { getByAltText, getByText, getByRole, getByTestId } = render(
     <MemoryRouter>
       <App />
     </MemoryRouter>
   );

   const popularFishButton = getByRole("button", {
     name: "Popular Fish",
   });

   expect(popularFishButton).toBeInTheDocument();
   fireEvent.click(popularFishButton);
   //data-testid="fish-cards-container"
   const fishCard = await waitFor(() => getByText("Atlantic Sea Scallop"));
   expect(fishCard).toBeInTheDocument();
 });
});
