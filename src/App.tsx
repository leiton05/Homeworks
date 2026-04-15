import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import { NotFound } from "./pages/NotFound";
import FilesDashboard from "./pages/FilesDahsboard";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />

        {/* Rutas no encontradas */}
        <Route path={"*"} element={<NotFound />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path={"/files"} element={<FilesDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
