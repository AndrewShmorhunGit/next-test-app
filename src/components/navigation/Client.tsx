/** @jsxImportSource theme-ui */
"use client";
import { palette } from "app/styles/services/palette";
import { HiArrowSmLeft } from "react-icons/hi";
import { getNavigationData } from "data/static.components";
import { useSelector, useAppDispatch, selectNav, toggleNav } from "app/redux";
import React, { useCallback } from "react";
import { RootState } from "app/redux/store";
import { Settings, UserImage } from "./Server";
import NavLink from "next/link";
import { mq } from "app/styles/services/media-queries";

const { navigationData: navigation } = getNavigationData();

export function MenuWrapper({ children }: { children: React.ReactNode }) {
  // toggle navigation management
  const isModal = useSelector((state: RootState) => state.modal.value);
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  const dispatch = useAppDispatch();

  const [isSaveToggle, setSaveToggle] = React.useState(false);

  const handleNavToggle = useCallback(() => {
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
  }, [dispatch, isModal, isSaveToggle, isToggle]);

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
        pt: "4rem",
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        display: "block",
        minHeight: isWindowHeight >= 400 ? `calc(100vh - 10rem)` : "100vh",
        boxShadow: "standard",
        position: "relative",
        cursor:
          isModal === "none" && isToggle === false ? "pointer" : "default",
        [mq.medium]: { pt: "3.2rem" },
        [mq.small]: { pt: "2.8rem" },
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
          bg: "background.main",
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
            color: "text.main",
            position: "absolute",
            left: "60%",
            top: "50%",
            transform: isToggle
              ? "translate(-50%, -50%)"
              : "translate(-50%, -50%) rotate(0.5turn)",
          }}
          size={16}
        />
      </div>
      {children}
    </div>
  );
}

export function User() {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);
  return (
    <div
      sx={{
        p: ["8rem", "6rem", "5.2rem", "4ren"],
        variant: "styles.box.flex.center",
        transition: `${isToggle ? 0.5 : 0.3}s transform ease`,
        transform: isToggle ? "translateX(0rem)" : "translateX(-20rem)",
      }}
    >
      <div sx={{ position: "relative", width: "9.6rem" }}>
        <>
          <UserImage />
          <Settings />
        </>
      </div>
    </div>
  );
}

export function Menu() {
  const isToggle = useSelector((state: RootState) => state.navigation.toggle);

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.2rem",
        pb: 4,
        transition: `${isToggle ? 0.5 : 0.3}s transform ease`,
        transform: isToggle ? "translateX(0rem)" : "translateX(-20rem)",
      }}
    >
      {navigation.map(({ name, link }) => {
        return <NavigationLink key={name} name={name} link={link} />;
      })}
    </div>
  );
}

function NavigationLink({
  name,
  link,
}: {
  name: string;
  link: string;
}): React.JSX.Element {
  const select = useSelector((state: RootState) => state.navigation.selector);
  const dispatch = useAppDispatch();

  return (
    <NavLink
      key={name}
      sx={{
        display: "block",
        textDecoration: "none",
        p: "0 0.4rem",
        border: "none",
        background: "transparent",
        color: "text.main",
        fontSize: 2,
        fontWeight: "nav",
        textAlign: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        borderBottom: `solid 0.4rem ${
          select === name ? palette.main_primary_dark : "transparent"
        }`,
        "&:hover": { borderBottom: "solid 0.4rem #689e30", color: "text.main" },
      }}
      href={`/${link}`}
      onClick={() => dispatch(selectNav(name))}
    >
      {name}
    </NavLink>
  );
}
