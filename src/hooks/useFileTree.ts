import { useEffect, useState } from "react";
import { useCollection } from "../firebase/hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import NaryTree from "../tools/n-aryTree/NaryTree";
import type { MenuItem } from "../utils/menuUtils";
import type { FileDoc } from "../models/FileDoc";

export const useFileTree = (userEmail: string | null = null) => {
  const { getAll, isPending, error } = useCollection<FileDoc>("files");
  const [tree, setTree] = useState<NaryTree<MenuItem> | null>(null);

  const fetchTree = async () => {
    try {
      const files = await getAll();
      const newTree = new NaryTree<MenuItem>();

      files
        .filter((file) => !file.parent)
        .forEach((file) => {
          const menuItem: MenuItem = {
            type: file.type,
            name: file.name,
            creatorEmail: file.creatorEmail,
          };
          newTree.insert(menuItem);
        });

      const children = files.filter((file) => file.parent);
      const remaining = [...children];

      while (remaining.length > 0) {
        let inserted = false;
        for (let i = remaining.length - 1; i >= 0; i--) {
          const file = remaining[i];
          if (newTree.findNode(file.parent!)) {
            const menuItem: MenuItem = {
              type: file.type,
              name: file.name,
              creatorEmail: file.creatorEmail,
            };
            try {
              newTree.insert(menuItem, file.parent);
              remaining.splice(i, 1);
              inserted = true;
            } catch (err) {
              console.warn(`Failed to insert ${file.name}:`, err);
            }
          }
        }
        if (!inserted) {
          console.warn(
            "Could not insert some items due to missing parents:",
            remaining.map((f) => f.name),
          );
          break;
        }
      }

      setTree(newTree);
    } catch (err) {
      console.error("Error fetching file tree:", err);
    }
  };

  useEffect(() => {
    fetchTree();
  }, []);

  const addFile = async (name: string, parent?: string) => {
    try {
      const fileData: {
        name: string;
        type: "file";
        parent?: string;
        creatorEmail?: string;
      } = {
        name,
        type: "file",
      };
      if (parent !== undefined) fileData.parent = parent;
      if (userEmail) fileData.creatorEmail = userEmail;

      await addDoc(collection(db, "files"), fileData);
      await fetchTree();
    } catch (err) {
      console.error("Error adding file:", err);
    }
  };

  const addFolder = async (name: string, parent?: string) => {
    try {
      const folderData: {
        name: string;
        type: "folder";
        parent?: string;
        creatorEmail?: string;
      } = {
        name,
        type: "folder",
      };
      if (parent !== undefined) folderData.parent = parent;
      if (userEmail) folderData.creatorEmail = userEmail;

      await addDoc(collection(db, "files"), folderData);
      await fetchTree();
    } catch (err) {
      console.error("Error adding folder:", err);
    }
  };

  return { tree, isPending, error, addFile, addFolder };
};
