import Navbar from "@/shared/components/ui/navigation/Navbar";
import { Header } from "@/shared/components/ui/sections/Header";
import logo from "@/assets/logo.svg";

export const Dashboard = () => {
  return (
    <>
      <Navbar imgUrl={logo} title="Aura Music" alt="Logo de aura music" />
      <Header
        title="Bienvenido/a a Aura Music"
        paragraph="Explora, añade y disfruta de tus canciones favoritas"
      />
    </>
  );
};
