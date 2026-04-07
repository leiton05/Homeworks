import { useEffect, useState } from "react";
import { useCollection } from "../firebase/hooks/useCollection";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import type { User, UserNotPass, UserLogin } from "../models/UserType";
import { getAuthErrorMessage } from "../utils/firebaseErrors";

export default function useAuthState() {
  const [user, setUser] = useState<UserNotPass | null>(null);
  const [loading, setLoading] = useState(true);

  const { getById, setById } = useCollection<UserNotPass>("users");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const uid = firebaseUser.uid;

        setUser({
          email: firebaseUser.email || "",
          username: "Usuario",
        });

        try {
          const userData = await getById(uid);

          if (userData) {
            setUser(userData);
          }
        } catch (error) {
          console.log("Error obteniendo usuario de Firestore:", error);
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const registerWithEmailAndPassword = async ({
    email,
    password,
    username,
  }: User): Promise<string | null> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      try {
        await setById(userCredential.user.uid, {
          username,
          email,
        });
      } catch (error) {
        console.log("Error guardando en Firestore:", error);
      }

      return null;
    } catch (err) {
      return getAuthErrorMessage(err);
    }
  };

  const loginWithEmailAndPassword = async (
    credentials: UserLogin,
  ): Promise<string | null> => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );

      return null;
    } catch (err) {
      return getAuthErrorMessage(err);
    }
  };

  const logout = async (): Promise<string | null> => {
    try {
      await signOut(auth);
      return null;
    } catch {
      return "No se pudo cerrar sesión. Intenta nuevamente.";
    }
  };

  const getUserId = (): string | undefined => {
    return auth.currentUser?.uid;
  };

  return {
    user,
    loading,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
    getUserId,
  };
}
