type IsWordEqualToCorrectLetters = {
  selectedWord: string;
  correctLetters: string[];
};

export function isWordEqualToCorrectLetters({
  selectedWord,
  correctLetters,
}: IsWordEqualToCorrectLetters): boolean {
  const selectedWordLetters = Array.from(selectedWord.toLowerCase());
  return selectedWordLetters.every((letter) => correctLetters.includes(letter));
}
