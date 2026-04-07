import check from "../assets/svg/check.svg";
import { LogoutButton } from "../components/auth/LogoutButton";
import { HomeButton } from "../components/HomeButton";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import { TaskProvider } from "../context/tasks/TaskContext";

export function Tasks() {
  return (
    <TaskProvider>
      <>
        <header className="header-app">
          <div className="contenedor-flexeado">
            <div>
              <HomeButton />
            </div>

            <div className="centro-header">
              <img
                src={check}
                alt="Imagen de un check morado"
                className="img-tool"
              />
              <h1>Task It Up</h1>
            </div>

            <div>
              <LogoutButton />
            </div>
          </div>
        </header>

        <main className="main-tasks">
          <TaskForm />
          <TaskList />
        </main>
      </>
    </TaskProvider>
  );
}
