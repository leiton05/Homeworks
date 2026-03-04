import { Node } from "./Node";

export class LinkedList {
    head: any; tail: any; lenght: any;
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    append(value: any) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode
        }

        this.tail = newNode
        this.lenght ++;
    }

    peek(value: any, current = this.head) {
        while(current) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    size() {
        return this.lenght;
    }

    remove(value: any, current = this.head) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;

            if (!this.head) {
                this.tail = null;
            }

            this.lenght--;
            return;
        }
        
        current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            if (!current.next) this.tail = current;
            this.lenght--;
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next
        }
        console.log(result + "null")
    }

    toArray() {
        let current = this.head;
        let tempArray = []
        while (current) {
            tempArray.push(current.value)
            current = current.next
        }

        return tempArray;
    }
}