import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './Slider'

const ClientLogos: any = () => {
  return (
    <>
      <SliderContainer
        className="enabled"
        contentWidth={1290}
        initialOffsetX={0}
      >
        <SliderItem width={250}>
          <Image
            src="/images/clients/air-royal.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/civil-defense.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/dakar.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/diriyah-season.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/saudi-cup.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/expertise-5.jpg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/expertise-6.jpg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer
        className="enabled"
        contentWidth={1290}
        initialOffsetX={125}
      >
        <SliderItem width={250}>
          <Image
            src="/images/clients/mdl-beast.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/ryiadh-season.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/water-company.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/saudi-electricity.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/stc.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/tamkeen.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/tantora-festival.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  )
}

export default ClientLogos
