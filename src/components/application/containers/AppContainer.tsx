import { ReactNode } from "react";

function AppContainer({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-touch">
      <body>{children}</body>
    </html>
  );
}

export { AppContainer };
