import { useMemo, useState } from "react";
import { useTrack } from "./useTrack";
import { Trie } from "../algorithms/tries/Trie";
import type { Track } from "../interfaces/track.interface";

export const useTrackSearch = () => {
  const { tracks } = useTrack();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Creación del trie
  const trie = useMemo(() => {
    const newTrie = new Trie();

    (tracks ?? []).forEach((track) => {
      newTrie.insert(track);
    });

    return newTrie;
  }, [tracks]);

  // Búsqueda
  const searchResults = !query ? [] : trie.searchByPrefix(query);

  const results = !query ? tracks ?? [] : searchResults;

  // Máximo 5 sugerencias
  const suggestions = searchResults.slice(0, 5);

  const handleChange = (value: string) => {
    setQuery(value);
    setOpen(true);
  };

  const handleSelect = (track: Track) => {
    setQuery(track.title);
    setOpen(false);
  };

  return {
    query,
    open,
    results,
    suggestions,
    hasResults: results.length > 0,
    handleChange,
    handleSelect,
  };
};
