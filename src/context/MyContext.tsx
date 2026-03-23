import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextProp {
  userEmail: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

interface AuthProviderProp {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProp | null>(null);

export function AuthProvider({ children }: AuthProviderProp) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email == "user@mail.com" && password == "123") {
      setUser(email);
      localStorage.setItem("user", email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        userEmail: user,
        isLoggedIn: user !== null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
