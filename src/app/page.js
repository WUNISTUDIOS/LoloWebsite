import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic"
import localFont from 'next/font/local'

import {FlipLinkNav, FlipLink} from "@/components/flipLink"
import ToMail from "@/components/email-button"

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
    <div>
      <Head>
        <title>Lolo's Website</title>
      </Head>
      <main className={NanoFont.className}>
        <section>
          <div className=" flex justify-center items-center mx-auto h-screen w-[90%] rounded-lg shadow-xl">
          {/* <Homegraphic scale={100}/> */}
          <SpikeHeadPage />
          </div>
          {/* <GroupAnimImport /> */}
        </section>
      </main>
    </div>
  )
}
