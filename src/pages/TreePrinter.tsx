import Navbar from "../components/Navbar";
import treeImg from "../assets/img/tree.png";
import TreeForm from "../components/TreePrinter/TreeForm";
import TreeOutPut from "../components/TreePrinter/TreeOutPut";
import { useState } from "react";
import BinaryTree from "../tools/tree/BinaryTree";

function TreePrinter() {
  const [tree, setTree] = useState<BinaryTree<number>>(
    new BinaryTree<number>(),
  );
  const [result, setResult] = useState<string>("");
  return (
    <>
      <header className="header-app">
        <Navbar
          title={"Tree Printer"}
          imgUrl={treeImg}
          alt={"Imagen de un árbol morado"}
        />
      </header>
      <div className="challenge-content">
        <TreeForm
          tree={tree}
          setTree={setTree}
          result={result}
          setResult={setResult}
        />
        <TreeOutPut numbers={result} />
      </div>
    </>
  );
}

export default TreePrinter;
