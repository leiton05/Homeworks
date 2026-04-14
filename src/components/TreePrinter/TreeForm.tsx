import { useState } from "react";
import type BinaryTree from "../../tools/tree/BinaryTree";
import { stringToTree } from "../../tools/tree/TreeUtils";

interface TreeFormProp {
  setTree: (tree: BinaryTree<number>) => void;
  setResult: (result: string) => void;
}

function TreeForm({ setTree, setResult }: TreeFormProp) {
  const [numbers, setNumbers] = useState<string>("");

  const handleClick = (type: "preorder" | "inorder" | "postorder") => {
    const newTree = stringToTree(numbers);
    setTree(newTree);

    let output = "";
    switch (type) {
      case "preorder":
        output = newTree.preOrder(newTree.root).join(" ");
        break;
      case "inorder":
        output = newTree.inOrder(newTree.root).join(" ");
        break;
      case "postorder":
        output = newTree.postOrder(newTree.root).join(" ");
        break;
    }

    setResult(output);
  };

  return (
    <div>
      <div className="form-div">
        <label>Números</label>
        <input
          type="text"
          placeholder="10 12 3 5 17"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
      </div>
      <div className="btn-center">
        <button type="button" onClick={() => handleClick("preorder")}>
          PreOrder
        </button>
        <button type="button" onClick={() => handleClick("inorder")}>
          InOrder
        </button>
        <button type="button" onClick={() => handleClick("postorder")}>
          PostOrder
        </button>
      </div>
    </div>
  );
}

export default TreeForm;
