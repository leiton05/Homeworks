import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>PAGINA DE LOGIN</h1>
      <p>Bienvenido a la pagina de Login, ingrese sus datos</p>
      <div>
        <button onClick={() => navigate("/")}>Inicio</button>
      </div>
    </>
  );
}

export default LoginPage;
