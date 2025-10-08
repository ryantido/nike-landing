import type { Metadata } from "next";
import { Outfit, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike - The best shoes",
  description: "A stunning Nike landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${outfit.variable} ${geistMono.variable} antialiased font-outfit`}
      >
        {children}
      </body>
    </html>
  );
}
