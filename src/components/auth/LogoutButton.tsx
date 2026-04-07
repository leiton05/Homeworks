import { useAuth } from "../../hooks/auth/useAuth";

export function LogoutButton() {
  const { logout } = useAuth();
  return (
    <>
      <button onClick={logout}>Salir</button>
    </>
  );
}
