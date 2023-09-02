import { palette } from "app/styles/services/palette";
import { appShadows, container, flexCenter } from "app/styles/services/styles";
import { useClock } from "hooks/useClock";
import { ClocksLogo, ShieldLogo } from "components/lib/Logos";
import { getDate } from "utils/functions";
import { useAppDispatch } from "hooks/useAppDispatch";

import { increment } from "app/redux/features/counter/counter.slice";
import { useSelector } from "react-redux";
import { RootState } from "app/redux/store";

export function TopMenuWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        boxShadow: appShadows.header,
        background: palette.background_main,
        gridColumn: "1/3",
      }}
    >
      <div
        style={{
          ...container,
          height: "10rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function MainLogo() {
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
      <ShieldLogo height={48} width={48} />
      <div style={flexCenter}>
        <p
          style={{
            fontSize: "1.4rem",
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
  return (
    <div>
      <form>
        <input
          type="text"
          id="#search"
          placeholder="Search"
          style={{
            borderRadius: "0.4rem",
            paddingLeft: "0.4rem",
            display: "flex",
            alignItems: "center",
            background: palette.background_second,
            color: palette.text_dark,
            fontWeight: 700,
            border: "none",
            fontSize: "1.6rem",
            width: "32rem",
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
  useAppDispatch();
  const dispatch = useAppDispatch();

  const { day, date, dayOfMonth } = getDate();
  const { time } = useClock();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "1.4rem",
        fontWeight: 500,
        gap: "0.4rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{day}</p>
        <p onClick={() => dispatch(increment())}>#{count}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "4rem",
        }}
      >
        <div
          style={{
            gap: "0.8rem",
            display: "flex",
          }}
        >
          <p style={{ fontWeight: 700 }}>{dayOfMonth + " "}</p>
          <p>{date}</p>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "1.2rem",
          }}
        >
          <div>
            <ClocksLogo
              height={18}
              width={18}
              fill={palette.main_primary_dark}
            />
          </div>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}
