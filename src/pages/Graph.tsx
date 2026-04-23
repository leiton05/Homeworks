import Navbar from "../components/Navbar";
import puzzle from "../assets/svg/puzzle.svg";

function Graph() {
  return (
    <>
      <Navbar
        title="Creador de Grafo"
        imgUrl={puzzle}
        alt="Imagen de un pedazo de rompecabezas morado"
      />
    </>
  );
}

export default Graph;
