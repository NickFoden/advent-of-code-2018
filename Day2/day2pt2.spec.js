const DATA = require("./input");
const checkSum = require("./day2pt2");

const TEST_ONE = [
  "abcde",
  "fghij",
  "klmno",
  "pqrst",
  "fguij",
  "axcye",
  "wvxyz"
];

describe("Day 2", () => {
  test("Part 2", () => {
    expect(checkSum(DATA)).toEqual("omlvgdokxfncvqyersasjziup");
  });
});
