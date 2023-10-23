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

export default function ActionMenu() {
  const pathname = usePathname();

  if (!menuItems[pathname]) return null;

  return (
    <div className="sticky self-start top-8">
      <div className="flex flex-col gap-3 text-center font-medium w-96">
        {menuItems[pathname]}
      </div>
    </div>
  );
}
