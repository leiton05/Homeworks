import Navbar from "@/shared/components/ui/navigation/Navbar";
import logo from "@/assets/logo.svg";
import { BGCard } from "@/shared/components/ui/elements/BGCard";

export const Dashboard = () => {
  return (
    <>
      <Navbar imgUrl={logo} title="Aura Music" alt="Logo de aura music" />
      <div className="flex flex-col items-center justify-center">
        <h2>Es hora de escoger que quieres explorar</h2>
      </div>
      <div className="flex justify-center items-center gap-10 mt-16">
        <BGCard
          description="Explora nuestra colección de música"
          buttonTag="Explorar"
          link="/library"
        />
        <BGCard
          description="Descubre que canciones en tendencia"
          buttonTag="Descubrir"
          link="/recommendations"
        />
      </div>
    </>
  );
};
