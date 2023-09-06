/** @jsxImportSource theme-ui */
"use client";

import { palette } from "app/styles/services/palette";
import { container, flexCenter } from "app/styles/services/styles";
import { useClock } from "hooks/useClock";
import { ClocksLogo, ShieldLogo } from "components/lib/Logos";
import { getDate } from "utils/functions";
import { useMedia } from "hooks/useMedia";
import { getHeaderData } from "data/static.components";
import { SocketConnection } from "./SocketConnection";
import { TopMenuServerWrapper } from "./Server";

const { styles } = getHeaderData();

export function TopMenuWrapper({ children }: { children: React.ReactNode }) {
  const { isMedia } = useMedia();
  return (
    <TopMenuServerWrapper>
      <div
        sx={
          isMedia.mini
            ? { ...styles, padding: "0 4rem" }
            : { ...container, ...styles }
        }
      >
        {children}
      </div>
    </TopMenuServerWrapper>
  );
}

export function MainLogo() {
  const { setMedia } = useMedia();
  return (
    <div
      sx={{
        boxSizing: "border-box",
        height: "0rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <ShieldLogo
        height={setMedia(48, 44, 40, 32)}
        width={setMedia(48, 48, 40, 32)}
      />
      <div sx={flexCenter}>
        <p
          sx={{
            fontSize: `${setMedia(1.4, 1.2, 1)}rem`,
            textTransform: "uppercase",
            fontWeight: 700,
            color: palette.main_primary,
          }}
        >
          inventory
        </p>
      </div>
    </div>
  );
}

export function FormSearch() {
  const { isMedia } = useMedia();
  return (
    <div>
      <form>
        <input
          type="text"
          id="#search"
          placeholder="Search"
          sx={{
            display: isMedia.small || isMedia.mini ? "none" : "flex",
            borderRadius: "0.4rem",
            paddingLeft: "0.4rem",
            alignItems: "center",
            background: palette.background_second,
            color: palette.text_dark,
            fontWeight: 700,
            border: "none",
            fontSize: "1.6rem",
            maxWidth: isMedia.big ? "32rem" : isMedia.medium ? "24rem" : "0rem",
            height: "2.8rem",
            boxShadow: " inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)",
          }}
        />
      </form>
    </div>
  );
}

export function InfoBlock() {
  const { isMedia } = useMedia();
  const { day, date, dayOfMonth } = getDate();

  return (
    <div
      sx={{
        display: "grid",
        gridAutoColumns: "3fr 1fr",
        gridAutoRows: "1fr 1fr",
        maxWidth: "24rem",
        fontSize: "1.4rem",
        fontWeight: 500,
        columnGap: "0.4rem",
      }}
    >
      <p
        sx={{
          display: isMedia.mini ? "none" : "flex",
          gridColumn: "1",
          gridRow: "1",
        }}
      >
        {day}
      </p>
      <div
        sx={{
          gridColumn: "2",
          gridRow: "1",
          display: "flex",
          gap: "1.2rem",
        }}
      >
        <SocketConnection />
      </div>

      <div
        sx={{
          gridColumn: "1",
          gridRow: "2",
          gap: "0.8rem",
          display: isMedia.mini ? "none" : "flex",
        }}
      >
        <p sx={{ fontWeight: 700 }}>{dayOfMonth + " "}</p>
        <p>{date}</p>
      </div>
      <div
        sx={{
          gridColumn: "2",
          gridRow: "2",
          display: "flex",
          gap: "1.2rem",
        }}
      >
        <div>
          <ClocksLogo height={18} width={18} fill={palette.main_primary_dark} />
        </div>
        <Clocks />
      </div>
    </div>
  );
}

export function Clocks() {
  const { time } = useClock();
  return <p>{time}</p>;
}
