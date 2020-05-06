import doCalculate from "./calculator";
test("empty test", () => {
  expect(true).toBe(true);
});
test("given three bags of corn, the farmer is shown '1.25'", () => {
  expect(doCalculate(3)).toBe(1.25);
});
test("given 0 bags of corn, the farmer is show '0'", () => {
  expect(doCalculate(0)).toBe(0);
});
