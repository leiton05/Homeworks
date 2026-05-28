import { TopTrackCard } from "./TopTrackCard";

import { useTopTracks } from "../hooks/useTopTrack";

export const TopTrackList = () => {
  const { topTracks } = useTopTracks();

  return (
    <div className="flex flex-col gap-4 w-full mt-6">
      {topTracks.map((track, index) => (
        <TopTrackCard key={track.id} track={track} position={index + 1} />
      ))}
    </div>
  );
};
