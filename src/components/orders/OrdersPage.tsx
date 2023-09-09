/** @jsxImportSource theme-ui */
"use client";

import {
  ActivePageWrapper,
  IncomeDeleteButton,
} from "components/products/Client";
import {
  Guaranty,
  ProductPrice,
  ScrollContainer,
} from "components/products/Server";
import { catProducts } from "data/products";
import { ICatProduct } from "interfaces/IProducts";
import React from "react";
import { BsListUl } from "react-icons/bs";
import { Box, Grid } from "theme-ui";

const products = catProducts;
const groupsArray = products.map(({ group }) => {
  return group;
});
const groupsSet = new Set(groupsArray);
const groupsArrayFromSet = Array.from(groupsSet);
const groups = new Map();
groupsArrayFromSet.forEach((group) =>
  groups.set(
    group,
    products.filter((prod) => prod.group === group)
  )
);

export function OrdersPage() {
  return (
    <ActivePageWrapper>
      <GroupHeader />
      <ScrollContainer>
        {groupsArrayFromSet.map((group) => (
          <Group group={group} />
        ))}
      </ScrollContainer>
    </ActivePageWrapper>
  );
}

export function GroupHeader() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "3rem", pb: "6rem" }}
    >
      <Box
        sx={{
          variant: "styles.buttons.plus",
        }}
      >
        <p
          sx={{
            fontSize: 1,
            variant: "styles.box.absolute.center",
            transform: "translate(-50%, -1.2rem)",
          }}
        >
          +
        </p>
      </Box>
      <h2 sx={{ variant: "styles.headers.title" }}>
        Income / {products.length}
      </h2>
    </Box>
  );
}

export function Group({ group }: { group: string }) {
  const groupProducts: ICatProduct[] = groups.get(group);
  const amount = groupProducts.length;
  const groupTotalPrice = groupProducts.reduce((total, { price }) => {
    total = total + price.usd;
    return total;
  }, 0);
  return (
    <Grid
      gap={4}
      columns={["8fr 1fr 1fr 4fr 3fr 1fr "]}
      sx={{
        variant: "styles.box.product.wrapper",
        maxHeight: "8rem",
      }}
    >
      <Box sx={{ alignSelf: "center" }}>
        <p
          sx={{
            fontSize: 3,
            textDecoration: "underline lightgrey",
            color: "text.tables",
          }}
        >
          {group}
        </p>
      </Box>
      <Box
        sx={{
          alignSelf: "center",
          variant: "styles.buttons.list",
        }}
      >
        <BsListUl
          size={20}
          sx={{
            variant: "styles.box.absolute.center",
          }}
        />
      </Box>
      <Box
        sx={{
          alignSelf: "center",
          variant: "styles.box.flex.column",
        }}
      >
        <p sx={{ fontSize: 3 }}>{amount}</p>
        <p sx={{ textTransform: "capitalize" }}>
          {amount > 1 ? "products" : "product"}
        </p>
      </Box>
      <Guaranty
        guaranty={groupProducts[groupProducts.length - 1].guaranty}
        from={groupProducts[groupProducts.length - 1].date.from}
      />
      <ProductPrice price={groupTotalPrice} />
      <IncomeDeleteButton product={groupProducts[0]} />
    </Grid>
  );
}
