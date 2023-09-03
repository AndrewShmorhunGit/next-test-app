"use client";
import { palette } from "app/styles/services/palette";
import {
  absoluteCenter,
  appShadows,
  flexCenter,
} from "app/styles/services/styles";
import { RiSettings5Fill } from "react-icons/ri";
import { HiArrowSmLeft } from "react-icons/hi";
import { getNavigationData } from "data/static.components";
import { useSelector, useAppDispatch, selectNav } from "app/redux";
import Link from "next/link";
import React from "react";
import { RootState } from "app/redux/store";

const { navigationData: navigation } = getNavigationData();

export function MenuWrapper({ children }: { children: React.ReactNode }) {
  // toggle navigation management
  const isModal = useSelector((state: RootState) => state.modal.value);

  const [isToggle, setToggle] = React.useState(true);

  const [isSaveToggle, setSaveToggle] = React.useState(true);

  React.useEffect(() => {
    if (isToggle) {
      if (isModal !== "none") {
        setSaveToggle(true);
        setToggle(false);
      }
      return;
    } else {
      setSaveToggle(false);
      if (isModal === "none") setToggle(isSaveToggle);
      return;
    }
  }, [isModal]);

  // size management
  const [isWindowHeight, setWindowHeight] = React.useState(500);

  React.useEffect(() => {
    setWindowHeight(global.innerHeight);
  }, [global.innerHeight]);

  return (
    <div
      id="navigation"
      style={{
        transition: `${isToggle ? 1 : 0.2}s min-width ease`,
        minWidth: isToggle ? "20rem" : "2rem",
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        display: "block",
        minHeight: isWindowHeight >= 400 ? `calc(100vh - 10rem)` : "100vh",
        boxShadow: appShadows.header,
        paddingBottom: "8rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "2rem",
          width: "2rem",
          height: "2rem",
          background: palette.background_main,
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          border: `solid 0.2rem ${palette.main_primary_dark}`,
          borderRight: "none",
        }}
        onClick={() => isModal === "none" && setToggle(!isToggle)}
      >
        <HiArrowSmLeft
          style={{
            position: "absolute",
            left: "60%",
            top: "50%",
            transform: isToggle
              ? "translate(-50%, -50%)"
              : "translate(-50%, -50%) rotate(0.5turn)",
            cursor: "pointer",
          }}
          size={16}
          color={palette.main_primary_dark}
        />
      </div>
      <div
        style={{
          opacity: isToggle ? 1 : 0,
          transition: `${isToggle ? 1 : 0.4}s opacity ease`,
        }}
      >
        {isToggle ? children : null}
      </div>
    </div>
  );
}

export function User() {
  return (
    <div style={{ padding: "8rem 4rem", ...flexCenter }}>
      <div style={{ position: "relative", width: "9.6rem" }}>
        <UserImage />
        <Settings />
      </div>
    </div>
  );
}

export function UserImage() {
  return (
    <div
      style={{
        background: palette.background_third,
        overflow: "hidden",
        width: "9.6rem",
        height: "9.6rem",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <img
        style={{ width: "9.6rem", height: "9.6rem" }}
        src={
          "https://res.cloudinary.com/natalie-cakes/image/upload/v1693496671/dzenCode/user_ajakc7.jpg"
        }
      />
    </div>
  );
}

export function Settings() {
  return (
    <div style={{ position: "absolute", right: "0rem", bottom: "0rem" }}>
      <div
        style={{
          boxShadow: appShadows.settings,
          background: palette.background_second,
          width: "2.8rem",
          height: "2.8rem",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <RiSettings5Fill
          size={16}
          color={palette.main_primary_dark}
          style={{
            ...absoluteCenter,
          }}
        />
      </div>
    </div>
  );
}

export function Menu() {
  const select = useSelector((state: RootState) => state.navigation.selector);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.2rem",
      }}
    >
      {navigation.map(({ name, link }) => {
        return (
          <Link
            key={name}
            style={{
              display: "block",
              textDecoration: "none",
              padding: "0 0.4rem",
              border: "none",
              background: "transparent",
              color: palette.text_dark,
              fontSize: "1.6rem",
              fontWeight: "600",
              textAlign: "center",
              cursor: "pointer",
              textTransform: "uppercase",
              borderBottom: `solid 0.4rem ${
                select === name ? palette.main_primary_dark : "transparent"
              }`,
            }}
            href={`/${link}`}
            onClick={() => dispatch(selectNav(name))}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
