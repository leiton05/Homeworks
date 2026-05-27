import type { Track } from "../interfaces/track.interface";

export type TrackFormData = Omit<Track, "id" | "createdAt">;
