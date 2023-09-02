"use client";

import { Menu, MenuWrapper, User } from "./Components";

export function NavigationMenu() {
  return (
    <MenuWrapper>
      <User />
      <Menu />
    </MenuWrapper>
  );
}
