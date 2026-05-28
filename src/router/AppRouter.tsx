import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Library, TopSongs } from "@/pages";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas principales */}
      <Route path="/" element={<Home />} />

      {/* Layout común para las siguientes rutas */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/library" element={<Library />} />
      <Route path="/recommendations" element={<TopSongs />} />
    </Routes>
  );
};
