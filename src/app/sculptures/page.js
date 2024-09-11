import Image from "next/image"
import Head from "next/head"
import Link from "next/link"


import Homegraphic from "@/components/homegraphic"
import {FlipLinkNav, FlipLink} from "@/components/flipLink"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lolo's Website</title>
      </Head>
      <main className="px-10">
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
            <p className="text-md py-5 leading-8">
              sculptures
            </p>
          </div>
        </section>
        <section className="h-screen">
          <Homegraphic/>
        </section>
        <section>
          <FlipLink
            href="https://www.instagram.com/wersdiese/"
            >
              INSTAGRAM</FlipLink>
        </section>
        

<footer class="rounded-lg shadow m-4 dark:bg-blue-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-left md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://cgidoggs.world//" class="hover:underline">cgistudio</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



      </main>
    </div>
  )
}
