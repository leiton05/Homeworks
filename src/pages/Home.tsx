import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";
import { LogoutButton } from "../components/auth/LogoutButton";
import mouseSvg from "../assets/svg/mouse.svg";

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
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
          <h1>Segundo Parcial</h1>
          <p>
            Bienvenido al <strong>Segundo parcial</strong>
          </p>
          <p>
            Lugar donde se puede acceder al explorador de archivos realizado por
            por <strong>Sebastian Leiton</strong>
          </p>
          {user ? null : (
            <button onClick={() => navigate("/login")}>Ingresar</button>
          )}

          {user ? (
            <button onClick={() => navigate("/files")}>
              Administrador de archivos
            </button>
          ) : null}

          {user ? <LogoutButton /> : null}
        </div>
      </div>
    </>
  );
}
