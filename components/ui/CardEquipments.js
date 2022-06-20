import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LangContext from '../../utils/store'
import { useContext } from 'react'

export default function Card({ src, title, subTitle }) {
  const { en } = useContext(LangContext)
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="card card-compact  mx-auto w-80 overflow-hidden bg-slate-700 px-4 shadow-xl md:w-96"
    >
      <figure>
        <Image src={src} alt="Shoes" width={350} height={225} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{subTitle}</p> */}
        <div className="card-actions justify-end">
          <Link href="/contact">
            <button className="btn btn-warning">
              {en ? 'Get A Quote' : 'احصل علي عرض سعر'}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
