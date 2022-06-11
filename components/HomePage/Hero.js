import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

function Hero() {
  return (
    <div className="section-height mt-16 overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className=" relative ">
          <img loading="lazy" src="/images/slide-2.jpg" alt="" />
          <div className="absolute top-[20%] left-[15%] ">
            <h2 className="mb-4 text-left font-bold text-white sm:text-xl md:mb-12 md:text-2xl lg:text-4xl">
              Get Your <br />{' '}
              <span className="-mt-2 block">Heavy Equipements Now</span>
            </h2>
            <Link href="/">
              <a className=" mr-24 rounded-md bg-[#b58f1b] py-1.5 px-2 text-xs font-bold text-white sm:mr-96 sm:text-sm md:mb-12 md:py-2 md:px-3 md:text-xl lg:py-3 lg:px-4 lg:text-2xl">
                GET A QUOTE
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="relative ">
          <img loading="lazy" src="/images/slide-1.jpg" alt="" />
          <h2 className="absolute text-white left-40 top-1/3">
            Get Your <br /> Heavy Equipements Now
          </h2>
        </div> */}
      </Carousel>
    </div>
  )
}

export default Hero
