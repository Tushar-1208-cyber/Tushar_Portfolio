import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display, Instrument_Serif, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tushar Gupta | Full Stack & AI Developer",
  description: "Creative Full Stack & AI Developer specializing in React, Node.js, C++, and Generative AI integrations. Developing fast, highly-scalable, and premium web systems.",
  keywords: [
    "Tushar Gupta",
    "Full Stack Developer",
    "AI Developer",
    "React Developer",
    "Software Engineer",
    "System Architecture",
    "Portfolio"
  ],
  authors: [{ name: "Tushar Gupta", url: "https://github.com/Tushar-1208-cyber" }],
  creator: "Tushar Gupta",
  robots: "index, follow",
  openGraph: {
    title: "Tushar Gupta | Full Stack & AI Developer",
    description: "Creative Full Stack Developer specializing in React, Node.js, C++, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Gupta | Full Stack & AI Developer",
    description: "Creative Full Stack Developer specializing in React, Node.js, C++, and AI integrations.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${instrument.variable} ${poppins.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen w-full font-sans overflow-x-hidden bg-background text-foreground">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

