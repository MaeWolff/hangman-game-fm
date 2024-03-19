import generateRandomIndex from "./generateRandomIndex";
import getWordsByCategory from "./getWordsByCategory";

export default function getRandomWordByCategory(categoryName: string) {
  const wordsByCategory = getWordsByCategory(categoryName);

  const wordsNotAlreadySelected = wordsByCategory.filter(
    ({ selected }) => !selected,
  );

  const randomIndex = generateRandomIndex(wordsNotAlreadySelected.length);
  const randomWord = wordsNotAlreadySelected[randomIndex];
  randomWord.selected = true;

  return { name: randomWord.name.toLowerCase(), selected: true };
}
