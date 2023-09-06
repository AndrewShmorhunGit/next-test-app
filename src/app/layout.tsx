/** @jsxImportSource theme-ui */
"use client";
import "app/styles/globals.css";
import Providers from "app/redux/provider";
import { Inter } from "next/font/google";
import { SocketProvider } from "providers/socket.provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme";
import { Metadata } from "next/types";
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
      <ClerkProvider>
        <body className={inter.className}>
          <Providers>
            <SocketProvider>
              <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
            </SocketProvider>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
