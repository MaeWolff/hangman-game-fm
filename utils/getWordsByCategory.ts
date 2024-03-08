import { data } from "./data";

export default function getWordsByCategory(category: string) {
  return data.categories[category];
}
