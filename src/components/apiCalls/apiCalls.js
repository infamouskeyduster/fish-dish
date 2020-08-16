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

	//CONCH
	'queen-conch',

	//SQUID
	'california-market-squid',
	'shortfin-squid',

	//SHARK
	'atlantic-blacktip-shark',
	'atlantic-common-thresher-shark',
	'atlantic-sharpnose-shark',
	'atlantic-shortfin-mako-shark',
	'pacific-common-thresher-shark',
	'pacific-shortfin-mako-shark',
	'atlantic-spiny-dogfish',

	//SWORD and SAIL FISH
	'north-atlantic-swordfish',
	'north-pacific-swordfish',

	//MAHI
	'pacific-mahimahi',
	// 'atlantic-mahimahi', THIS REQUEST BROKE THE API 08-16-2020

	//HALIBUT
	'pacific-halibut',
	'atlantic-halibut',
	'greenland-turbot',

	//SNAPPER
	'red-snapper',
	'vermilion-snapper',
	'bocaccio',
	'tilefish',

	//SEA BASS
	'black-sea-bass',
	'atlantic-striped-bass',
	'wreckfish',
	'widow-rockfish',

	//MONKFISH
	'monkfish',

	//ANCHOVY
	'northern-anchovy',

	//FLOUNDER
	'arrowtooth-flounder',
	'summer-flounder',
	'winter-flounder',
	'yellowtail-flounder',
	'rock-sole',
	'flathead-sole',
	'petrale-sole',
	'yellowfin-sole',

	//HERRING
	'atlantic-herring',

	//MACKEREL
	'atlantic-mackerel',
	'spanish-mackerel',
	'pacific-mackerel',
	'king-mackerel',

	//WAHOO
	'pacific-wahoo',
	'atlantic-wahoo',

	//GROUOPER
	'black-grouper',
	'red-grouper',
	'gag-grouper',
];

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

//BELOW is a function to fetch All Fish Data from API

// export const fetchAllFishData = async () => {
//   const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
//     headers: {
//       "Target-URL" : 'https://www.fishwatch.gov/api/species'
//     }
//   })
//   const data = await response.json();
//   console.log('all fish data', data);
//   return data;
// }
