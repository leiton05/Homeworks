import { useState } from "react";
import { BookForm } from "../components/challenge04/BookForm";
import { BookList } from "../components/challenge04/BookList";
import { mockData } from "../data/challenge04/mockData";
import type { Book } from "../models/challenge04/Book";
import Stack from "../tools/Stack";
import folder from "../assets/svg/folder.svg";
import "../index.css";
import Navbar from "../components/Navbar";

/* console.log(mockData) */

function Challenge04() {
  const [stack, setStack] = useState(new Stack<Book>(mockData));
  return (
    <>
      <header>
        <Navbar
          title={"BOOKSTACKS"}
          imgUrl={folder}
          alt={"Imagen de una carpeta morada"}
        />
      </header>
      <div className="challenge-content">
        <p>Coloca tus libros para luego facilmente sacarlos</p>
        <BookForm stack={stack} setStack={setStack} />
        <div className="list-div">
          <h3>Libros en espera:</h3>
          <BookList book={stack} />
        </div>
      </div>
    </>
  );
}

export default Challenge04;
