/** @jsxImportSource theme-ui */
"use client";

import { ActivePageWrapper } from "components/incomes/Client";
import { ScrollContainer } from "components/incomes/Server";
import { GroupsHeader, Groups } from "./Client";
import { fetchProductsAction } from "app/redux/features/products/products.actions";
import { useEffect } from "react";
import { useAppDispatch } from "app/redux";

export function OrdersPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);
  return (
    <ActivePageWrapper>
      <GroupsHeader />
      <ScrollContainer>
        <Groups />
      </ScrollContainer>
    </ActivePageWrapper>
  );
}
