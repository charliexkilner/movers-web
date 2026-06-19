import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movers",
  description: "Nottingham's Listening Cafe, late night bar and community third space. Community co-working, coffee, drinks and dancing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
