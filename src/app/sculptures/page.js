"use client"
import Head from "next/head"


import { Gallery } from "react-grid-gallery"

export default function Documentation() {
  const images = [
    {
      src: "images/lolofigure/IMG_9448.jpg",
      width: 750,
      height: 926,
      isSelected: false,
      caption: "matrix men"
    },
    {
      src: "images/lolofigure/IMG_9502.png",
      width: 1000,
      isSelected: false,
      caption: ""
    },    {
      src: "",
      width: 1000,
      isSelected: false,
      caption: ""
    },
  ]
  return (
    <div>
      <Head>
        <title>Lolo's Website</title>
      </Head>
      <main className="px-10">
        <section>
          <div className="h-screen w-[90%] mx-auto p-20">
            <Gallery images={images}/>
          </div>
        </section>
      </main>
    </div>
  )
}
