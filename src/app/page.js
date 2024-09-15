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

const NanoFont = localFont({ 
  src: '../../public/fonts/NaNHoloGigawide-Ultra.ttf', 
  weight: '700', 
  variable: '--font-nano',
})


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lolo's Website</title>
      </Head>
      <main className={NanoFont.className}>
        <section className="min-h-0">
          <header className="navbar mb-12 flex justify-between">
            <div className="navbar-start">
              <Link href="/">LOGO</Link>
            </div>
            <div className="navbar-end">
              <div>
                  <FlipLinkNav href="/sculptures">Sculptures</FlipLinkNav></div>
              <div>
                  <FlipLinkNav href="/shoes">Shoes</FlipLinkNav></div>
            </div>
          </header>

          <div className=" text-center">
            <p className="text-12xl py-5 leading-8 text-[#7f1d1d]">
              LoLo
            </p>
          </div>
        </section>
        <section className="h-screen">
          {/* <Homegraphic scale={100}/> */}
          <GroupAnimImport />
        </section>
        <section>
          <FlipLink
            href="https://www.instagram.com/wersdiese/"
            >
              INSTAGRAM</FlipLink>
        </section>
        

<footer className="rounded-lg shadow m-4 dark:bg-blue-800">
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
