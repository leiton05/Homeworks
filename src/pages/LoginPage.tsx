import { LoginForm } from "../components/LoginForm";
import { HomeButton } from "../components/HomeButton";
import puzzle from "../assets/svg/puzzle.svg";
import "../index.css";

function LoginPage() {
  return (
    <>
      <div className="form-div-a">
        <div>
          <img
            src={puzzle}
            alt="Imagen de dos piezas de rompecabezas moradas"
            className="img-login"
          />
        </div>
        <div>
          <h1>Iniciar Sesión</h1>
          <p>Bienvenido a la pagina de Inicio de Sesión</p>
        </div>
        <div className="div-vertical">
          <LoginForm />
        </div>
        <div></div>
      </div>
      <div className="btn-home-form">
        <HomeButton />
      </div>
      <div></div>
    </>
  );
}

export default LoginPage;
