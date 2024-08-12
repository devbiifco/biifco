import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { roboto_mono, textFont } from "../config/fonts";
import Header from '@/components/ui/header';
import { AppProps } from "next/app";
/*import Footer from '../components/Footer';*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
    </>
  )
}