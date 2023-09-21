/** @jsxImportSource theme-ui */
"use client";

import { setGroup, useAppDispatch, useSelector } from "app/redux";
import { ModalBody } from "components/modal/Server";
import {
  IncomeDeleteButton,
  ProductDeleteButton,
  ProductsAmount,
} from "components/incomes/Client";
import {
  Guaranty,
  ProductPrice,
  ProductStatus,
} from "components/incomes/Server";
import { createGroups, getGroupData } from "data/groups";
import { IProduct } from "interfaces/IProducts";
import { useState, useEffect } from "react";
import { BsListUl, BsPlus } from "react-icons/bs";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { Box, Grid } from "theme-ui";
import { httpExchange, httpProducts } from "utils/http/http";

export function GroupsHeader() {
  const [isState, setState] = useState(0);

  useEffect(() => {
    httpProducts().then((data) => data && setState(data.length));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        pb: "3.2rem",
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
      <ProductsAmount title={"Incomes"} amount={isState} />
    </Box>
  );
}

export function Groups() {
  // Custom hook
  ////////////////////////////////////////////////////
  const { products } = useSelector((store) => store.products);
  const [isExchangeRate, setExchangeRate] = useState(38);
  useEffect(() => {
    httpExchange().then((data) => setExchangeRate(data ? data : 38));
    // httpProducts().then((data) => data && setProducts(data));
  }, []);
  const { groups } = createGroups(products);

  // Custom hook
  ////////////////////////////////////////////////////
  const selectedGroup = useSelector((store) => store.groups.select);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (selectedGroup !== "none") setToggle(true);
    if (selectedGroup === "none") setToggle(false);
  }, [selectedGroup]);

  return (
    <div sx={{ pt: "2rem" }}>
      <Grid gap={3} columns={toggle ? "36rem 1fr" : 1}>
        <Box>
          {Array.from(groups.keys()).map((group: string) => (
            <Group
              key={group}
              groups={groups}
              group={group}
              toggle={toggle}
              rate={isExchangeRate}
            />
          ))}
        </Box>
        <GroupInfo toggle={toggle} groups={groups} />
      </Grid>
    </div>
  );
}

export function Group({
  groups,
  group,
  toggle,
  rate,
}: {
  groups: Map<string, IProduct[]>;
  group: string;
  toggle: boolean;
  rate: number;
}) {
  const selectedGroup = useSelector((store) => store.groups.select);
  const dispatch = useAppDispatch();
  // const { products } = useSelector((store) => store.products);
  // const { groups } = createGroups(products);

  const {
    groupProducts,
    amountOfIncomes: amount,
    totalGroupPrice: price,
  } = getGroupData(groups, group);

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
        <ProductPrice price={price || 0} course={rate || 38} />
      </Box>
      {!toggle ? (
        <IncomeDeleteButton product={groupProducts} />
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

export function GroupInfo({
  toggle,
  groups,
}: {
  toggle: boolean;
  groups: Map<string, IProduct[]>;
}) {
  const selectedGroup = useSelector((store) => store.groups.select);
  return (
    <Box
      sx={{
        position: "relative",
        border: "light",
        borderRadius: 1,
        minWidth: "100%",
        mb: 11,
        mr: "5rem",
        maxWidth: toggle ? "86re=" : "0rem",
        maxHeight: toggle ? "100rem" : "0rem",
        opacity: toggle ? 1 : 0,
        transition: `opacity ${toggle ? 0.8 : 0}s ease`,
        overflow: !toggle && "hidden",
      }}
    >
      {toggle && <GroupCloseX />}
      <GroupInfoHeader />
      {selectedGroup !== "none" &&
        groups.get(selectedGroup)?.map((product) => {
          return (
            <Grid
              gap={0}
              sx={{
                backgroundColor: "background.main",
                "&:hover": {
                  boxShadow: "standard",
                },
              }}
              columns={["1fr 16rem"]}
              key={product.id}
            >
              <ModalBody product={product} />
              <Grid
                columns={["5fr 2fr"]}
                sx={{
                  borderBottom: "lightgrey 1px solid",
                }}
              >
                <ProductStatus status={product.status} />
                <ProductDeleteButton product={product} />
              </Grid>
            </Grid>
          );
        })}
    </Box>
  );
}

export function GroupInfoHeader() {
  const group = useSelector((store) => store.groups.select);
  return (
    <Box sx={{ borderBottom: "lightgrey 1px solid", bg: "background.main" }}>
      <h2 sx={{ variant: "styles.headers.title", pl: 4, pb: 3 }}>{group}</h2>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          pl: 4,
          pb: 3,
        }}
      >
        <div
          sx={{
            bg: "primary.second",
            height: "2rem",
            width: "2rem",
            borderRadius: 0,
            variant: "styles.box.flex.center",
            boxShadow: "green",
            cursor: "pointer",
          }}
        >
          <BsPlus color={"white"} size={14} />
        </div>
        <p sx={{ fontSize: 3 }}>Add product</p>
      </div>
    </Box>
  );
}

export function GroupCloseX() {
  const dispatch = useAppDispatch();
  return (
    <div
      sx={{
        variant: "styles.buttons.x",
      }}
      onClick={() => dispatch(setGroup("none"))}
    >
      <IoMdClose
        sx={{
          variant: "styles.box.absolute.center",
          color: "text.main",
          opacity: 0.6,
        }}
        size={20}
      />
    </div>
  );
}
