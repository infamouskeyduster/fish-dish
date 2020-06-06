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

export const fetchMostPopularFish = async () => {
  const response = await fetch(`https://vrad-api.herokuapp.com${listing}`)
  const data = await response.json();

  return data;
}
