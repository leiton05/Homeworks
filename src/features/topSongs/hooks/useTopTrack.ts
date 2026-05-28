import { useMemo } from "react";

import { useTrack } from "../../tracks/hooks/useTrack";

import { MaxHeap } from "../algorithms/MaxHeap";

export const useTopTracks = () => {
  const { tracks } = useTrack();

  const topTracks = useMemo(() => {
    const heap = new MaxHeap(tracks);

    return heap.getTopTracks(5);
  }, [tracks]);

  return {
    topTracks,
  };
};
