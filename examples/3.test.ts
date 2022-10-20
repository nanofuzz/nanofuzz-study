import { totalDinnerExpenses } from "./3";

describe("3", () => {
  // This test passes
  test("3a", () => {
    expect(totalDinnerExpenses([10, 0], 0)).toStrictEqual(10);
  });
});
