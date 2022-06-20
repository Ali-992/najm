import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function ListItem({ text }) {
  return (
    <div className="mt-4 flex flex-row items-center gap-4">
      <div>
        <BsFillArrowRightCircleFill fill="#ffd188" size={24} />
      </div>
      <p className="text-white">{text}</p>
    </div>
  )
}
