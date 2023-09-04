"use client";

import { Menu, MenuWrapper, User } from "./Client";

export function NavigationMenu() {
  return (
    <MenuWrapper>
      <User />
      <Menu />
    </MenuWrapper>
  );
}
