import doTripCalculation from "./tripCalculator";

test("testing framework is working", () => {
  expect(true).toBe(true);
});

test("given zero geese and zero corn, the farmer is shown no routes", () => {
  expect(doTripCalculation(0, 0)).toEqual([]);
});

test("given three geese and three corns, the farmer is shown no routes", () => {
  expect(doTripCalculation(3, 3)).toEqual([]);
});

test("given zero geese and one corn, the farmer is shown one route with one trip", () => {
  expect(doTripCalculation(0, 1)).toEqual([["C"]]);
});

test("given zero geese and two corn, the farmer is shown one route with three trips", () => {
  expect(doTripCalculation(0, 2)).toEqual([["C", "", "C"]]);
});

test("given zero corn and two geese, the farmer is shown one route with three trips", () => {
  expect(doTripCalculation(2, 0)).toEqual([["G", "", "G"]]);
});

test("given one goose and one corn, the farmer is shown one route with three trips", () => {
  expect(doTripCalculation(1, 1)).toEqual([
    ["C", "", "G"],
    ["G", "", "C"],
  ]);
});

test("given one goose and two corn, the farmer is shown one route with seven trips", () => {
  expect(doTripCalculation(1, 2)).toEqual([["G", "", "C", "G", "C", "", "G"]]);
});

test("given two goose and one corn, the farmer is shown one route seven trips", () => {
  expect(doTripCalculation(2, 1)).toEqual([["C", "", "G", "C", "G", "", "C"]]);
});

test("given one fox, the farmer is shown one route with one trip", () => {
  expect(doTripCalculation(0, 0, 1)).toEqual([["F"]]);
});

test("given several foxes, the farmer is shown one route with several fox trips", () => {
  expect(doTripCalculation(0, 0, 3)).toEqual([["F", "", "F", "", "F"]]);
});

test("given 2 foxes, two geese, 2 corn the farmer is shown no routes", () => {
  expect(doTripCalculation(2, 2, 2)).toEqual([]);
});

test("given 200 foxes, 1 geese, 1 corn the farmer is shown no routes", () => {
  expect(doTripCalculation(1, 1, 200)).toEqual([]);
});

test("given 200 foxes, 1 geese, 1 corn the farmer is shown no routes", () => {
  expect(doTripCalculation(1, 1, 200)).toEqual([]);
});