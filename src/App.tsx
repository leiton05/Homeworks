import "./App.css";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { mockData } from "./data/mockData";
import type { Book } from "./models/Book";
import type Stack from "./tools/Stack";
import { ArrayToStacks } from "./tools/StackMethods";

/* console.log(mockData) */

/* Convierto el Arreglo de la mockData de los libros y lo paso 
a que sea un Stack */
const BookStack: Stack<Book> = ArrayToStacks(mockData);
console.log(BookStack.print());

function App() {
  return (
    <>
      <h1>BOOKSTACKS</h1>
      <p>Coloca tus libros para luego facilmente sacarlos</p>
      <BookForm />
      <h3>Libros en espera:</h3>
      <BookList book={BookStack} />
    </>
  );
}

export default App;
