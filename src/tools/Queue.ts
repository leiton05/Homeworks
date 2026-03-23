class Queue<item> {
  private items: item[];
  constructor(items: item[] = []) {
    this.items = items;
  }

  enqueue(item: item): void {
    this.items.push(item);
  }

  dequeue(): item | null {
    return this.items.length > 0 ? this.items.shift()! : null;
  }

  peek(): item | null {
    return this.items.length > 0 ? this.items[0] : null;
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  print(): void {
    this.items.forEach((item) => {
      console.log(item);
    });
  }

  getItems(): item[] {
    return [...this.items];
  }
}

export default Queue;
