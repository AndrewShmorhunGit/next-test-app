import "app/styles/globals.css";
import Providers from "app/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SocketProvider } from "providers/socket.provider";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <Providers>
        <html lang="en" className="no-touch">
          <body className={inter.className}>
            <SocketProvider>{children}</SocketProvider>
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
