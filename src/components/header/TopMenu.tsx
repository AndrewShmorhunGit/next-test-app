"use client";

import { FormSearch, InfoBlock, MainLogo, TopMenuWrapper } from "./Client";

export function TopMenu() {
  return (
    <TopMenuWrapper>
      <MainLogo />
      <FormSearch />
      <InfoBlock />
    </TopMenuWrapper>
  );
}
