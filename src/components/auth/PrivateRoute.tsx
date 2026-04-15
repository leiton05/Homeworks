import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};
