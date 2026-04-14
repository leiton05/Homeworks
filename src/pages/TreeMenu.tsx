import Navbar from "../components/Navbar";
import leave from "../assets/img/leave.png";
import { createMockData } from "../data/N-aryTree/mockDataNTree";
import Sidebar from "../components/treeMenu/Sidebar";

function TreeMenu() {
  const tree = createMockData();
  return (
    <>
      <header>
        <Navbar
          title={"Menú de Árbol"}
          imgUrl={leave}
          alt={"Imagen de dos hojas moradas"}
        />
      </header>
      <div>
        <div>
          {/* Sidebar */}
          {tree.root && <Sidebar node={tree.root} />}
          {/* Contenido principal */}
        </div>
      </div>
    </>
  );
}

export default TreeMenu;
