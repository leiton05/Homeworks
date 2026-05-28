import { useMemo } from "react";
import { useTrack } from "../../tracks/hooks/useTrack";
import type { Track } from "../../tracks/interfaces/track.interface";
import { UndirectedGraph } from "../algorithms/UndirectedGraph";

export const useRecommendations = () => {
  const { tracks } = useTrack();

  const graph = useMemo(() => {
    return UndirectedGraph.buildFromTracks(tracks);
  }, [tracks]);

  const getRecommendations = (track: Track) => {
    return [...graph.getNeighbors(track.id)].sort(
      (a, b) => b.popularity - a.popularity,
    );
  };

  return { getRecommendations };
};
