"use client";
import {
  HeaderFormSearch,
  TopMenuWrapper,
  MainLogo,
  InfoBlock,
} from "./Server";

export function TopMenu() {
  return (
    <TopMenuWrapper>
      <MainLogo />
      <HeaderFormSearch />
      <InfoBlock />
    </TopMenuWrapper>
  );
}
