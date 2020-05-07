import tripCalculator from "./tripCalculator";
import costCalculator from "./costCalculator";
import tripTranslator from "./tripTranslator";

export default (geese, corn, fox) => {
  let trip = tripCalculator(geese, corn, fox)[0];
  let cost = costCalculator(geese, corn, fox);
  let translatedTrip = tripTranslator(trip);

  return [{ geese: geese, corn: corn, fox: fox, price: cost }, translatedTrip];
};
