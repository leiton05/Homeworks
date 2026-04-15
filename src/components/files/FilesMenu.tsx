import React, { useState } from "react";
import type { MenuItem } from "../../utils/menuUtils";
import NaryTree from "../../tools/n-aryTree/NaryTree";

interface TreeNodeProps {
  node: any;
  level: number;
  expandedFolders: Set<string>;
  path: string;
  toggleFolder: (path: string) => void;
  addFile: (name: string, parent?: string) => void;
  addFolder: (name: string, parent?: string) => void;
  onFileSelect: (item: MenuItem) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level,
  expandedFolders,
  toggleFolder,
  path,
  addFile,
  addFolder,
  onFileSelect,
}) => {
  const item = node.value as MenuItem;
  const isExpanded = expandedFolders.has(path);

  const handleAddFolder = () => {
    const newName = prompt("Enter folder name:");
    if (newName) {
      addFolder(newName, item.name);
    }
  };

  const handleAddFile = () => {
    const newName = prompt("Enter file name:");
    if (newName) {
      addFile(newName, item.name);
    }
  };

  return (
    <>
      <div style={{ marginLeft: level * 20 }}>
        {item.type === "folder" ? (
          <div>
            <div className="btn-group-2">
              <button onClick={() => toggleFolder(path)}>
                {isExpanded ? "📂" : "📁"} {item.name}
              </button>
              <button className="button-file" onClick={handleAddFolder}>
                +📁
              </button>
              <button className="button-file" onClick={handleAddFile}>
                +📄
              </button>
            </div>
            {isExpanded &&
              node.children.map((child: any, index: number) => (
                <TreeNode
                  key={index}
                  node={child}
                  level={level + 1}
                  expandedFolders={expandedFolders}
                  toggleFolder={toggleFolder}
                  path={`${path}/${child.value.name}`}
                  addFile={addFile}
                  addFolder={addFolder}
                  onFileSelect={onFileSelect}
                />
              ))}
          </div>
        ) : (
          <div
            style={{ cursor: "pointer", padding: "4px 0" }}
            onClick={() => onFileSelect(item)}
          >
            📄 {item.name}
          </div>
        )}
      </div>
    </>
  );
};

interface FilesMenuProps {
  tree: NaryTree<MenuItem> | null;
  addFile: (name: string, parent?: string) => void;
  addFolder: (name: string, parent?: string) => void;
  user: { username: string } | null;
  isPending: boolean;
  onFileSelect: (item: MenuItem) => void;
}

function FilesMenu({
  tree,
  addFile,
  addFolder,
  isPending,
  onFileSelect,
}: FilesMenuProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleCreateRootFolder = () => {
    const folderName = "Mi Repositorio";
    addFolder(folderName);
  };

  if (isPending) {
    return (
      <div>
        <h2>Administrador de Archivos</h2>
        <p>Cargando archivos...</p>
      </div>
    );
  }

  if (!tree || !tree.root) {
    return (
      <div>
        <h2>Administrador de Archivos</h2>
        <p>No hay archivos disponibles. Crea tu primera carpeta:</p>
        <button onClick={handleCreateRootFolder}>Crear Carpeta Raíz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Administrador de Archivos</h2>
      <TreeNode
        node={tree.root}
        level={0}
        expandedFolders={expandedFolders}
        toggleFolder={toggleFolder}
        path={tree.root.value.name}
        addFile={addFile}
        addFolder={addFolder}
        onFileSelect={onFileSelect}
      />
    </div>
  );
}

export default FilesMenu;
