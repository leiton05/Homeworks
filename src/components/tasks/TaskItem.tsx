import { useState } from "react";
import { useTaskContext } from "../../hooks/tasks/useTaskContext";
import type { Task } from "../../models/tasks/TaskType";

export const TaskItem = ({ task }: { task: Task }) => {
  const { deleteTask, updateTask } = useTaskContext();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task.id, { title, description });
    setIsEditing(false);
  };

  const handleToggleCompleted = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="btn-group">
            <button onClick={handleUpdate}>Guardar</button>
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <h3 className={task.completed ? "completed-text" : ""}>
            {task.title}
          </h3>

          <p className={task.completed ? "completed-text" : ""}>
            {task.description}
          </p>

          <div className="btn-group">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleCompleted}
              className="custom-checkbox"
            />

            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};
