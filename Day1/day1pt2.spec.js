const PUZZLE_INPUT = require("./input");
const frequencyCalculator = require("./day1pt2");

describe("Day 1 Part 2", () => {
  test("Example 1", () => {
    expect(frequencyCalculator(["+1", "-1"])).toEqual(0);
  });
  test("Example 2", () => {
    expect(frequencyCalculator(["+3", "+3", "+4", "-2", "-4"])).toEqual(10);
  });
  test("Example 3", () => {
    expect(frequencyCalculator(["+7", "+7", "-2", "-7", "-4"])).toEqual(14);
  });
  test("Solve", () => {
    expect(frequencyCalculator(PUZZLE_INPUT)).toEqual(56752);
  });
});
