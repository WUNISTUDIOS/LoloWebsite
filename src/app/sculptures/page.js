"use client";
import React, { useState } from "react";
import Image from "next/image"

export default function Documentation() {
  const panels = [
    {
      src: "/images/compressedRenamedImages/devilmanhead.jpg",
    },
    {
      src: "/images/compressedRenamedImages/fourteam.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/fullsnoopback.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/derrpzpatterns.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/devlmanclose.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/earlytoronto.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/eno.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/layingdevilman.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/lildevilman.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/loloshirt.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/longfeet.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/nofacepatterns.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/lostbusiness.jpg",
      caption: "",
    },
    {
      src: "/images/compressedRenamedImages/snoopfront.jpg",
      caption: "",
    },
  ]
  const [expandedIndex, setExpandedIndex] = useState(0)
  const handleClick = (index) => {
    setExpandedIndex(index)
  }
  return (
    <main className="">
      <div className=" flex items-center justify-center gap-4 flex-wrap">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
            h-[50vh] md:h-[80vh] rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out
            ${expandedIndex === index ? "w-[40%] md:w-[15%]" : "w-[20%] md:w-[10%] overflow-auto block"}
          `}
          >
            <Image
              src={panel.src}
              width={500}
              height={500}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover object-top aspect-w-16 aspect-h-9"
            />
          </div>
        ))}

      </div>
    </main>
  )
}
