const total = require("./total");

// Create module that takes prices in array and results total
describe("Total Module Test", () => {
  test("As a user, I want to get the total after submitting various prices.", () => {
    expect(total([2.5, 78.12, 12.89])).toEqual(93.51);
  });
});
