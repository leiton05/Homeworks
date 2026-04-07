import { useTaskContext } from "../../hooks/tasks/useTaskContext";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return <p>No hay tareas aún</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
