import { useContext } from "react";
import { TaskContext } from "../../context/tasks/TaskContext";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks debe usarse dentro de TaskProvider");
  }

  return context;
};
