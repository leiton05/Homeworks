import { useState } from "react";
import type { Book } from "../../models/challenge04/Book";
import Stack from "../../tools/Stack";

interface BookFormProp {
  stack: Stack<Book>;
  setStack: (stack: Stack<Book>) => void;
}

export function BookForm({ stack, setStack }: BookFormProp) {
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");

  const takeBook = () => {
    if (stack.isEmpty()) {
      console.log("No hay libros restantes");
      return;
    }

    const items = stack.getItems();
    items.pop();
    const newStack = new Stack<Book>(items);
    setStack(newStack);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Submiiiiiit");

    e.preventDefault();

    const newBook: Book = {
      name: name,
      isbn: isbn,
      author: author,
      editorial: editorial,
    };

    const newStack = new Stack<Book>([...stack.getItems(), newBook]);
    setStack(newStack);

    setName("");
    setIsbn("");
    setAuthor("");
    setEditorial("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <input
            type="text"
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Editorial"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
          />
        </div>
        <div className="btn-center">
          <button type="submit">Agregar Libro</button>
          <button type="button" onClick={takeBook}>
            Tomar Libro
          </button>
        </div>
      </form>
    </>
  );
}
