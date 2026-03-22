import { useNavigate } from "react-router-dom";

function Challenge05() {
  const navigate = useNavigate();
  return (
    <>
      <h2>CHALLENGE 04 PAGE</h2>
      <button onClick={() => navigate("/")}>Inicio</button>
    </>
  );
}

export default Challenge05;
