import Navbar from "@/shared/components/ui/navigation/Navbar";
import logo from "@/assets/logo.svg";
import { CreateTrackDialog } from "@/features/tracks/components/CreateTrackDialog";
import { TrackList } from "@/features/tracks/components/TrackList";
import { useTrack } from "@/features/tracks/hooks/useTrack";
import { TrackSearch } from "@/features/tracks/components/TrackSearch";
import { useTrackSearch } from "@/features/tracks/hooks/useTrackSearch";

export const Library = () => {
  //* Contexts
  const { tracks } = useTrack();

  //* Custom hooks
  const { query, open, results, suggestions, handleChange, handleSelect } =
    useTrackSearch();

  //* Variables
  const tracksToShow = query ? results : tracks;
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
      <div className="mt-5 ml-5 mr-5">
        <TrackSearch
          input={query}
          open={open}
          suggestions={suggestions}
          onChange={handleChange}
          onSelect={handleSelect}
        />
        <TrackList tracks={tracksToShow} />
      </div>
    </>
  );
};
