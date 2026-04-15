import NaryTree from "../tools/n-aryTree/NaryTree";

export interface MenuItem {
  type: "file" | "folder";
  name: string;
  creatorEmail?: string;
}

export function createMockMenuTree(): NaryTree<MenuItem> {
  const tree = new NaryTree<MenuItem>();

  tree.insert({ type: "folder", name: "Documents" });

  tree.insert({ type: "folder", name: "Work" }, "Documents");
  tree.insert({ type: "file", name: "report.pdf" }, "Work");
  tree.insert({ type: "folder", name: "Projects" }, "Work");
  tree.insert({ type: "file", name: "project1.txt" }, "Projects");
  tree.insert({ type: "file", name: "project2.txt" }, "Projects");

  tree.insert({ type: "folder", name: "Personal" }, "Documents");
  tree.insert({ type: "file", name: "notes.txt" }, "Personal");
  tree.insert({ type: "file", name: "diary.md" }, "Personal");

  tree.insert({ type: "folder", name: "Images" }, "Documents");
  tree.insert({ type: "file", name: "photo1.jpg" }, "Images");
  tree.insert({ type: "file", name: "photo2.png" }, "Images");

  return tree;
}
