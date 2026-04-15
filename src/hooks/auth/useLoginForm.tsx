import { useState } from "react";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
  const { loginWithEmailAndPassword } = useAuth();

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

  const handleLogin = async (): Promise<boolean> => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Completa todos los campos");
      return false;
    }

    const errorMessage = await loginWithEmailAndPassword({
      email,
      password,
    });

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
    handleLogin,
  };
};
