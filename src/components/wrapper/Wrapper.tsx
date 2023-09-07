import { TopMenu } from "components/header/TopMenu";
import { NavigationMenu } from "components/navigation/NavigationMenu";
import { LayoutSubWrapper, PageWrapper } from "./Client";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LayoutSubWrapper>
      <TopMenu />
      <NavigationMenu />
      <PageWrapper>{children}</PageWrapper>
    </LayoutSubWrapper>
  );
}
