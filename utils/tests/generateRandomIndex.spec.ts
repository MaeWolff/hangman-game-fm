import { describe, expect, it } from "vitest";
import generateRandomIndex from "../generateRandomIndex";

describe(generateRandomIndex.name, () => {
  it("returns a number within the specified range", () => {
    const maxLength = 12;

    const randomIndex = generateRandomIndex(maxLength);
    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThan(maxLength);
  });

  it("returns a number when maxLength is 0", () => {
    const maxLength = 0;

    const randomIndex = generateRandomIndex(maxLength);
    expect(randomIndex).toEqual(0);
  });
});
