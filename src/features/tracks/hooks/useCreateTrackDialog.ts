import { useState } from "react";
import { toast } from "react-toastify";
import { MusicGenre } from "../data/MusicGenre";
import { uploadTrackCover } from "../utils/uploadTrackCover";
import { useTrack } from "./useTrack";

export const useCreateTrackDialog = () => {
  const { createTrack } = useTrack();

  // * States
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [popularity, setPopularity] = useState(50);

  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [genres, setGenres] = useState<(MusicGenre | null)[]>([null]);

  // * Handlers

  const handleGenreChange = (index: number, value: MusicGenre | null) => {
    const updated = [...genres];

    updated[index] = value;

    setGenres(updated);
  };

  // * Submit

  const handleSubmit = async () => {
    const validGenres = genres.filter((g): g is MusicGenre => g !== null);

    // Validaciones

    if (!title.trim()) {
      toast.error("El título de la canción es obligatorio");

      return;
    }

    if (!author.trim()) {
      toast.error("El artista de la canción es obligatorio");

      return;
    }

    if (validGenres.length === 0) {
      toast.error("Debes seleccionar un género");

      return;
    }

    if (!coverFile) {
      toast.error("La portada de la canción es obligatoria");

      return;
    }

    if (popularity <= 0) {
      toast.error("La popularidad debe ser mayor que 0");

      return;
    }
    console.log(
      "All validations passed. Proceeding to upload cover and create track...",
    );
    try {
      console.log("Uploading cover...");

      const coverUrl = await uploadTrackCover(coverFile);

      console.log("Cover uploaded:", coverUrl);

      const payload = {
        title,
        author,
        trackCover: coverUrl,
        popularity,
        mainGenre: validGenres[0],
        createdAt: Date.now(),
      };

      console.log("Creating track:", payload);

      // Crear canción

      const error = await createTrack(payload);

      console.log("CreateTrack response:", error);

      if (error) {
        toast.error(error);

        return;
      }

      toast.success("Canción publicada correctamente");

      // Reset

      setTitle("");
      setAuthor("");
      setPopularity(50);
      setCoverFile(null);
      setGenres([null]);

      setOpen(false);
    } catch (error) {
      console.error("Error creating track:", error);

      toast.error("Ocurrió un error al publicar la canción");
    }
  };

  return {
    open,
    title,
    author,
    popularity,
    genres,

    setOpen,
    setTitle,
    setAuthor,
    setPopularity,
    setCoverFile,

    handleGenreChange,
    handleSubmit,
  };
};
