import { useNavigate } from "react-router-dom";
import mouseSvg from "../assets/svg/mouse.svg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-div">
        <div>
          <img
            src={mouseSvg}
            alt="Imagen de un mouse morado"
            className="home-img"
          />
        </div>
        <div>
          <h1>Graph Center</h1>
          <p>
            Bienvenido a <strong>Graph center</strong>
          </p>
          <p>
            Lugar donde se puede acceder a los challenges de{" "}
            <strong>Sebastian Leiton</strong> relacionados con grafos
          </p>
          <button onClick={() => navigate("/graph")}>Creador de Grafos</button>
        </div>
      </div>
    </>
  );
}

export default Home;
