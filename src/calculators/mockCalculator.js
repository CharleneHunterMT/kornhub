import tripCalculator from "./tripCalculator";
import costCalculator from "./costCalculator";

export default (geese, corn, fox) => {
  let trip = tripCalculator(geese, corn, fox)[0];
  let cost = costCalculator(geese, corn, fox);

  console.log(`trip: ${trip}`);
  console.log(`cost: ${cost}`);

  return [{ geese: geese, corn: corn, fox: fox, price: cost }, trip];
};
