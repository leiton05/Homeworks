import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";
import { useRegisterForm } from "../../hooks/auth/useRegisterForm";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth/useAuth";

export function RegisterForm() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    email,
    username,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleUsernameChange,
    handleRegister,
  } = useRegisterForm();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegister();
  };

  return (
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
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Escribe tu usuario"
              value={username}
              onChange={handleUsernameChange}
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
              ¿Ya tienes cuenta? <Link to="/login">Ingresa</Link>
            </p>
          </div>

          <div>{error && <p className="error-message-login">{error}</p>}</div>
        </div>

        <button type="submit">Registrarse</button>
      </div>
    </form>
  );
}
