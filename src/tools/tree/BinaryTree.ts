import Node from "./Node";

class BinaryTree<T extends number> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let actual = this.root;
    while (true) {
      if (value < actual.value) {
        if (!actual.left) {
          actual.left = newNode;
          return;
        }
        actual = actual.left;
      } else {
        if (!actual.right) {
          actual.right = newNode;
          return;
        }
        actual = actual.right;
      }
    }
  }

  inOrder(node: Node<T> | null, result: T[] = []): T[] {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  preOrder(node: Node<T> | null, result: T[] = []): T[] {
    if (!node) return result;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  postOrder(node: Node<T> | null, result: T[] = []): T[] {
    if (!node) return result;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
    return result;
  }
}

export default BinaryTree;
