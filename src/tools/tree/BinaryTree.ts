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
}

export default BinaryTree;
