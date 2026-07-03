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
      <head>
        <link rel="preload" href="/fonts/AlteHaasGroteskRegular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AlteHaasGroteskBold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Dirty-Luxe.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/bg-1.webp" as="image" />
      </head>
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
