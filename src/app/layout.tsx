import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Personal House Cleaning in Chicago | Precious Home Help",
    template: "%s | Precious Home Help",
  },
  description:
    "Owner-operated, personal house cleaning for Hyde Park, Woodlawn, Bronzeville, and nearby Chicago neighborhoods. $35/hour, fully licensed and insured.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://precioushomehelp.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Precious Home Help",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
