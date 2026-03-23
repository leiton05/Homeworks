import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "../components/LogOutButton";

export function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  return (
    <>
      <h1>PAGINA DE INICIO</h1>
      {isLoggedIn ? null : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}

      {isLoggedIn ? (
        <button onClick={() => navigate("/c4")}>Challenge 04</button>
      ) : null}

      {isLoggedIn ? (
        <button onClick={() => navigate("/c5")}>Challenge 05</button>
      ) : null}

      {isLoggedIn ? <LogoutButton /> : null}
    </>
  );
}
