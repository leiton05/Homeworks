import { useNavigate } from "react-router-dom";

function Challenge04() {
  const navigate = useNavigate();
  return (
    <>
      <h2>CHALLENGE 05 PAGE</h2>
      <button onClick={() => navigate("/")}>Inicio</button>
    </>
  );
}

export default Challenge04;
