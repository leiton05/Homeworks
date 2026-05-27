import { Button } from "@/shared/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/shadcn/dialog";

import { MusicGenre } from "../data/MusicGenre";
import { useCreateTrackDialog } from "../hooks/useCreateTrackDialog";

export const CreateTrackDialog = () => {
  const {
    open,
    title,
    author,
    genres,
    popularity,
    setOpen,
    setTitle,
    setAuthor,
    setPopularity,
    setCoverFile,
    handleGenreChange,
    handleSubmit,
  } = useCreateTrackDialog();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Botón */}
      <DialogTrigger asChild>
        <Button>Publicar canción</Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="max-h-[90vh] flex flex-col max-w-lg w-full bg-[#181818] border-[#2a2a2a] text-white">
        {/* Header */}
        <DialogHeader>
          <DialogTitle className="text-white">
            Publicar nueva canción
          </DialogTitle>
          <DialogDescription>
            Completa los campos para publicar tu nueva canción
          </DialogDescription>
        </DialogHeader>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto px-1">
          <div className="flex flex-col gap-4 mt-4">
            {/* Título */}
            <div>
              <label className="font-semibold">Título</label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  text-white
                  p-2
                  rounded
                  w-full
                  mt-1
                  box-border
                "
              />
            </div>

            {/* Artista */}
            <div>
              <label className="font-semibold">Artista</label>

              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  text-white
                  p-2
                  rounded
                  w-full
                  mt-1
                  box-border
                "
              />
            </div>

            {/* Popularidad */}
            <div>
              <label className="font-semibold">Popularidad</label>

              <input
                type="number"
                min={0}
                max={100}
                value={popularity}
                onChange={(e) => setPopularity(Number(e.target.value))}
                className="
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  text-white
                  p-2
                  rounded
                  w-full
                  mt-1
                  box-border
                "
              />
            </div>

            {/* Género */}
            <div>
              <label className="font-semibold">Género principal</label>

              <select
                value={genres[0] ?? ""}
                onChange={(e) =>
                  handleGenreChange(
                    0,
                    e.target.value === ""
                      ? null
                      : (e.target.value as MusicGenre),
                  )
                }
                className="
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  text-white
                  p-2
                  rounded
                  mt-2
                  w-full
                  box-border
                "
              >
                <option value="">Selecciona un género</option>

                {Object.values(MusicGenre).map((genreValue) => (
                  <option
                    key={genreValue}
                    value={genreValue}
                    className="capitalize"
                  >
                    {genreValue.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            {/* Portada */}
            <div>
              <label className="font-semibold">Portada</label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) setCoverFile(file);
                }}
                className="
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  text-white
                  p-2
                  rounded
                  w-full
                  mt-1
                  box-border
                "
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#2a2a2a] mt-4">
          <Button
            onClick={handleSubmit}
            className="
              w-full
              bg-[#1db954]
              hover:bg-[#1ed760]
              text-black
              font-semibold
            "
          >
            Guardar canción
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
