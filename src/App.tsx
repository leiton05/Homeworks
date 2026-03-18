import './App.css'
import { BookForm } from './components/BookForm'
import { BookList } from './components/BookList'
import { mockData } from './data/mockData'

/* console.log(mockData) */

function App() {
  return (
    <>
      <h1>BOOKSTACKS</h1>
      <p>Coloca tus libros para luego facilmente sacarlos</p>
      <BookForm/>
      <p>Libros en espera:</p>
      {/* <BookList/> */}
    </>
  )
}

export default App
