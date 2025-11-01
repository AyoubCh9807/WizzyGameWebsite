import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "Wizzy Game™ - The game where everything begins",
  description:
    "Official landing page for Wizzy Game™, a fast-paced 3D game by AyoubCh. Stay updated with banners, logos, and upcoming releases.",
  authors: [{ name: "AyoubCh" }],
  keywords: [
    "Wizzy Game",
    "indie game",
    "3D adventure",
    "platformer",
    "AyoubCh",
    "game landing page",
    "indie gaming",
    "3d game",
    "ayoubch",
    "fast paced",
    "quick game",
    "fun game",
    "pc game",
    "mobile game"
  ],
  openGraph: {
    title: "Wizzy Game™ - Official Landing Page",
    description:
      "Official landing page for Wizzy Game™, a fast-paced 3D game by AyoubCh. Stay updated with banners, logos, and upcoming releases.",
    url: "https://wizzygame.vercel.app",
    siteName: "Wizzy Game™",
    type: "website",
    images: [
      {
        url: "https://wizzygame.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "Wizzy Game™ Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WizzyGame",
    creator: "@AyoubCh",
    title: "Wizzy Game™ - Official Landing Page",
    description:
      "Official landing page for Wizzy Game™, a fast-paced 3D game by AyoubCh. Stay updated with banners, logos, and upcoming releases.",
    images: ["https://wizzygame.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
