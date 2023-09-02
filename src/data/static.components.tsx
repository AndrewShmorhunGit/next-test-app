import { palette } from "app/styles/services/palette";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// handle that as dependency
const headerHeight = 10;

export const getNavigationData = () => {
  const navigationData = [
    { name: "income", link: "products", active: false },
    { name: "groups", link: "orders", active: true },
    { name: "products", link: "", active: false },
    { name: "users", link: "", active: false },
    { name: "settings", link: "", active: false },
  ];
  return { navigationData };
};

export const getFooterData = () => {
  const footerHight = 5.2;

  const content =
    "Developed by Shmorhun Andrew for testing porpoises. All rights reserved";

  const year = new Date().getFullYear();

  const links = [
    {
      icon: <AiFillGithub size={24} color={palette.main_primary_dark} />,
      link: "https://github.com/AndrewShmorhunGit/next-test-app",
    },
    {
      icon: <AiFillLinkedin size={24} color={palette.main_primary_dark} />,
      link: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
    },
  ];
  return { links, content, year, footerHight };
};