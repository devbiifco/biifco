
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className="min-h-screen">
      { children }
    </body>
    </html>
  );
}
