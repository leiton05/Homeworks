import type { Track } from "../../tracks/interfaces/track.interface";

interface Props {
  track: Track;
  position: number;
}

export const TopTrackCard = ({ track, position }: Props) => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        bg-[#181818]
        hover:bg-[#222222]
        transition
        rounded-xl
        p-3
        w-full-8
        ml-4
        mr-4
      "
    >
      <span
        className="
          text-2xl
          font-bold
          text-[#1db954]
          w-8
        "
      >
        #{position}
      </span>

      <img
        src={track.trackCover}
        alt={track.title}
        className="
          w-20
          h-20
          rounded-lg
          object-cover
          aspect-square
        "
      />

      <div className="flex flex-col overflow-hidden">
        <h3 className="text-white font-semibold truncate">{track.title}</h3>

        <p className="text-[#b3b3b3] text-sm truncate">{track.author}</p>

        <span className="text-xs text-[#1db954] mt-1">
          Popularidad: {track.popularity}
        </span>
      </div>
    </div>
  );
};
