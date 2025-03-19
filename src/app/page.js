"use client"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic"
import localFont from 'next/font/local'
import { useEffect, useState } from "react"


const SpikeHeadPage = dynamic(() => import('@/components/canvasSpikeHead'))

const NanoFont = localFont({
  src: '../../public/fonts/NaNHoloGigawide-Ultra.ttf',
  weight: '700',
  variable: '--font-nano',
})
const MarioFont = localFont({
  src: '../../public/fonts/Mario-Regular.otf',
  weight: '700',
  variable: '--font-Mario',
})

export default function Home() {
  return (
    <main className={NanoFont.className} >
      <Head>
        <title>Lolo&apos;s Website</title>
      </Head>
      <section>
        <div className=" mx-auto rounded-lg shadow-xl h-screen overflow-y-hidden">
          <SpikeHeadPage />
        </div>
      </section>
    </main>
  )
}
