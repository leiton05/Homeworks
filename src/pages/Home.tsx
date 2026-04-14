import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";
import { LogoutButton } from "../components/auth/LogoutButton";
import mouseSvg from "../assets/svg/mouse.svg";
import { useState } from "react";

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [explore, setExplore] = useState<boolean>(false);
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
          {user ? null : (
            <button onClick={() => navigate("/login")}>Ingresar</button>
          )}

          {user ? (
            <button onClick={() => navigate("/c4")}>Challenge 04</button>
          ) : null}

          {user ? (
            <button onClick={() => navigate("/c5")}>Challenge 05</button>
          ) : null}

          {user ? (
            <button onClick={() => navigate("/tasks")}>Task It Up</button>
          ) : null}

          {explore || user ? (
            <button onClick={() => navigate("/tree")}>Impresor de Arbol</button>
          ) : null}

          {explore || user ? (
            <button onClick={() => navigate("/treeMenu")}>Menú de Arbol</button>
          ) : null}

          {user ? <LogoutButton /> : null}

          {user || explore ? null : (
            <button
              className="button-no-account"
              onClick={() => setExplore(true)}
            >
              Explorar sin cuenta
            </button>
          )}
        </div>
      </div>
    </>
  );
}
