import check from "../assets/svg/check.svg";
import Navbar from "../components/Navbar";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import { TaskProvider } from "../context/tasks/TaskContext";

export function Tasks() {
  return (
    <TaskProvider>
      <>
        <header className="header-app">
          <Navbar
            title={"Task It Up"}
            imgUrl={check}
            alt={"Imagen de un check morada"}
          />
        </header>

        <main className="main-tasks">
          <TaskForm />
          <TaskList />
        </main>
      </>
    </TaskProvider>
  );
}
