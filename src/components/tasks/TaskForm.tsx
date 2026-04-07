import { useState } from "react";
import { useTaskContext } from "../../hooks/tasks/useTaskContext";

export function TaskForm() {
  const { addTask } = useTaskContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-div">
        <div>
          <label>Titulo</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Dale nombre a tu tarea"
          />
        </div>

        <div>
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de dicha tarea"
            className="bigger-input"
          />
        </div>
      </div>

      <button type="submit">Añadir Tarea</button>
    </form>
  );
}
