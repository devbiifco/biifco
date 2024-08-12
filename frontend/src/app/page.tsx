import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { textFont } from "../config/fonts";
/*import Footer from '../components/Footer';*/

import type { AppProps } from 'next/app';
import Header from '@/components/ui/header';
import '../styles/globals.css'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
    </>
  )
}