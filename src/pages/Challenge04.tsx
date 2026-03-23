import { useState } from "react";
import { BookForm } from "../components/challenge04/BookForm";
import { BookList } from "../components/challenge04/BookList";
import { mockData } from "../data/challenge04/mockData";
import type { Book } from "../models/challenge04/Book";
import Stack from "../tools/Stack";
import { HomeButton } from "../components/HomeButton";
import { LogoutButton } from "../components/LogoutButton";

/* console.log(mockData) */

function Challenge04() {
  const [stack, setStack] = useState(new Stack<Book>(mockData));
  return (
    <>
      <nav className="navbar">
        <HomeButton />
        <h1>BOOKSTACKS</h1>
        <LogoutButton />
      </nav>
      <p>Coloca tus libros para luego facilmente sacarlos</p>
      <BookForm stack={stack} setStack={setStack} />
      <div>
        <h3>Libros en espera:</h3>
        <BookList book={stack} />
      </div>
    </>
  );
}

export default Challenge04;
