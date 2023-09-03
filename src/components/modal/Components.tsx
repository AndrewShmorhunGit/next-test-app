import { setModal, useAppDispatch } from "app/redux";
import { palette } from "app/styles/services/palette";
import { createGrid, flexCenter } from "app/styles/services/styles";
import { GiConfirmed } from "react-icons/gi";

export function ModalTestContent() {
  const dispatch = useAppDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "8rem",
          padding: "2.4rem 3.2rem",
          borderBottom: `0.1rem lightgrey solid`,
        }}
      >
        <h2 style={{ color: palette.text_dark, fontSize: "1.6rem" }}>
          Are you sure that you wnt to do something?
        </h2>
      </div>
      <div
        style={{
          ...createGrid("4rem 6rem auto", 1),
          padding: "0.8rem 2.4rem",

          columnGap: "2.8rem",
        }}
      >
        <div style={{ alignSelf: "center", paddingLeft: "1.6rem" }}>
          <div
            style={{
              ...flexCenter,
              width: "0.8rem",
              height: "0.8rem",
              background: palette.main_primary,
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <img
            style={{ maxHeight: "3.2rem" }}
            src="https://www.petconnection.ie/Files/127308/Img/11/WHISKAS-7-Cat-Pouches-Fish-Favourites-In-Jelly-12x85g-big.jpg"
            alt="whiskas"
          />
        </div>
        <div style={{ alignSelf: "center", paddingLeft: "2rem" }}>
          <p
            style={{
              textDecoration: "underline lightgrey",
              color: palette.text_dark,
              fontSize: "1.2rem",
              fontWeight: 500,
            }}
          >
            WHISKAS® Senior 7+ Fish Favourites in Jelly Wet Cat Food Pouches 12
            x 85g
          </p>
          <p
            style={{
              textDecoration: "underline lightgrey",
              color: "grey",
              fontSize: "1.2rem",
              fontWeight: 500,
            }}
          >
            HL0919T
          </p>
        </div>
      </div>
      <div
        style={{
          height: "10rem",
          background: palette.main_primary,
          display: "flex",
          justifyContent: "flex-end",
          padding: "2.4rem",
          gap: "2rem",
        }}
      >
        <Button
          type={"secondary"}
          content={"cancel"}
          clickHandler={() => dispatch(setModal("none"))}
        />
        <Button
          type={"modal"}
          content={[<GiConfirmed size={12} color={palette.error} />, "test"]}
        />
      </div>
    </div>
  );
}

export function Button({
  type,
  content,
  clickHandler,
}: {
  type: "primary" | "secondary" | "modal";
  content: string | React.ReactNode;
  clickHandler?: Function;
}) {
  const variants = {
    primary: { background: palette.background_main, color: palette.error },
    secondary: {
      background: palette.main_primary,
      color: palette.white,
    },
    modal: {
      background: palette.background_main,
      color: palette.error,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.2rem",
    },
  };

  return (
    <button
      className="hover"
      style={{
        border: "none",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: "1.6rem",
        padding: "2rem 4rem",
        borderRadius: "10rem",
        cursor: "pointer",
        letterSpacing: "0.1rem",
        ...variants[type],
      }}
      onClick={() =>
        clickHandler
          ? clickHandler()
          : typeof content === "string" &&
            console.log(`button "${content}" clicked`)
      }
    >
      {content}
    </button>
  );
}
