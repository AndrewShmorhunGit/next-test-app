/** @jsxImportSource theme-ui */
"use client";
import Providers from "app/redux/provider";
import { SocketProvider } from "providers/socket.provider";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../../app/styles/theme";
import "app/styles/globals.css";

export function AppProviders({ children }: { children: React.ReactNode }) {
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
