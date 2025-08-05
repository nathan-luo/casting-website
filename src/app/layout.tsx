import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casting - Building AI Leverage",
  description: "A student-founded applied AI lab documenting and delivering the technology for autonomous AI organizations.",
  keywords: ["AI", "autonomous organizations", "machine learning", "DSCubed", "unified data layer"],
  authors: [{ name: "Casting Team" }],
  openGraph: {
    title: "Casting - Building AI Leverage",
    description: "Forging autonomous AI organizations through unified data layers and intelligent action loops.",
    url: "https://casting.systems",
    siteName: "Casting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casting - Building AI Leverage",
    description: "Forging autonomous AI organizations through unified data layers and intelligent action loops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
