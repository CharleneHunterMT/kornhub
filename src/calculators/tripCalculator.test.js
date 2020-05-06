import doTripCalculation from "./tripCalculator";
test("empty test", () => {
  expect(true).toBe(true);
});
test("given zero geese and one corn, the farmer is shown one trip", () => {
  expect(doTripCalculation(0, 1)).toBe(1);
});
test("given zero geese and two corn, the farmer is shown three trips", () => {
  expect(doTripCalculation(0, 2)).toBe(3);
});
test("given one goose and one corn, the farmer is shown three trips", () => {
  expect(doTripCalculation(1, 1)).toBe(3);
});
test("given one goose and two corn, the farmer is shown seven trips", () => {
  expect(doTripCalculation(1, 2)).toBe(7);
});
test("given two goose and one corn, the farmer is shown seven trips", () => {
  expect(doTripCalculation(2, 1)).toBe(7);
});
