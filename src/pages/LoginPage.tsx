import { LoginForm } from "../components/LoginForm";
import { HomeButton } from "../components/HomeButton";

function LoginPage() {
  return (
    <>
      <h1>PAGINA DE LOGIN</h1>
      <p>Bienvenido a la pagina de Login, ingrese sus datos</p>
      <div>
        <HomeButton />
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
