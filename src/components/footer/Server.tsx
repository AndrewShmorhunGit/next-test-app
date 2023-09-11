/** @jsxImportSource theme-ui */
import { getFooterData } from "data/static.components";
import Link from "next/link";
import { FooterText } from "./Client";
import { FlexBox } from "components/lib/Boxes";

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
            {icon}
          </Link>
        );
      })}
    </>
  );
}

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <FlexBox
      sx={{
        maxHeight: `${footerHight}rem`,
        gap: "0.4rem",
        pb: 1,
      }}
      flex={"column"}
    >
      <div sx={{ variant: "styles.box.flex.center", gap: "2rem" }}>
        {children}
      </div>
      <FooterText />
    </FlexBox>
  );
}

export { FooterLinks };
