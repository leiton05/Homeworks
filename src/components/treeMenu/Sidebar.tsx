import { Link } from "react-router-dom";
import Node from "../../tools/n-aryTree/Node";
import type { MenuType } from "../../models/treeMenu/treeMenuType";

function Sidebar({ node }: { node: Node<MenuType> }) {
  return (
    <ul className="sidebar">
      {node.children.map((child) => (
        <li key={child.value.link}>
          <Link to={"/treeMenu" + child.value.link + "/" + child.value.title}>
            {child.value.title}
          </Link>
          {child.children.length > 0 && <Sidebar node={child} />}
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
