import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galway Plumbing Solutions | Reliable Plumbing & Heating",
  description: "Premier plumbing and heating contractor serving Galway City & County since 2005. Emergency call-outs, boiler servicing, and full bathroom refits.",
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
