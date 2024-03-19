import { test, expect, describe } from "vitest";
import getWordsByCategory from "../functions/getWordsByCategory";

describe(getWordsByCategory.name, () => {
  test("returns an array of objects with name and selected properties", () => {
    const selectedCategory = "Movies";
    const words = getWordsByCategory(selectedCategory);

    expect(Array.isArray(words)).toBe(true);

    words.forEach((word) => {
      expect(typeof word.name).toBe("string");
      expect(typeof word.selected).toBe("boolean");
    });
  });

  test("returns undefined for non-existing category", () => {
    const selectedCategory = "NonExistingCategory";
    const result = getWordsByCategory(selectedCategory);
    expect(result).toBeUndefined();
  });
});
