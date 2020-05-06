import tripCalculator from './tripCalculator'

export default (geese, corn) => {
  let numberOfTrips = tripCalculator(geese, corn);
  console.log(numberOfTrips);

  return numberOfTrips * 0.25;
};
