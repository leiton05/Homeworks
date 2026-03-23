import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>PAGINA DE INICIO</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/c4")}>Challenge 04</button>
      <button onClick={() => navigate("/c5")}>Challenge 05</button>
    </>
  );
}
