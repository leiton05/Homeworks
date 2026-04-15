import Node from "./Node";

class NaryTree<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T, parentName?: string) {
    const newNode = new Node(value);

    // Si no hay raíz, el nuevo nodo será la raíz
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Si se especifica un padre, se busca un nodo que coincida con ese valor y se le asigna un hijo que es newNode
    if (parentName !== undefined) {
      const parentNode = this.find(this.root, parentName);
      if (parentNode) {
        parentNode.addChild(newNode);
      } else {
        throw new Error(`Parent with name ${parentName} not found`);
      }
    } else {
      // Si no se especifica padre se agrega como hijo del root
      this.root.addChild(newNode);
    }
  }

  findNode(name: string): Node<T> | null {
    if (!this.root) return null;
    return this.find(this.root, name);
  }

  private find(node: Node<T>, name: string): Node<T> | null {
    if ((node.value as any).name === name) return node;
    for (const child of node.children) {
      const found = this.find(child, name);
      if (found) return found;
    }
    return null;
  }
}

export default NaryTree;
