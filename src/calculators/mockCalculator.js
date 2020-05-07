import tripCalculator from './tripCalculator'
import costCalculator from './costCalculator'

export default (geese, corn) => {
  let trip = tripCalculator(geese, corn)[0];
  let cost = costCalculator(geese, corn);

  console.log(`trip: ${trip}`);
  console.log(`cost: ${cost}`);

  return [
    { geese: geese, corn: corn, price: cost },
    trip,
  ];
};
