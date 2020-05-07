import tripCalculator from "./tripCalculator";

export default (geese, corn, fox) => {
  let arrayOfTrips = tripCalculator(geese, corn, fox);
  let numberOfTrips = 0;
  if (arrayOfTrips && arrayOfTrips.length > 0) {
    numberOfTrips = arrayOfTrips[0].length;
  }
  return numberOfTrips * 0.25;
};
