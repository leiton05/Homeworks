import Navbar from "@/shared/components/ui/navigation/Navbar";
import logo from "@/assets/logo.svg";
import { CreateTrackDialog } from "@/features/tracks/components/CreateTrackDialog";
import { TrackList } from "@/features/tracks/components/TrackList";
import { useTrack } from "@/features/tracks/hooks/useTrack";

export const Library = () => {
  //* Contexts
  const { tracks } = useTrack();
  return (
    <>
      <Navbar imgUrl={logo} title="Aura Music" alt="Logo de aura music" />
      <div className="flex flex-col items-center justify-center">
        <h2>
          Explora nuestro catalogo de canciones y descubre tu nueva canción
          favorita
        </h2>
        <div className="mt-5">
          <CreateTrackDialog />
        </div>
      </div>
      <div className="mt-5">
        <TrackList tracks={tracks} />
      </div>
    </>
  );
};
