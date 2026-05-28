import { Link } from "react-router-dom";
import { Button } from "../../shadcn/button";
import { HomeButton } from "../elements/HomeButton";

interface NavbarProp {
  title: string;
  imgUrl: string;
  alt: string;
  showBackButton?: boolean;
}

function Navbar({ title, imgUrl, alt, showBackButton = false }: NavbarProp) {
  return (
    <div className="relative flex items-center justify-center w-full py-4">
      <div className="absolute left-10">
        {showBackButton && (
          <Button>
            <Link to="/dashboard">Atras</Link>
          </Button>
        )}
      </div>
      <div className="absolute right-10"></div>
      <div className="flex items-center gap-3">
        <img src={imgUrl} alt={alt} className="w-12 h-12" />

        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>

      <div className="absolute right-10">
        <HomeButton />
      </div>
    </div>
  );
}

export default Navbar;
