"use client";

import { usePathname } from "next/navigation";
import CardsActionMenuItem from "./menus/CardsActionMenu";
import HomeActionMenuItem from "./menus/HomeActionMenu";

type MenuItems = {
  [key: string]: JSX.Element;
};

const menuItems: MenuItems = {
  "/": <HomeActionMenuItem />,
  "/cards": <CardsActionMenuItem />,
};

export default function ActionMenuItems() {
  const pathname = usePathname();

  return menuItems[pathname] || null;
}
