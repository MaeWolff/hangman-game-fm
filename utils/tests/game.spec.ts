import { describe, it, expect } from "vitest";
import { isWordEqualToCorrectLetters } from "../game";

describe(isWordEqualToCorrectLetters.name, () => {
  it("returns true if the word is equal to the correct letters", () => {
    const selectedWord = "hello";
    const correctLetters = ["h", "e", "l", "o"];

    const result = isWordEqualToCorrectLetters({
      selectedWord,
      correctLetters,
    });

    expect(result).toBe(true);
  });

  it("returns false if the word doesn't contain all correct letters", () => {
    const selectedWord = "hello";
    const correctLetters = ["h", "e", "l"];

    const result = isWordEqualToCorrectLetters({
      selectedWord,
      correctLetters,
    });

    expect(result).toBe(false);
  });

  it("returns false if correctLetters is empty", () => {
    const selectedWord = "hello";
    const correctLetters = [] as string[];

    const result = isWordEqualToCorrectLetters({
      selectedWord,
      correctLetters,
    });

    expect(result).toBe(false);
  });
});
