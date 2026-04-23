import { HomeButton } from "./HomeButton";

interface NavbarProp {
  title: string;
  imgUrl: string;
  alt: string;
}

function Navbar({ title, imgUrl, alt }: NavbarProp) {
  return (
    <>
      <div className="top-elements-challenges main-navbar">
        <HomeButton />
        <div className="top-elements-challenges">
          <img src={imgUrl} alt={alt} className="img-tool" />
          <h1>{title}</h1>
        </div>
        <div>
          <HomeButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
