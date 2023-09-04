import { getFooterData } from "data/static.components";
import Link from "next/link";

const { links } = getFooterData();

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

export { FooterLinks };
