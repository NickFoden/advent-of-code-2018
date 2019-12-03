const PUZZLE_INPUT = require("./input");
const frequencyCalculator = require("./day1");

describe("Day 1", () => {
  test("Example 1", () => {
    expect(frequencyCalculator(["+1", "+1", "+1"])).toEqual(3);
  });
  test("Example 2", () => {
    expect(frequencyCalculator(["+1", "+1", "-2"])).toEqual(0);
  });
  test("Example 3", () => {
    expect(frequencyCalculator(["-1", "-2", "-3"])).toEqual(-6);
  });
  test("Solve", () => {
    expect(frequencyCalculator(PUZZLE_INPUT)).toEqual(416);
  });
});
