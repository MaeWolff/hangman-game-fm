import { test, expect } from "vitest";
import getCategoriesName from "../functions/getCategoriesName";

test(getCategoriesName.name, () => {
  const expectedCategories = [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];
  const result = getCategoriesName();
  expect(result).toEqual(expectedCategories);
});
