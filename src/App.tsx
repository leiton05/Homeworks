import { Routes, Route } from "react-router-dom";
import Challenge04 from "./pages/Challenge04";
import Challenge05 from "./pages/Challenge05";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/c4"} element={<Challenge04 />} />
        <Route path={"/c5"} element={<Challenge05 />} />
      </Routes>
    </>
  );
}

export default App;
