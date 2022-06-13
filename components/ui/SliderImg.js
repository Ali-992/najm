import React from 'react'
import Link from 'next/link'

export default function SliderImg({ src, heading1, heading2, cta }) {
  return (
    <div className=" relative ">
      <img loading="lazy" src={src} alt="" />
      <div className="absolute top-[20%] left-[15%] ">
        <h2 className="mb-4 text-left font-bold text-white sm:text-xl md:mb-12 md:text-2xl lg:text-4xl">
          {heading1} <br /> <span className="-mt-2 block">{heading2}</span>
        </h2>
        <Link href="/">
          <a className=" mr-24 rounded-md bg-[#b58f1b] py-1.5 px-2 text-xs font-bold text-white sm:mr-96 sm:text-sm md:mb-12 md:py-2 md:px-3 md:text-xl lg:py-3 lg:px-4 lg:text-2xl">
            {cta}
          </a>
        </Link>
      </div>
    </div>
  )
}
