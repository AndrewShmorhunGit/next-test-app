/** @jsxImportSource theme-ui */
"use client";
import "app/styles/globals.css";
import Providers from "app/redux/provider";
import { SocketProvider } from "providers/socket.provider";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme";
import { Metadata } from "next/types";

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
      <body>
        <Providers>
          <SocketProvider>
            <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
          </SocketProvider>
        </Providers>
      </body>
    </html>
  );
}
