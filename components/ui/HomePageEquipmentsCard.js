import Link from 'next/link'
import React, { useContext } from 'react'
import LangContext from '../../utils/store'

export default function HomePageEquipmentsCard({ title, src }) {
  const { en } = useContext(LangContext)
  return (
    <div className="card glass max-h-[420px] max-w-[80]">
      <figure className="h-[70%] max-h-[70%]">
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link href="/equipments">
            <button className="btn border-0 bg-heading text-white hover:bg-red-500 hover:text-black">
              {en ? 'view more' : 'عرض المزيد'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
