import { useContext } from "react";
import { AuthContext } from "../context/MyContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("Contexto de autenticación usado fuera de limites");
  }
  return context;
}
