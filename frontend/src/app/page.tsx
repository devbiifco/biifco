import { Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { roboto_mono, textFont } from "../config/fonts";

export default function Home() {
  return (
    <main className="">
      <h2>Learn</h2>
      <h1 className={'${textFont.className} font-bold'}>hola mundo</h1>
    </main>
  );
}
