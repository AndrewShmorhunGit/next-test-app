/** @jsxImportSource theme-ui */
import { flexCenter } from "app/styles/services/styles";
import { getFooterData } from "data/static.components";
import Link from "next/link";
import { FooterText } from "./Client";

const { footerHight, links } = getFooterData();

function FooterLinks() {
  return (
    <>
      {links.map(({ icon, link }) => {
        return (
          <Link
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{icon}</div>
          </Link>
        );
      })}
    </>
  );
}

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      sx={{
        maxHeight: `${footerHight}rem`,
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
      }}
    >
      <div sx={{ ...flexCenter, gap: "2rem" }}>{children}</div>
      <FooterText />
    </div>
  );
}

export { FooterLinks };
