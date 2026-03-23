import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "../components/LogoutButton";
import mouseSvg from "../assets/svg/mouse.svg";

export function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
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
          <h1>Challenge Center</h1>
          <p>
            Bienvenido a <strong>Challenge center</strong>
          </p>
          <p>
            Lugar donde se puede acceder a los distintos Challenges realizado
            por <strong>Sebastian Leiton</strong>
          </p>
          {isLoggedIn ? null : (
            <button onClick={() => navigate("/login")}>Ingresar</button>
          )}

          {isLoggedIn ? (
            <button onClick={() => navigate("/c4")}>Challenge 04</button>
          ) : null}

          {isLoggedIn ? (
            <button onClick={() => navigate("/c5")}>Challenge 05</button>
          ) : null}

          {isLoggedIn ? <LogoutButton /> : null}
        </div>
      </div>
    </>
  );
}
