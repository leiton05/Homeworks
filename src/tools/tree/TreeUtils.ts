import BinaryTree from "./BinaryTree";

export function stringToTree(numbers: string) {
  const arrayNumbers = numbers
    .replace(/\s+/g, " ")
    .split(" ")
    .map(Number)
    .filter((n) => !isNaN(n));
  let numbersTree = new BinaryTree<number>();
  for (let i = 0; i < arrayNumbers.length; i++) {
    numbersTree.insert(arrayNumbers[i]);
  }
  return numbersTree;
}
