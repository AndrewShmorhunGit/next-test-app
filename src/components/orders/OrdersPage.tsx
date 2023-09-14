/** @jsxImportSource theme-ui */
"use client";

import { ActivePageWrapper } from "components/products/Client";
import { ScrollContainer } from "components/products/Server";
import { GroupsHeader, Groups } from "./Client";
import { fetchProductsAction } from "app/redux/features/products/products.actions";
import { useEffect } from "react";
import { useAppDispatch } from "app/redux";

export function OrdersPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductsAction());
    console.log("fetching products");
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
