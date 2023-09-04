// "use client";

import "app/styles/globals.css";
import Providers from "app/redux/provider";
import { LayoutWrapper } from "components/wrapper/Wrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { useSelector } from "app/redux";
// import { RootState } from "./redux/store";

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
  // const isModal = useSelector((state: RootState) => state.modal.value);
  return (
    <Providers>
      <html
        lang="en"
        // className="no-touch"
        // style={{ overflow: "hidden" }}
      >
        {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
        <body className={inter.className}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </Providers>
  );
}
