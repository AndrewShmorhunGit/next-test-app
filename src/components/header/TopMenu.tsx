"use client";

import { FormSearch, InfoBlock, MainLogo, TopMenuWrapper } from "./Components";

export function TopMenu() {
  return (
    <TopMenuWrapper>
      <MainLogo />
      <FormSearch />
      <InfoBlock />
    </TopMenuWrapper>
  );
}
