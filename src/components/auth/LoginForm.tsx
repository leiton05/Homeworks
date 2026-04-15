import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";
import { useLoginForm } from "../../hooks/auth/useLoginForm";

export function LoginForm() {
  const navigate = useNavigate();

  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await handleLogin();

    if (success) {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-div">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Escribe tu correo"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Escribe tu contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <p className="confirmation-text">
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
              </p>
            </div>

            <div>{error && <p className="error-message-login">{error}</p>}</div>
          </div>

          <button type="submit">Ingresar</button>
        </div>
      </form>
    </>
  );
}
