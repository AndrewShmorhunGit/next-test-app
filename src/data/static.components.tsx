/** @jsxImportSource theme-ui */
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const getNavigationData = () => {
  const navigationData = [
    { name: "income", link: "income" },
    { name: "groups", link: "groups" },
    { name: "products", link: "products" },
    { name: "users", link: "users" },
    { name: "settings", link: "settings" },
  ];
  return { navigationData };
};

export const getFooterData = () => {
  const footerHight = 5.2;

  const content =
    "Developed by Shmorhun Andrew for testing porpoises. All rights reserved.";

  const year = new Date().getFullYear();

  const links = [
    {
      icon: <AiFillGithub size={20} sx={{ color: "primary.second" }} />,
      link: "https://github.com/AndrewShmorhunGit/next-test-app/tree/latest",
    },
    {
      icon: <AiFillLinkedin size={20} sx={{ color: "primary.second" }} />,
      link: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
    },
  ];
  return { links, content, year, footerHight };
};

export const getHeaderData = () => {
  const styles = {
    height: "10rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return { styles };
};
