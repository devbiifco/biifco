import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { textFont, roboto_mono } from "../config/fonts";

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
      <body className={textFont.className}>{children}</body>
    </html>
  );
}
