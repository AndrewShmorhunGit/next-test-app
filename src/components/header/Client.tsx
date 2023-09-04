"use client";

import { palette } from "app/styles/services/palette";
import { container, flexCenter } from "app/styles/services/styles";
import { useClock } from "hooks/useClock";
import { ClocksLogo, ShieldLogo } from "components/lib/Logos";
import { getDate } from "utils/functions";
import { useSelector, increment, useAppDispatch } from "app/redux";
import { RootState } from "app/redux/store";
import { useMedia } from "hooks/useMedia";
import { PiUsersBold } from "react-icons/pi";
import { TopMenuServerWrapper } from "./Server";
import { getHeaderData } from "data/static.components";
import { useSocket } from "providers/socket.provider";
// import { count } from "providers";
// console.log(count);
const { styles } = getHeaderData();

export function TopMenuWrapper({ children }: { children: React.ReactNode }) {
  const { isMedia } = useMedia();
  return (
    <TopMenuServerWrapper>
      <div
        style={
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
      style={{
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
      <div style={flexCenter}>
        <p
          style={{
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
          style={{
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
  const count = useSelector((state: RootState) => state.counter.value);
  const { isConnected } = useSocket();
  const dispatch = useAppDispatch();
  const { isMedia } = useMedia();
  const { day, date, dayOfMonth } = getDate();
  const { time } = useClock();
  return (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "3fr 1fr",
        gridAutoRows: "1fr 1fr",
        maxWidth: "20rem",
        fontSize: "1.4rem",
        fontWeight: 500,
        columnGap: "0.4rem",
      }}
    >
      <p
        style={{
          display: isMedia.mini ? "none" : "flex",
          gridColumn: "1",
          gridRow: "1",
        }}
      >
        {day}
      </p>
      <div
        style={{
          gridColumn: "2",
          gridRow: "1",
          display: "flex",
          gap: "1.2rem",
        }}
      >
        <div>
          <PiUsersBold
            style={{ cursor: "pointer" }}
            // onClick={() => dispatch(increment())}
            size={18}
            color={isConnected ? palette.main_primary_dark : palette.error}
          />
        </div>
        <p>{count}</p>
      </div>

      <div
        style={{
          gridColumn: "1",
          gridRow: "2",
          gap: "0.8rem",
          display: isMedia.mini ? "none" : "flex",
        }}
      >
        <p style={{ fontWeight: 700 }}>{dayOfMonth + " "}</p>
        <p>{date}</p>
      </div>
      <div
        style={{
          gridColumn: "2",
          gridRow: "2",
          display: "flex",
          gap: "1.2rem",
        }}
      >
        <div>
          <ClocksLogo height={18} width={18} fill={palette.main_primary_dark} />
        </div>
        <p>{time}</p>
      </div>
    </div>
  );
}
