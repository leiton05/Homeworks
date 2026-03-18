import { useState } from "react";
import "./App.css";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { mockData } from "./data/mockData";
import type { Book } from "./models/Book";
import Stack from "./tools/Stack";

/* console.log(mockData) */

function App() {
  const [stack, setStack] = useState(new Stack<Book>(mockData));
  return (
    <>
      <h1>BOOKSTACKS</h1>
      <p>Coloca tus libros para luego facilmente sacarlos</p>
      <BookForm stack={stack} setStack={setStack} />
      <div
        style={{
          backgroundColor: "#3d3d3d",
          padding: 13,
          margin: 13,
          borderRadius: 16,
        }}
      >
        <h3>Libros en espera:</h3>
        <BookList book={stack} />
      </div>
    </>
  );
}

export default App;
