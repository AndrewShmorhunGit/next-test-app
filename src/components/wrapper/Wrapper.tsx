import { TopMenu } from "components/header/TopMenu";
import { NavigationMenu } from "components/navigation/NavigationMenu";
import { PageWrapper, LayoutSubWrapper } from "./Components";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LayoutSubWrapper>
      <TopMenu />
      <NavigationMenu />
      <PageWrapper>{children}</PageWrapper>
    </LayoutSubWrapper>
  );
}
