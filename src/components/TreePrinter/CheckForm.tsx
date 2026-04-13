import { useState } from "react";
import type BinaryTree from "../../tools/tree/BinaryTree";
import { checkValueInTree } from "../../tools/tree/TreeUtils";

interface CheckFormProp {
  tree: BinaryTree<number>;
  isResult: boolean;
  setResult: (isResult: boolean) => void;
}

function CheckForm({ tree, isResult, setResult }: CheckFormProp) {
  const [number, setNumber] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitt");
    const temp = checkValueInTree(tree.root, number);
    setResult(temp);
    console.log("El resultado del validar es: " + temp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-div">
        <label>Número a validar</label>
        <input
          type="number"
          placeholder="10"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <div className="btn-center">
        <div>
          <button type="submit">Validar</button>
        </div>
        <div>
          {isResult ? (
            <p className="green-text">El valor {number} está en el árbol</p>
          ) : (
            <p className="red-text">El valor {number} NO está en el árbol</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default CheckForm;
