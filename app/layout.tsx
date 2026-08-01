import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abishai — Creative Technologist",
  description:
    "Multidisciplinary Creative Technologist transforming ideas into immersive digital experiences — from cinematic 3D worlds to modern websites and motion graphics.",
  keywords: [
    "creative technologist",
    "3D artist",
    "web developer",
    "motion graphics",
    "Blender",
    "Unreal Engine",
    "Next.js",
    "freelance",
    "brand identity",
    "environment design",
  ],
  openGraph: {
    title: "Abishai — Creative Technologist",
    description:
      "Transforming ideas into immersive digital experiences through 3D, motion, and code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
