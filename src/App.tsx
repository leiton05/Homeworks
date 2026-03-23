import { Routes, Route } from "react-router-dom";
import Challenge04 from "./pages/Challenge04";
import Challenge05 from "./pages/Challenge05";
import { Home } from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<LoginPage />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path={"/c4"} element={<Challenge04 />} />
          <Route path={"/c5"} element={<Challenge05 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
