
import type { Metadata, Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: 'biifco platform',
  description: 'Unleash the Full Potential of blockchain'
}


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
