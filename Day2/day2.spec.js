const DATA = require("./input");
const checkSum = require("./day2");

describe("Day 2", () => {
  test("Part 1", () => {
    expect(checkSum(DATA)).toEqual(7105);
  });
});
