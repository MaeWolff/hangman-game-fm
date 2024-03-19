import { data } from "../data";

export default function getCategoriesName() {
  return Object.keys(data.categories);
}
