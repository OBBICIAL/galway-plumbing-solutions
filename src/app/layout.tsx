import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galway-plumbing-solutions.vercel.app"),
  title: "Galway Plumbing Solutions | Reliable Plumbing & Heating",
  description: "Premier plumbing and heating contractor serving Galway City & County since 2005. Emergency call-outs, boiler servicing, and full bathroom refits.",
  openGraph: {
    title: "Galway Plumbing Solutions",
    description: "Premier plumbing and heating contractor serving Galway City & County since 2005.",
    url: "https://galway-plumbing-solutions.vercel.app",
    siteName: "Galway Plumbing Solutions",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Galway Plumbing Solutions Logo",
      }
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galway Plumbing Solutions",
    description: "Premier plumbing and heating contractor serving Galway City & County since 2005.",
    images: ["/logo.jpg"],
  }
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
