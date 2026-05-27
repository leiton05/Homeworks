import { Link } from "react-router-dom";
import { Button } from "../../shadcn/button";

interface BGCardProps {
  description: string;
  buttonTag: string;
  link: string;
}

export const BGCard = ({ description, buttonTag, link }: BGCardProps) => {
  return (
    <div className="w-100 h-90 rounded-2xl bg-zinc-800 shadow-lg flex flex-col items-center">
      <p className="text-center text-4xl mt-10 px-6">{description}</p>

      <Button className="text-2xl mt-10 px-6 py-6 font-bold">
        <Link to={link}>{buttonTag}</Link>
      </Button>
    </div>
  );
};
