import { useState } from "react";
import { BookForm } from "../components/challenge04/BookForm";
import { BookList } from "../components/challenge04/BookList";
import { mockData } from "../data/challenge04/mockData";
import type { Book } from "../models/challenge04/Book";
import Stack from "../tools/Stack";
import { HomeButton } from "../components/HomeButton";
import { LogoutButton } from "../components/LogoutButton";
import folder from "../assets/svg/folder.svg";
import "../index.css";

/* console.log(mockData) */

function Challenge04() {
  const [stack, setStack] = useState(new Stack<Book>(mockData));
  return (
    <>
      <div className="top-elements-challenges">
        <HomeButton />
        <div className="top-elements-challenges">
          <img
            src={folder}
            alt="Imagen de una carpeta morada"
            className="img-tool"
          />
          <h1>BOOKSTACKS</h1>
        </div>
        <LogoutButton />
      </div>
      <div className="challenge-content">
        <p>Coloca tus libros para luego facilmente sacarlos</p>
        <BookForm stack={stack} setStack={setStack} />
        <div className="form-div challenge-content">
          <h3>Libros en espera:</h3>
          <BookList book={stack} />
        </div>
      </div>
    </>
  );
}

export default Challenge04;
