
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";



export const metadata: Metadata = {
  title: 'biifco platform',
  description: 'Unleash the Full Potential of blockchain',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body classname={inter.className}>{children}</body>
    </html>
  )
}