import Navbar from "../components/Navbar";
import folder from "../assets/svg/folder.svg";

function FilesDashboard() {
  return (
    <>
      <header>
        <Navbar
          imgUrl={folder}
          title="Administrador de archivos"
          alt="imagen de una carpeta morada"
        />
      </header>
    </>
  );
}

export default FilesDashboard;
