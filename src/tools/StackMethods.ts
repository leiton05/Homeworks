import type { Book } from "../models/Book";
import Stack from "./Stack";

/* Basicamente esta función permite pasar de un arreglo de 
objetos Book a un stack de objetos Book */
export function ArrayToStacks(array: Array<Book>) {
  const BooksStack: Stack<Book> = new Stack();

  array.forEach((element) => {
    BooksStack.push(element);
  });

  return BooksStack;
}
