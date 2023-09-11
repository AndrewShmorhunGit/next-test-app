/** @jsxImportSource theme-ui */
"use client";

import { setGroup, useAppDispatch, useSelector } from "app/redux";
import { ModalBody } from "components/modal/Server";
import {
  IncomeDeleteButton,
  ProductDeleteButton,
} from "components/products/Client";
import {
  Guaranty,
  ProductPrice,
  ProductStatus,
} from "components/products/Server";
import { createGroups, getGroupData } from "data/groups";
import { catProducts } from "data/income";
import { useAsync } from "hooks/useAsync";
import { useState, useEffect } from "react";
import { BsListUl, BsPlus } from "react-icons/bs";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { Box, Grid } from "theme-ui";
import { httpExchange } from "utils/http.requests";

const { groups } = createGroups(catProducts);

export function GroupsHeader() {
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
        Income / {catProducts.length}
      </h2>
    </Box>
  );
}

export function Groups() {
  const [toggle, setToggle] = useState(false);
  const selectedGroup = useSelector((store) => store.groups.select);
  const [isExchangeRate, setExchangeRate] = useState(38);

  useEffect(() => {
    if (selectedGroup !== "none") setToggle(true);
    if (selectedGroup === "none") setToggle(false);
  }, [selectedGroup]);

  useEffect(() => {
    httpExchange().then((data) => setExchangeRate(data ? data : 36));
  }, []);

  return (
    <div sx={{ pt: "2rem" }}>
      <Grid gap={3} columns={toggle ? "36rem 1fr" : 1}>
        <Box>
          {Array.from(groups.keys()).map((group: string) => (
            <Group group={group} toggle={toggle} rate={isExchangeRate} />
          ))}
        </Box>
        <GroupInfo toggle={toggle} />
      </Grid>
    </div>
  );
}

export function Group({
  group,
  toggle,
  rate,
}: {
  group: string;
  toggle: boolean;
  rate: number;
}) {
  const selectedGroup = useSelector((store) => store.groups.select);
  const dispatch = useAppDispatch();

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

export function GroupInfo({ toggle }: { toggle: boolean }) {
  const selectedGroup = useSelector((store) => store.groups.select);
  return (
    <Box
      sx={{
        position: "relative",
        border: "light",
        borderRadius: 1,
        bg: "background.main",
        minWidth: "100%",
        mb: 11,
        mr: "5rem",
        maxWidth: toggle ? "86rem" : "0rem",
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
    <Box sx={{ borderBottom: "lightgrey 1px solid" }}>
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
