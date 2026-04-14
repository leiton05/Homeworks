import Node from "./Node";

class NaryTree<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T, parentValue?: T) {
    const newNode = new Node(value);

    // Si no hay raíz, el nuevo nodo será la raíz
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Si se especifica un padre, se busca un nodo que coincida con ese valor y se le asigna un hijo que es newNode
    if (parentValue !== undefined) {
      const parentNode = this.find(this.root, parentValue);
      if (parentNode) {
        parentNode.addChild(newNode);
      } else {
        throw new Error(`Parent with value ${parentValue} not found`);
      }
    } else {
      // Si no se especifica padre se agrega como hijo del root
      this.root.addChild(newNode);
    }
  }

  private find(node: Node<T>, value: T): Node<T> | null {
    // suponiendo que T tiene un campo Link (no supe como hacerlo de otra manera)
    if ((node.value as any).link === (value as any).link) return node;

    for (const child of node.children) {
      const found = this.find(child, value);
      if (found) return found;
    }

    return null;
  }
}

export default NaryTree;
