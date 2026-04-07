import { createContext, useState, type ReactNode } from "react";
import type { Task } from "../../models/tasks/TaskType";

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "completed">) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, updatedData: Partial<Task>) => void;
}

export const TaskContext = createContext<TaskContextProps | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Omit<Task, "id" | "completed">) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, updatedData: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedData } : task)),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
