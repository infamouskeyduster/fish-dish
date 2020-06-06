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
	'northern-quahog',
	'atlantic-surfclam',
	'ocean-quahog',
	'geoduck-farmed',
];

export const fetchMostPopularFishData = async () => {
  const fetchPopularFish = await mostPopularFishConsumed.map(async popularFish => {
    const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
      headers : {
        "Target-URL" : `https://www.fishwatch.gov/api/species/${popularFish}`
      }
    })
    const data = await response.json();
    return data[0];
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
