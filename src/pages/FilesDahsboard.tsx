import Navbar from "../components/Navbar";
import folder from "../assets/svg/folder.svg";
import FilesMenu from "../components/files/FilesMenu";
import { useFileTree } from "../hooks/useFileTree";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function FilesDashboard() {
  const authContext = useContext(AuthContext);
  const user = authContext?.user || null;
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [selectedCreatorEmail, setSelectedCreatorEmail] = useState<
    string | null
  >(null);
  const { tree, isPending, error, addFile, addFolder } = useFileTree(
    user?.email ?? null,
  );

  return (
    <>
      <header>
        <Navbar
          imgUrl={folder}
          title="Administrador de archivos"
          alt="imagen de una carpeta morada"
        />
      </header>
      <div className="div-center-2">
        <h2>Administrador de Archivos</h2>
        <p>
          Bienvenido al administrador de archivos. Aquí puedes gestionar tus
          archivos.
        </p>
        {error && <p>Error: {error}</p>}
      </div>
      <div className="main-conteiner-files">
        <div className="div-menu">
          <div>
            <FilesMenu
              tree={tree}
              addFile={addFile}
              addFolder={addFolder}
              user={user}
              isPending={isPending}
              onFileSelect={(item) => {
                setSelectedFile(item.name);
                setSelectedCreatorEmail(item.creatorEmail ?? null);
              }}
            />
          </div>
        </div>
        <div className="main-conteiner-data div-vertical">
          <p>
            {selectedFile
              ? `Archivo seleccionado: ${selectedFile}`
              : "Selecciona un archivo para ver su título aquí."}
          </p>
          <p> - </p>
          {selectedCreatorEmail && <p> Creador: {selectedCreatorEmail}</p>}
        </div>
      </div>
    </>
  );
}

export default FilesDashboard;
