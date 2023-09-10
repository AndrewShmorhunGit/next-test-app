/** @jsxImportSource theme-ui */
"use client";

import { useSelector, useAppDispatch, setGroup } from "app/redux";
import { ModalBody } from "components/modal/Server";
import {
  ActivePageWrapper,
  IncomeDeleteButton,
  ProductDeleteButton,
} from "components/products/Client";
import {
  Guaranty,
  ProductPrice,
  ProductStatus,
  ScrollContainer,
} from "components/products/Server";
import { catProducts } from "data/products";
import { ICatProduct } from "interfaces/IProducts";
import { useEffect, useState } from "react";
import { BsListUl, BsPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Grid } from "theme-ui";
import { GroupInfoHeader } from "./Client";
import { GroupCloseX } from "components/modal/Client";

const products = catProducts;
const groupsArray = products.map(({ group }) => {
  return group;
});
const groupsSet = new Set(groupsArray);
const groupsArrayFromSet = Array.from(groupsSet);
const groups: Map<string, ICatProduct[]> = new Map();
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
        <Groups />
      </ScrollContainer>
    </ActivePageWrapper>
  );
}

export function GroupHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        pb: "6rem",
      }}
    >
      <Box
        sx={{
          variant: "styles.buttons.plus",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsPlus color={"white"} size={14} />
      </Box>
      <h2 sx={{ variant: "styles.headers.title" }}>
        Income / {products.length}
      </h2>
    </Box>
  );
}

export function Groups() {
  const [toggle, setToggle] = useState(false);
  const selectedGroup = useSelector((store) => store.groups.select);

  useEffect(() => {
    if (selectedGroup !== "none") setToggle(true);
    if (selectedGroup === "none") setToggle(false);
  }, [selectedGroup]);

  return (
    <div sx={{ pt: "2rem" }}>
      <Grid gap={3} columns={toggle ? "36rem 1fr" : 1}>
        <Box>
          {groupsArrayFromSet.map((group) => (
            <Group group={group} toggle={toggle} />
          ))}
        </Box>
        <GroupInfo toggle={toggle} />
      </Grid>
    </div>
  );
}

export function Group({ group, toggle }: { group: string; toggle: boolean }) {
  const selectedGroup = useSelector((store) => store.groups.select);
  const dispatch = useAppDispatch();
  const groupProducts = groups.get(group);
  const amount = groupProducts && groupProducts.length;
  const groupTotalPrice =
    groupProducts &&
    groupProducts.reduce((total, { price }) => {
      total = total + price.usd;
      return total;
    }, 0);

  return (
    <Grid
      columns={!toggle ? ["8fr 1fr 1fr 4fr 3fr 1fr"] : ["1fr 2fr 3fr 0.8fr"]}
      sx={{
        variant: "styles.box.product.wrapper",
        maxHeight: "9.6rem",
        maxWidth: toggle ? "38rem" : "auto",
        mb: 2,
        p: 0,
        pl: 4,
        boxShadow: selectedGroup === group && "standard",
      }}
    >
      {!toggle && (
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
      )}
      <Box
        sx={{
          alignSelf: "center",
          variant: "styles.buttons.list",
        }}
        onClick={() => {
          dispatch(setGroup(group === selectedGroup ? "none" : group));
          console.log(groups.get(group));
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
          p: 1,
          gap: 0,
        }}
      >
        <p sx={{ fontSize: 3 }}>{amount}</p>
        <p sx={{ textTransform: "capitalize" }}>
          {amount && amount > 1 ? "products" : "product"}
        </p>
      </Box>
      {!toggle && (
        <Guaranty
          guaranty={groupProducts[0].guaranty}
          from={groupProducts[0].date.from}
        />
      )}
      <Box sx={{ pt: 1 }}>
        <ProductPrice price={groupTotalPrice || 0} />
      </Box>
      {!toggle ? (
        <IncomeDeleteButton product={groupProducts[0]} />
      ) : (
        <Box
          sx={{
            bg: selectedGroup === group && "lightgrey",
            variant: "styles.box.flex.center",
            pr: 0,
          }}
        >
          <IoIosArrowForward sx={{ color: "white" }} size={20} />
        </Box>
      )}
    </Grid>
  );
}

export function GroupInfo({ toggle }: { toggle: boolean }) {
  const selectedGroup = useSelector((store) => store.groups.select);
  return (
    <Box sx={{ minWidth: "100%" }}>
      <div
        sx={{
          border: "light",
          borderRadius: 1,
          bg: "background.main",
          width: toggle ? "86rem" : "0rem",
          maxHeight: toggle ? "100rem" : "0rem",
          mb: 4,
          mr: "5rem",
          opacity: toggle ? 1 : 0,
          transition: `max-height ${toggle ? 1 : 0}s ease`,
          position: "relative",
          overflow: !toggle && "hidden",
        }}
      >
        {toggle && <GroupCloseX />}
        <GroupInfoHeader />
        {selectedGroup !== "none" &&
          groups.get(selectedGroup)?.map((product) => {
            return (
              <Grid
                gap={4}
                sx={{
                  pr: 3,
                  borderTop: "1px solid lightgrey",
                  "&:hover": {
                    boxShadow: "standard",
                  },
                }}
                columns={["2fr 8rem 2rem"]}
                key={product.id}
              >
                <ModalBody product={product} />
                <ProductStatus status={product.status} />
                <ProductDeleteButton product={product} />
              </Grid>
            );
          })}
      </div>
    </Box>
  );
}
