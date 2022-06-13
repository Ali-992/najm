import React from 'react'
import Title from '../ui/Title'

function Services() {
  return (
    <div className=" bg-dark3 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className="section-height  mx-auto max-w-7xl ">
        <Title>Our Services</Title>
        <div className="grid h-[80vh] grid-cols-2  gap-2 lg:grid-cols-6 lg:gap-3">
          <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
            <h3 className="text-center font-bold text-white">
              Equiements Rental
            </h3>
          </div>
          <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
            <h3 className="text-center font-bold text-white">
              Equiements Rental
            </h3>
          </div>
          <div className="imageSpan  300ms order-1 col-span-2 flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70 md:order-none">
            <h3 className="text-center font-bold text-white">
              Equiements Rental
            </h3>
          </div>
          <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
            <h3 className="text-center font-bold text-white">
              Equiements Rental
            </h3>
          </div>
          <div className="imageSpan  300ms flex h-96 items-center justify-center bg-cover bg-fixed transition-all hover:opacity-70">
            <h3 className="text-center font-bold text-white">
              Equiements Rental
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
