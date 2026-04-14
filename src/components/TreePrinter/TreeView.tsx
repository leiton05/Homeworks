import Tree from "react-d3-tree";
import { TransformToD3 } from "../../utils/TransformToD3";

export const TreeView = ({ root }: any) => {
  const data = TransformToD3(root);

  if (!data) return <p>No hay árbol aún</p>;

  return (
    <div className="very-fat-div">
      <Tree data={data} orientation="vertical" pathFunc="diagonal" />
    </div>
  );
};
