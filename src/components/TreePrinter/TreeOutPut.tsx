import Tree from "react-d3-tree";
import { TransformToD3 } from "../../utils/TransformToD3";
import BinaryTree from "../../tools/tree/BinaryTree";
import CheckForm from "./CheckForm";

interface Props {
  numbers: string;
  tree: BinaryTree<number>;
  isResult: boolean;
  setIsResult: (value: boolean) => void;
}

function TreeOutPut({ numbers, tree, isResult, setIsResult }: Props) {
  const data = TransformToD3(tree.root);

  return (
    <div>
      {numbers && (
        <p>
          <strong>Resultado: </strong> {numbers}
        </p>
      )}
      <CheckForm tree={tree} isResult={isResult} setResult={setIsResult} />

      {/* Árbol visual */}
      <div className="very-fat-div form-div">
        {data ? (
          <Tree data={data} orientation="vertical" pathFunc="diagonal" />
        ) : (
          <p>No hay árbol aún</p>
        )}
      </div>
    </div>
  );
}

export default TreeOutPut;
