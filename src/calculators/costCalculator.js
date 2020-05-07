import tripCalculator from './tripCalculator'

export default (geese, corn) => {
  let numberOfTrips = tripCalculator(geese, corn);
  return numberOfTrips * 0.25;
};
