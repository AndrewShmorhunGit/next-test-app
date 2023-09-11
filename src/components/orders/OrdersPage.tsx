/** @jsxImportSource theme-ui */
"use client";

import { ActivePageWrapper } from "components/products/Client";
import { ScrollContainer } from "components/products/Server";
import { GroupsHeader, Groups } from "./Client";

export function OrdersPage() {
  return (
    <ActivePageWrapper>
      <GroupsHeader />
      <ScrollContainer>
        <Groups />
      </ScrollContainer>
    </ActivePageWrapper>
  );
}
