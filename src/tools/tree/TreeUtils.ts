import BinaryTree from "./BinaryTree";
import type Node from "./Node";

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

export function checkValueInTree(
  node: Node<number> | null,
  number: number,
): boolean {
  if (!node) return false;
  if (number === node.value) return true;
  return (
    checkValueInTree(node.left, number) || checkValueInTree(node.right, number)
  );
}
