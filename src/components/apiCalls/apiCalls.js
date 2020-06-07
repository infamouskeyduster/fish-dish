const mostPopularFishConsumed = [

	//SCALLOP
	'atlantic-sea-scallop',

	//SHRIMP
	'pink-shrimp',
	'white-shrimp',
	'brown-shrimp',
	'brown-rock-shrimp',
	'atlantic-northern-shrimp',

	//TUNA
	'pacific-bluefin-tuna',
	'western-atlantic-bluefin-tuna',
	'pacific-skipjack-tuna',
	'atlantic-skipjack-tuna',
	'pacific-bigeye-tuna',
	'pacific-yellowfin-tuna',
	'atlantic-yellowfin-tuna',
	'pacific-albacore-tuna',
	'atlantic-bigeye-tuna',
	'north-atlantic-albacore-tuna',

	//SALMON
	'chum-salmon',
	'coho-salmon',
	'sockeye-salmon',
	'chinook-salmon',
	'pink-salmon',
	'atlantic-salmon',


	//POLLOCK
	'alaska-pollock',
	'atlantic-pollock',

	//CRAB
	'red-king-crab',
	'alaska-snow-crab',

	//COD
	'pacific-cod',
	'atlantic-cod',
	'lingcod',

	//CLAM
	'atlantic-surfclam',
	'ocean-quahog',
];

// export const fetchMostPopularFishData = async () => {
//   const fetchPopularFish = mostPopularFishConsumed.reduce((allFish, currentFish) => {
//
//     mostPopularFishConsumed.forEach( async fish => {
//       const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
//         headers : {
//           "Target-URL" : `https://www.fishwatch.gov/api/species/${fish}`
//         }
//       })
//
//       const data = await response.json();
//       const dataObj = data[0];
//
//       let fishNameNoDash = fish.split('-').join('');
//
//       if (!allFish[fishNameNoDash]) {
//         allFish[fishNameNoDash] = dataObj;
//       }
//
//     })
//
//     return allFish;
//   }, {})
//
//   console.log('fetchPopularFish', fetchPopularFish);
//   await console.log('fetchPopularFish tuna', fetchPopularFish['atlanticbigeyetuna']);
//   return fetchPopularFish;
// }

// export const fetchMostPopularFishData = async () => {
//   const fetchPopularFish = await mostPopularFishConsumed.reduce( async (acc, popularFish) => {
//     const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
//       headers : {
//         "Target-URL" : `https://www.fishwatch.gov/api/species/${popularFish}`
//       }
//     })
//     const data = await response.json();
//     const dataObj = data[0];
//     if (!acc[popularFish]) {
//       acc[popularFish] = dataObj;
//     }
//     return acc;
//   }, {})
//   console.log('fetchPopularFish in API calls', fetchPopularFish);
// }

export const fetchMostPopularFishData = async () => {
  const fetchPopularFish = await mostPopularFishConsumed.map(async popularFish => {
    const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
      headers : {
        "Target-URL" : `https://www.fishwatch.gov/api/species/${popularFish}`
      }
    })
    const data = await response.json();
    const dataObj = data[0];
    return(
      {
      [popularFish]:
        {
          Calories: dataObj.Calories,
          Carbohydrate: dataObj.Carbohydrate,
          Cholesterol: dataObj.Cholesterol,
          Fat: dataObj['Fat, Total'],
          Fiber: dataObj['Fiber, Total Dietary'],
          HarvestType: dataObj['Harvest Type'],
          HealthBenefits: dataObj['Health Benefits'],
          Population: dataObj.Population,
          PopulationStatus: dataObj['Population Status'],
          Protein: dataObj.Protein,
          Quote: dataObj.Quote,
          SaturatedFattyAcids: dataObj['Saturated Fatty Acids, Total'],
          ScientificName: dataObj['Scientific Name'],
          Selenium: dataObj.Selenium,
          ServingWeight: dataObj['Serving Weight'],
          Sodium: dataObj.Sodium,
          Source: dataObj.Source,
          SpeciesIllustrationPhoto: dataObj['Species Illustration Photo'],
          SpeciesName: dataObj['Species Name'],
          Sugars: dataObj['Sugars, Total'],
          Taste: dataObj.Taste,
          Texture: dataObj.Texture,
        }
      }
    )
  })
  return Promise.all(fetchPopularFish, () => {console.log('fetchPopularFish in API calls', fetchPopularFish)
});
}

export const fetchAllFishData = async () => {
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL" : 'https://www.fishwatch.gov/api/species'
    }
  })
  const data = await response.json();
  console.log('all fish data', data);
  return data;
}
