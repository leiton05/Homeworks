import type { MusicGenre } from "../data/MusicGenre";

export interface Track {
  // Id para firestore
  id: string;

  // Info de la canción
  title: string;
  author: string;
  trackCover: string;
  popularity: number;
  mainGenre: MusicGenre;

  // Info de creación
  createdAt: number;
}
