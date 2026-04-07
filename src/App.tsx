import { Routes, Route } from "react-router-dom";
import Challenge04 from "./pages/Challenge04";
import Challenge05 from "./pages/Challenge05";
import { Home } from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import { NotFound } from "./pages/NotFound";
import { Tasks } from "./pages/Tasks";

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
          <Route path={"/c4"} element={<Challenge04 />} />
          <Route path={"/c5"} element={<Challenge05 />} />
          <Route path={"/tasks"} element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
