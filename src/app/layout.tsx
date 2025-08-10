import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casting - Student Blog on AI & Innovation",
  description: "A student-driven blog exploring artificial intelligence, technology, and innovation through research, experiments, and collaborative learning.",
  keywords: ["AI", "student blog", "machine learning", "technology", "innovation", "research", "artificial intelligence", "student projects", "tech education"],
  authors: [{ name: "Casting Student Community" }],
  openGraph: {
    title: "Casting - Student Blog on AI & Innovation",
    description: "Exploring AI, technology, and innovation through student perspectives. Join our community of learners pushing the boundaries of what's possible.",
    url: "https://casting.systems",
    siteName: "Casting Student Blog",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Casting Student Blog",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casting - Student Blog on AI & Innovation",
    description: "Exploring AI, technology, and innovation through student perspectives. Join our community of learners pushing the boundaries of what's possible.",
    images: ["/logo.png"],
    creator: "@casting_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-token-here",
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
