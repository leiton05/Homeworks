import { RegisterForm } from "../components/auth/RegisterForm";
import { HomeButton } from "../components/HomeButton";
import puzzle from "../assets/svg/puzzle.svg";
import "../index.css";

function RegisterPage() {
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
          <h1>Regístrate</h1>
          <p>Bienvenido a la pagina de Registro</p>
        </div>
        <div className="div-vertical">
          <RegisterForm />
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

export default RegisterPage;
