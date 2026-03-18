import type { Book } from "../models/Book";
import Stack from "../tools/Stack";

interface BookListProps {
  book: Stack<Book>;
}

export function BookList({ book }: BookListProps) {
  const books = book.getItems();

  /* Espero que este HTML sea decente, porque no sé mucho de HTML */
  return (
    <>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            <div>
              {book.name} - Autor {book.author}
            </div>
            <div>
              ISBN: {book.isbn} - Editorial: {book.editorial}
            </div>
            <p></p>
          </li>
        ))}
      </ol>
    </>
  );
}
