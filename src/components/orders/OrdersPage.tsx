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
import { catProducts } from "data/income";
import { useEffect, useState } from "react";
import { BsListUl, BsPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Grid } from "theme-ui";
import { GroupInfoHeader, GroupCloseX } from "./Client";
import { createGroups, getGroupData } from "data/groups";

const { groups } = createGroups(catProducts);

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
        Income / {catProducts.length}
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
          {Array.from(groups.keys()).map((group: string) => (
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
        <ProductPrice price={price || 0} />
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
        transition: `max-height ${toggle ? 1 : 0}s ease`,
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
