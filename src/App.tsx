import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Graph from "./pages/Graph";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/graph"} element={<Graph />} />

        {/* Rutas no encontradas */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
