import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import { Dashboard } from "@/pages/Dashboard";
import { Library } from "@/pages/Library";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas principales */}
      <Route path="/" element={<Home />} />

      {/* Layout común para las siguientes rutas */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};
