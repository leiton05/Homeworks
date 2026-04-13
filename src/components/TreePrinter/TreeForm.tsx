import { useState } from "react";
import BinaryTree from "../../tools/tree/BinaryTree";
import { stringToTree } from "../../tools/tree/TreeUtils";

interface TreeFormProp {
  tree: BinaryTree<number>;
  result: string;
  setTree: (tree: BinaryTree<number>) => void;
  setResult: (result: string) => void;
}

function TreeForm({ tree, result, setTree, setResult }: TreeFormProp) {
  const [numbers, setNumbers] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Submiiiiiit");
    e.preventDefault();

    const buttonName = (e.nativeEvent as SubmitEvent).submitter?.getAttribute(
      "name",
    );
    console.log("boton: " + buttonName);

    tree = stringToTree(numbers);
    setTree(tree);

    switch (buttonName) {
      case "preorder":
        result = tree.preOrder(tree.root).join(" ");
        break;
      case "inorder":
        result = tree.inOrder(tree.root).join(" ");
        break;
      case "postorder":
        result = tree.postOrder(tree.root).join(" ");
        break;
    }

    /* setNumbers(""); */
    setResult(result);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" name="preorder">
            PreOrder
          </button>
          <button type="submit" name="inorder">
            InOrder
          </button>
          <button type="submit" name="postorder">
            PostOrder
          </button>
        </div>
      </form>
    </>
  );
}

export default TreeForm;
