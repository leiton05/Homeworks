import { Input } from "@/shared/components/shadcn/input";
import type { Track } from "../interfaces/track.interface";

interface Props {
  suggestions: Track[];
  input: string;
  open: boolean;
  onChange: (value: string) => void;
  onSelect: (track: Track) => void;
}

export const TrackSearch = ({
  suggestions,
  input,
  open,
  onChange,
  onSelect,
}: Props) => {
  return (
    <div className="flex gap-2 w-full">
      <div className="relative w-full">
        <Input
          placeholder="Buscar por título o género..."
          value={input}
          onChange={(e) => onChange(e.target.value)}
          className="
            bg-[#121212]
            border-[#2a2a2a]
            text-white
            placeholder:text-[#b3b3b3]
            focus-visible:ring-[#1db954]
          "
        />

        {open && suggestions.length > 0 && (
          <div
            className="
              absolute
              left-0
              right-0
              top-full
              z-10
              bg-[#181818]
              border
              border-[#2a2a2a]
              rounded-md
              shadow-lg
              mt-1
              overflow-hidden
            "
          >
            {suggestions.map((track) => (
              <div
                key={track.id}
                onClick={() => onSelect(track)}
                className="
                  px-3
                  py-2
                  hover:bg-[#222222]
                  cursor-pointer
                  transition
                  text-white
                  flex
                  flex-col
                "
              >
                <span className="font-medium">{track.title}</span>

                <span className="text-sm text-[#b3b3b3] capitalize">
                  {track.mainGenre.replaceAll("_", " ")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
