import { useState } from "react";
import { useAuth } from "./useAuth";
import type { User } from "../models/userType";

export const useRegisterForm = () => {
  const { registerWithEmailAndPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (): Promise<boolean> => {
    if (
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      setError("Completa todos los campos");
      return false;
    }

    const credentials: User = {
      email,
      username,
      password,
    };

    const errorMessage = await registerWithEmailAndPassword(credentials);

    if (errorMessage) {
      setError(errorMessage);
      return false;
    }

    setError("");
    return true;
  };

  return {
    email,
    username,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleUsernameChange,
    handleRegister,
  };
};
