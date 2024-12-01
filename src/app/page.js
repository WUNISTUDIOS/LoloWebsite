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
        <section className="flex items-center justify-center mx-auto px-4 py-2 sm:px-6 md:px-8 lg:px-12 xl:px-1">
          <div> 
            <ul className="flex space-x-4 underline">
              <li>
                <FlipLink href="https://www.instagram.com/wersdiese/">INSTAGRAM</FlipLink>
              </li>
              <li>
                <ToMail />
              </li>
              <li>
                <Link href="/sculptures">documentation</Link>
              </li>
            </ul>
          </div>
        </section>
        
        <section >
          {/* <Homegraphic scale={100}/> */}
          <SpikeHeadPage />
          {/* <GroupAnimImport /> */}
        </section>
      </main>
    </div>
  )
}
