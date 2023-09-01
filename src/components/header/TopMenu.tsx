"use client";
import { ClocksLogo, ShieldLogo } from "components/lib/Logos";
import { getDate } from "utils/functions";
import { appShadows, container } from "app/styles/services/styles";
import main from "app/styles/modules/main.module.css";
import { palette } from "app/styles/services/palette";
import { Clock } from "components/lib/Clock";
export const headerHight: number = 10;

export function TopMenu() {
  const { day, date, dayOfMonth } = getDate();
  const { time } = Clock();
  return (
    <div
      style={{
        boxShadow: appShadows.header,
        background: palette.background_main,
      }}
    >
      <div style={{ ...container }}>
        <div
          style={{
            height: `${headerHight}rem`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "10rem" }}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <ShieldLogo height={48} width={48} />
              <div>
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
            <div className={main.flexCenter} style={{ width: "24rem" }}>
              {/* <FormSearch /> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                fontSize: "1.4rem",
                fontWeight: 500,
                width: "22rem",
              }}
            >
              <p>{day}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "4rem",
                }}
              >
                <div
                  style={{
                    maxWidth: "12rem",
                    gap: "0.4rem",
                    display: "flex",
                    flexDirection: "row",
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
          </div>
        </div>
      </div>
    </div>
  );
}
