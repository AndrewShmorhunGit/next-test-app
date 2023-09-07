/** @jsxImportSource theme-ui */
import { mq } from "app/styles/services/media-queries";
import { palette } from "app/styles/services/palette";
import { appShadows, container } from "app/styles/services/styles";
import { FlexBox } from "components/lib/Boxes";
import { ShieldLogo } from "components/lib/Logos";
import { getHeaderData } from "data/static.components";
import { LuClock3 } from "react-icons/lu";
import { Grid } from "theme-ui";
import { getDate } from "utils/functions";
import { Clocks } from "./Client";
import { SocketConnection } from "./SocketConnection";

const { styles } = getHeaderData();
const { day, date, dayOfMonth } = getDate();

export function TopMenuServerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      sx={{
        maxWidth: "100vw",
        boxShadow: appShadows.header,
        background: palette.background_main,
        gridColumn: "1/3",
      }}
    >
      {children}
    </div>
  );
}

export function TopMenuWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TopMenuServerWrapper>
      <div
        sx={{
          ...container,
          ...styles,
          [mq.mini]: { ...styles, padding: "0 4rem" },
        }}
      >
        {children}
      </div>
    </TopMenuServerWrapper>
  );
}

export function MainLogo() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <ShieldLogo />
      <FlexBox flex="center">
        <p
          sx={{
            fontSize: [1, 2, 2, 3],
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          inventory
        </p>
      </FlexBox>
    </div>
  );
}

export function HeaderFormSearch() {
  return (
    <div>
      <form>
        <input
          type="text"
          id="#search"
          placeholder="Search"
          sx={{
            variant: "styles.forms.input",
          }}
        />
      </form>
    </div>
  );
}

export function InfoBlock() {
  return (
    <Grid
      gap={2}
      columns={"3fr 1fr"}
      sx={{
        maxWidth: "24rem",
        fontSize: 2,
      }}
    >
      <Day />
      <SocketConnection />
      <Date />
      <Time />
    </Grid>
  );
}

function Time() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        gridColumn: 2,
        gridRow: 2,
        gap: 3,
      }}
    >
      <LuClock3 sx={{ color: "primary.second" }} size={18} />
      <Clocks />
    </div>
  );
}

function Date() {
  return (
    <div
      sx={{
        gridColumn: 1,
        gridRow: 2,
        gap: 1,
        display: "flex",
        [mq.mini]: {
          display: "none",
        },
      }}
    >
      <p sx={{ fontWeight: "bold" }}>{dayOfMonth + " "}</p>
      <p>{date}</p>
    </div>
  );
}

function Day() {
  return (
    <p
      sx={{
        gridColumn: 1,
        gridRow: 1,
        display: "flex",
        [mq.mini]: {
          display: "none",
        },
      }}
    >
      {day}
    </p>
  );
}
