import "app/styles/globals.css";
import Providers from "app/redux/provider";
import { LayoutWrapper } from "components/wrapper/Wrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SocketProvider } from "providers/socket.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Web App",
  description: "DzenCode Testing App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-touch">
      <body className={inter.className}>
        <Providers>
          <SocketProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SocketProvider>
        </Providers>
      </body>
    </html>
  );
}
