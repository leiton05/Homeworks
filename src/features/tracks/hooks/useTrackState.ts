import { useEffect } from "react";
import { useCollection } from "@/firebase/hooks/useCollection";
import type { TrackFormData } from "../types/track.type";
import type { Track } from "../interfaces/track.interface";
import { PAGE_SIZE } from "../constants/track.constants";

export const useTrackState = () => {
  //* Collection Hook
  const {
    results: tracks,
    isPending: loading,
    error,
    suscribe,
    getById,
    add,
  } = useCollection<Track>("tracks");

  //* Effects
  useEffect(() => {
    const unsubscribe = suscribe();

    return () => unsubscribe?.();
  }, []);

  //* Functions

  // ? Crear track
  const createTrack = async (data: TrackFormData): Promise<string | null> => {
    try {
      const payload = {
        ...data,
      };

      const id = await add(payload as Track);

      if (!id) {
        return "Error al crear el track";
      }

      return null;
    } catch (error) {
      console.error("Error creating track:", error);
      return "Error al crear el track";
    }
  };

  // ? Buscar track por id
  const getTrackById = async (id: string) => {
    return await getById(id);
  };

  //? Paginación
  function getPaginatedTracks(page: number, tracks: Track[]) {
    const start = (page - 1) * PAGE_SIZE;
    return tracks.slice(start, start + PAGE_SIZE);
  }

  function getTotalPages(tracks: Track[]) {
    return Math.ceil(tracks.length / PAGE_SIZE);
  }

  return {
    tracks,
    loading,
    error,
    createTrack,
    getTrackById,
    getPaginatedTracks,
    getTotalPages,
  };
};
