import "app/styles/globals.css";
import Providers from "app/redux/provider";
import { LayoutWrapper } from "components/wrapper/Wrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
