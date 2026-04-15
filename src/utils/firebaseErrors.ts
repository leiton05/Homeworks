import { FirebaseError } from "firebase/app";

export const getAuthErrorMessage = (error: unknown): string => {
  // Se coloca esto porque el tipo de error es unknown
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "El correo ya está en uso";

      case "auth/invalid-email":
        return "El correo no es válido";

      case "auth/weak-password":
        return "La contraseña debe tener al menos 6 caracteres";

      case "auth/invalid-credential":
        return "Correo o contraseña incorrectos";

      default:
        return "Error de autenticación";
    }
  }
  return "Error no identificado";
};
