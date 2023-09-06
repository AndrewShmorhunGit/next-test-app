/** @jsxImportSource theme-ui */
"use client";
import { palette } from "app/styles/services/palette";
import { appShadows, flexCenter } from "app/styles/services/styles";
import { HiArrowSmLeft } from "react-icons/hi";
import { getNavigationData } from "data/static.components";
import { useSelector, useAppDispatch, selectNav, toggleNav } from "app/redux";
import Link from "next/link";
import React from "react";
import { RootState } from "app/redux/store";
import { useMedia } from "hooks/useMedia";
import { Settings, UserImage } from "./Server";

const { navigationData: navigation } = getNavigationData();

export function MenuWrapper({ children }: { children: React.ReactNode }) {
  const { setMedia } = useMedia();
  // toggle navigation management
  const isModal = useSelector((state: RootState) => state.modal.value);
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  const dispatch = useAppDispatch();

  const [isSaveToggle, setSaveToggle] = React.useState(true);

  const handleNavToggle = () => {
    if (isToggle) {
      if (isModal !== "none") {
        setSaveToggle(true);
        dispatch(toggleNav(false));
      }
      return;
    } else {
      setSaveToggle(false);
      if (isModal === "none") dispatch(toggleNav(isSaveToggle));
      return;
    }
  };

  React.useEffect(() => {
    handleNavToggle();
  }, [isModal, handleNavToggle]);

  // size management
  const [isWindowHeight, setWindowHeight] = React.useState(500);

  React.useEffect(() => {
    setWindowHeight(global.innerHeight);
  }, []);

  return (
    <div
      id="navigation"
      sx={{
        transition: `${isToggle ? 0.3 : 0.2}s min-width ease`,
        minWidth: isToggle ? "20rem" : "2rem",
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        display: "block",
        minHeight: isWindowHeight >= 400 ? `calc(100vh - 10rem)` : "100vh",
        boxShadow: appShadows.header,
        paddingBottom: `${setMedia(8, 6, 5.2, 4)}rem`,
        position: "relative",
        cursor:
          isModal === "none" && isToggle === false ? "pointer" : "default",
      }}
      onClick={() =>
        isModal === "none" &&
        isToggle === false &&
        dispatch(toggleNav(!isToggle))
      }
    >
      <div
        sx={{
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
          zIndex: "2",
          cursor: "pointer",
        }}
        onClick={() => isModal === "none" && dispatch(toggleNav(!isToggle))}
      >
        <HiArrowSmLeft
          sx={{
            position: "absolute",
            left: "60%",
            top: "50%",
            transform: isToggle
              ? "translate(-50%, -50%)"
              : "translate(-50%, -50%) rotate(0.5turn)",
          }}
          size={16}
          color={palette.main_primary_dark}
        />
      </div>
      {children}
    </div>
  );
}

export function User() {
  const { setMedia } = useMedia();
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <div
      sx={{
        padding: `${setMedia(8, 6, 5.2, 4)}rem 4rem`,
        ...flexCenter,
        transition: `${isToggle ? 0.5 : 0.3}s transform ease`,
        transform: isToggle ? "translateX(0rem)" : "translateX(-20rem)",
      }}
    >
      <div sx={{ position: "relative", width: "9.6rem" }}>
        <>
          {/* <UserImage /> */}
          <Settings />
        </>
      </div>
    </div>
  );
}

export function Menu() {
  const select = useSelector((state: RootState) => state.navigation.selector);
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  const dispatch = useAppDispatch();

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.2rem",
        transition: `${isToggle ? 0.5 : 0.3}s transform ease`,
        transform: isToggle ? "translateX(0rem)" : "translateX(-20rem)",
      }}
    >
      {navigation.map(({ name, link }) => {
        return (
          <Link
            key={name}
            sx={{
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
