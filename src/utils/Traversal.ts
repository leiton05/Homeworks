import Node from "../tools/tree/Node";

export const inorder = (node: Node<number> | null): number[] => {
  if (!node) return [];
  return [...inorder(node.left), node.value, ...inorder(node.right)];
};

export const preorder = (node: Node<number> | null): number[] => {
  if (!node) return [];
  return [node.value, ...preorder(node.left), ...preorder(node.right)];
};

export const postorder = (node: Node<number> | null): number[] => {
  if (!node) return [];
  return [...postorder(node.left), ...postorder(node.right), node.value];
};
