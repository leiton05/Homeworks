import { Button } from "@/shared/components/shadcn/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <img
        src={logo}
        alt="Logo"
        className="
          absolute
          w-[700px]
          opacity-10
          z-0
        "
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Bienvenidos a Aura Music</h1>
        </div>

        <div className="text-center text-6xl">
          <Button size="lg" className="text-2xl px-6 py-6 rounded-lg font-bold">
            <Link to="/dashboard">Ver canciones</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
