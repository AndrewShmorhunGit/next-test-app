/** @jsxImportSource theme-ui */
import spinner from "content/logos/spinner.svg";
import Image from "next/image";

const spin = {
  "0": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(1turn)",
  },
};

export const Spinner = ({ size }: { size: number }) => (
  <Image
    className="spinner"
    sx={{
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
