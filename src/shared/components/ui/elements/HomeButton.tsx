import { Link } from "react-router-dom";
import { Button } from "../../shadcn/button";

export function HomeButton() {
  return (
    <>
      <Button>
        <Link to="/">Inicio</Link>
      </Button>
    </>
  );
}
