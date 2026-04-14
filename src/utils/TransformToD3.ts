import Node from "../tools/tree/Node";

export const TransformToD3 = (node: Node<any> | null): any => {
  if (!node) return null;

  return {
    name: node.value.toString(),
    children: [TransformToD3(node.left), TransformToD3(node.right)].filter(
      Boolean,
    ),
  };
};
