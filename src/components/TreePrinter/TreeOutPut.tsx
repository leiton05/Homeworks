import type BinaryTree from "../../tools/tree/BinaryTree";
import CheckForm from "./CheckForm";

interface TreeOutPutProp {
  numbers: string;
  tree: BinaryTree<number>;
  isResult: boolean;
  setIsResult: (isResult: boolean) => void;
}

function TreeOutPut({ numbers, tree, isResult, setIsResult }: TreeOutPutProp) {
  return (
    <div>
      {numbers && (
        <p>
          <strong>Resultado: </strong> {numbers}
        </p>
      )}
      <CheckForm tree={tree} isResult={isResult} setResult={setIsResult} />
    </div>
  );
}

export default TreeOutPut;
