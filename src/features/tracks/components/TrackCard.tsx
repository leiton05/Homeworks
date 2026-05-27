import type { Track } from "../interfaces/track.interface";

export interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <div
      className="
        w-48
        cursor-pointer
        rounded-lg
        bg-[#181818]
        p-4
        shadow-sm
        hover:bg-[#222222]
        transition
      "
    >
      <img
        src={track.trackCover}
        alt={track.title}
        className="w-full aspect-square object-cover rounded-md mb-3"
      />

      <h3 className="font-semibold text-lg text-white truncate">
        {track.title}
      </h3>

      <p className="text-sm text-[#b3b3b3] truncate">{track.author}</p>
    </div>
  );
}
