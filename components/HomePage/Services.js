import Link from 'next/link'
import React from 'react'
import Title from '../ui/Title'

function Services() {
  return (
    <div className=" bg-base-100 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className="section-height  mx-auto max-w-7xl ">
        <Title>Our Services</Title>
        <Link href="/services">
          <div className="grid h-[80vh] cursor-pointer  grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-3">
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                General construction of residential building
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                Residential and non-residential building renovations
              </h3>
            </div>
            <div className="imageSpan  300ms order-1 col-span-2 flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70 md:order-none">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                Construction and building equipment rental with operator
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                Rental of cranes for construction purposes
              </h3>
            </div>
            <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
              <h3 className="text-center text-lg font-bold text-white md:text-2xl">
                sports public constrution including stadiums
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Services
