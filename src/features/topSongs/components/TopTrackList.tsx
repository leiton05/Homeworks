import { TopTrackCard } from "./TopTrackCard";

import type { Track } from "@/features/tracks/interfaces/track.interface";

interface TopTrackListProps {
  tracks: Track[];
  isToRecommend?: boolean;
  setRecommendedTracks?: React.Dispatch<React.SetStateAction<Track[]>>;
}

export const TopTrackList = ({
  tracks,
  isToRecommend,
  setRecommendedTracks,
}: TopTrackListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full mt-6">
      {tracks.map((track, index) => (
        <TopTrackCard
          key={track.id}
          track={track}
          position={index + 1}
          isToRecommend={isToRecommend}
          setRecommendedTracks={setRecommendedTracks}
        />
      ))}
    </div>
  );
};
