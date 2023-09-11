/** @jsxImportSource theme-ui */
"use client";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      sx={{
        minHeight: "100vh",
        variant: "styles.box.flex.center",
        p: 4,
      }}
    >
      {children}
    </div>
  );
}
