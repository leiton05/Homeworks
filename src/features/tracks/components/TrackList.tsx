import { useState, useMemo, useEffect } from "react";
import { TrackCard } from "./TrackCard";
import { getVisibleNodes } from "../utils/utils";
import { PAGE_SIZE, VISIBLE_PAGES } from "../constants/track.constants";
import type { Track } from "../interfaces/track.interface";
import DoubleCircularLinkedList from "@/shared/algorithms/doubleCircularLinkedList/DoubleCircularLinkedList";
import { Button } from "@/shared/components/shadcn/button";

interface Props {
  tracks?: Track[];
  pageSize?: number;
  listClassName?: string;
}

export function TrackList({
  tracks = [],
  pageSize = PAGE_SIZE,
  listClassName = "flex flex-wrap gap-4",
}: Props) {
  const tracksList = useMemo(
    () => new DoubleCircularLinkedList<Track>(tracks, pageSize),
    [tracks, pageSize],
  );

  const [currentPage, setCurrentPage] = useState(1);

  const currentNode = useMemo(() => {
    return tracksList.getNode(currentPage);
  }, [tracksList, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [tracks]);

  if (!tracks.length) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-[#181818] rounded-lg">
        <p className="text-[#b3b3b3]">No hay canciones disponibles</p>
      </div>
    );
  }

  if (!currentNode) return null;

  const totalPages = Math.ceil(tracks.length / pageSize);

  return (
    <div className="space-y-4">
      <div className={listClassName}>
        {currentNode.nodes.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button
          variant="secondary"
          onClick={() => setCurrentPage(currentNode.prev!.page)}
          className="
            px-3
            py-1
            border
            border-[#2a2a2a]
            rounded
            cursor-pointer
            bg-[#181818]
            text-white
            hover:bg-[#222222]
          "
        >
          <i className="ri-arrow-drop-left-line" />
        </Button>

        {getVisibleNodes(currentNode, totalPages, VISIBLE_PAGES).map((node) => (
          <Button
            key={node.page}
            onClick={() => setCurrentPage(node.page)}
            className={`
              px-3
              py-1
              rounded
              cursor-pointer
              transition
              ${
                currentNode.page === node.page
                  ? "bg-[#1db954] text-black"
                  : "bg-[#181818] text-white border border-[#2a2a2a] hover:bg-[#222222]"
              }
            `}
          >
            {node.page}
          </Button>
        ))}

        <Button
          variant="secondary"
          onClick={() => setCurrentPage(currentNode.next!.page)}
          className="
            px-3
            py-1
            border
            border-[#2a2a2a]
            rounded
            cursor-pointer
            bg-[#181818]
            text-white
            hover:bg-[#222222]
          "
        >
          <i className="ri-arrow-drop-right-line" />
        </Button>
      </div>
    </div>
  );
}
