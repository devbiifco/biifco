import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { textFont } from "../config/fonts";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: "biifco platform",
  description: "Unleash the Full Potential of blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${textFont.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
