import notFound from "../assets/svg/notFound.svg";
import { HomeButton } from "../components/HomeButton";

export function NotFound() {
  return (
    <>
      <div className="home-div">
        <div>
          <img src={notFound} alt="Imagen de error 404" className="home-img" />
        </div>
        <div>
          <h1>PAGINA NO ENCONTRADA</h1>
          <p>Holi, bievenid@ a este espacio seguro :D</p>
          <HomeButton />
        </div>
      </div>
    </>
  );
}
