import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic"
import localFont from 'next/font/local'



import Homegraphic from "@/components/homegraphic"
import TitoImport from "@/components/tito_import"
import {FlipLinkNav, FlipLink} from "@/components/flipLink"

const CompTito = dynamic(() => import('@/components/tito_import'),{
  ssr:false,
})

const GroupAnimImport = dynamic(() => import('@/components/import_groupanim'),{
  ssr:false,
})

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
        <section className="min-h-0">
          <header className="navbar mb-12 p-5 flex justify-between">
            <div className="navbar-start flex items-center">
              <Link 
              href="/"
              >
                <img
                  src="/TitoHeader2.png"
                  alt="TitoHeader"
                  width={150}
                  height={150}
                >
                </img>
              </Link>
                <p className="text-8xl md:text-10xl lg:text-12xl py-5 p-5 pt-10 leading-8 text-[#7f1d1d]">
                  LoLo
                </p>

            </div>
          </header>

        </section>
        <section>
          {/* <Homegraphic scale={100}/> */}
          <SpikeHeadPage />
          {/* <GroupAnimImport /> */}
        </section>
        <section>
          <FlipLink
            href="https://www.instagram.com/wersdiese/"
            >
              INSTAGRAM</FlipLink>
        </section>
        

{/* <footer className="font-sans md:font-serif rounded-lg shadow m-4 dark:bg-blue-800"> */}
<footer className={MarioFont.className}>
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-left md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://cgidoggs.world//" className="hover:underline">cgistudio</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



      </main>
    </div>
  )
}
