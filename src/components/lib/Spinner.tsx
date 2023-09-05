import spinner from "content/logos/spinner.svg";

const spin = {
  "0": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(1turn)",
  },
};

export const Spinner = ({ size }: { size: number }) => (
  <img
    className="spinner"
    style={{
      animation: `{ 
  }}`,
      // animation: `linear 1s infinite ${spin}`,
      width: `${size}rem`,
      height: `${size}rem`,
    }}
    src={spinner}
    alt=""
  />
);
