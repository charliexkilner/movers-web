import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movers",
  description: "Cafe by day, HiFi by night. 91 Brick Lane, London, E1 6QL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/alte-haas-grotesk"
        />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
