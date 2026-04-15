export type FileDoc = {
  name: string;
  type: "file" | "folder";
  parent?: string;
  creatorEmail?: string;
};
