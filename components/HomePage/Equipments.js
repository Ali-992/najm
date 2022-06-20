import React from 'react'
import Title from '../ui/Title'

export default function Equipments() {
  return (
    <div className="bg-slate-800 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className="mx-auto max-w-7xl  py-2  md:py-8 ">
        <Title>Our Equipments</Title>
        <div className="grid-col-1 md:grid-col-2 lg:grid-col-3 grid"></div>
      </div>
    </div>
  )
}
