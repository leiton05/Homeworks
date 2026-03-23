import { useNavigate } from "react-router-dom";

export function HomeButton() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Inicio</button>
    </>
  );
}
