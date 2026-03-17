class Stack<item> { 
    private items: item[];
    constructor() {
        this.items = [];
    }

    push(value: item): void {
        this.items.push(value);
    }

    pop(): item | null {
        return this.items.length > 0 ? this.items.pop()! : null;
    }

    peek(): item | null {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    print(): void {
        this.items.slice().reverse().forEach(
            (item: item) => {
                console.log(item)
            }
        )
    }
}

export default Stack;