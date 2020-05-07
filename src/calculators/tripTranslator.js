export default (trip) => {
  let result = [];

  if (!trip) {
    result.push("No suitable routes found.");
    return result;
  }

  let translationLookup = {};
  translationLookup["G"] = "goose";
  translationLookup["F"] = "fox";
  translationLookup["C"] = "corn";
  translationLookup[" "] = "yourself-only";

  for (let i = 0; i < trip.length; i++) {
    let lookupKey = trip[i];
    let itemWeAreCarrying = translationLookup[lookupKey];

    let prefix = i + 1 + ". Take ";

    let isReturnTrip = i % 2 === 0;
    let suffix = isReturnTrip
      ? " from the farm to the market."
      : " from the market to the farm.";

    let concatenatedTripDescription = prefix + itemWeAreCarrying + suffix;

    result.push(concatenatedTripDescription);
  }

  if (trip.length === 0) {
    result.push("No suitable routes found.");
  }

  return result;
};
