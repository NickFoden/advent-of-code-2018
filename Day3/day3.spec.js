const compute = require("./day3");
// const DATA = require("./input.txt");

describe("Day 3", () => {
  test("Cloth test one", () => {
    expect(
      compute(`#1 @ 1,3: 4x4
            #2 @ 3,1: 4x4
            #3 @ 5,5: 2x2`)
    ).toEqual(4);
  });
});
