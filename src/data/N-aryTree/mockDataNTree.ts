import type { MenuType } from "../../models/treeMenu/treeMenuType";
import NaryTree from "../../tools/n-aryTree/NaryTree";

export function createMockData(): NaryTree<MenuType> {
  let newTree = new NaryTree<MenuType>();
  // Root
  newTree.insert({ title: "Root", link: "/" });

  // Hijos de root
  newTree.insert(
    { title: "Settings", link: "/settings" },
    { title: "Root", link: "/" },
  );
  newTree.insert(
    { title: "Help", link: "/help" },
    { title: "Root", link: "/" },
  );
  newTree.insert(
    { title: "Logout", link: "/logout" },
    { title: "Root", link: "/" },
  );

  // Hijos de settings
  newTree.insert(
    { title: "Account", link: "/settings/account" },
    { title: "Settings", link: "/settings" },
  );
  newTree.insert(
    { title: "Profile", link: "/settings/profile" },
    { title: "Settings", link: "/settings" },
  );
  newTree.insert(
    { title: "Security & Privacy", link: "/settings/security" },
    { title: "Settings", link: "/settings" },
  );
  newTree.insert(
    { title: "Password", link: "/settings/password" },
    { title: "Settings", link: "/settings" },
  );
  newTree.insert(
    { title: "Notification", link: "/settings/notification" },
    { title: "Settings", link: "/settings" },
  );

  // Hijos de help
  newTree.insert(
    { title: "FAQ's", link: "/help/faqs" },
    { title: "Help", link: "/help" },
  );
  newTree.insert(
    { title: "Submit a Ticket", link: "/help/ticket" },
    { title: "Help", link: "/help" },
  );
  newTree.insert(
    { title: "Network Status", link: "/help/status" },
    { title: "Help", link: "/help" },
  );

  return newTree;
}
