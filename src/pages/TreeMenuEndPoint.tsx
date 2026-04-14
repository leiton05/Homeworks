import Navbar from "../components/Navbar";
import leave from "../assets/img/leave.png";
import { useLocation } from "react-router-dom";
import { getLastSegment } from "../utils/UtilURL";

function TreeMenuEndPoint() {
  const location = useLocation();
  const title = getLastSegment(location.pathname);

  return (
    <>
      <header>
        <Navbar
          title={"Menú de Árbol"}
          imgUrl={leave}
          alt={"Imagen de dos hojas moradas"}
        />
      </header>
      <div className="div-center">
        <h3>
          Bienvenido al apartado de{" "}
          <strong className="dark-purple-text">{title}</strong>
        </h3>
      </div>
    </>
  );
}

export default TreeMenuEndPoint;
