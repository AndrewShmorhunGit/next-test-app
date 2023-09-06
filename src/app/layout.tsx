"use client";
import "app/styles/globals.css";
import Providers from "app/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SocketProvider } from "providers/socket.provider";
// import { ClerkProvider } from "@clerk/nextjs";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../../theme";
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
    <SocketProvider>
      <html lang="en" className="no-touch">
        {/* <ClerkProvider> */}
        <body className={inter.className}>
          <Providers>
            <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
          </Providers>
        </body>
        {/* </ClerkProvider> */}
      </html>
    </SocketProvider>
  );
}
