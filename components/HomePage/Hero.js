import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import SliderImg from '../ui/SliderImg'

function Hero() {
  return (
    <div className="mt-16">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <SliderImg
          src="/images/slide-1.jpg"
          heading1="Get Your"
          heading2="Heavy Equipements Now"
          cta="GET A QUOTE"
        />
        <SliderImg
          src="/images/slide-2.jpg"
          heading1="Get Your"
          heading2="Heavy Equipements Now"
          cta="GET A QUOTE"
        />
      </Carousel>
    </div>
  )
}

export default Hero
