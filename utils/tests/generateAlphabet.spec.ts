import { expect, test } from "vitest";
import generateAlphabet from "../functions/generateAlphabet";

test(generateAlphabet.name, () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const result = generateAlphabet();
  expect(result).toEqual(alphabet);
});
