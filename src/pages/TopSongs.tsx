import Navbar from "@/shared/components/ui/navigation/Navbar";
import logo from "@/assets/logo.svg";
import { TopTrackList } from "@/features/topSongs/components/TopTrackList";

export const TopSongs = () => {
  return (
    <>
      <Navbar imgUrl={logo} title="Aura Music" alt="Logo de aura music" />
      <div className="flex flex-col items-center justify-center">
        <h2>Es hora de escoger que quieres explorar</h2>
      </div>
      <div className="flex justify-center items-center gap-10 mt-8">
        <div className="w-110 h-170 rounded-2xl bg-zinc-800 shadow-lg flex flex-col items-center">
          <h2 className="font-bold text-xl mt-4">Top Canciones</h2>
          <TopTrackList />
        </div>
        <div className="w-110 h-170 rounded-2xl bg-zinc-800 shadow-lg flex flex-col items-center"></div>
      </div>
    </>
  );
};
