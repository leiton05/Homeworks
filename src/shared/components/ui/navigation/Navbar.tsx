import { HomeButton } from "../elements/HomeButton";

interface NavbarProp {
  title: string;
  imgUrl: string;
  alt: string;
}

function Navbar({ title, imgUrl, alt }: NavbarProp) {
  return (
    <div className="relative flex items-center justify-center w-full py-4">
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
