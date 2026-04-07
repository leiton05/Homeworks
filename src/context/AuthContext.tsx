import { createContext, type ReactNode } from "react";
import type { UserNotPass, UserLogin, User } from "../models/UserType";
import useAuthState from "../hooks/auth/useAuthState";

interface AuthContextProps {
  user: UserNotPass | null;
  loading: boolean;
  registerWithEmailAndPassword: (userInfo: User) => Promise<string | null>;
  loginWithEmailAndPassword: (userInfo: UserLogin) => Promise<string | null>;
  logout: () => Promise<string | null>;
  getUserId: () => string | undefined;
}

interface Provider {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: Provider) => {
  const contextData = useAuthState();

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
