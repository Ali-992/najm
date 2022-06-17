import React from 'react'
import Image from 'next/image'

export default function Card({ src, title, subTitle, subTitle2, buttonText }) {
  return (
    <div class="card bg-base-100 shadow-xl lg:card-side">
      <figure>
        <Image src={src} width={600} height={400} />
      </figure>
      <div class="card-body">
        <h2 class="card-title max-w-fit">{title}</h2>
        <p className="mt-1 max-w-fit text-gray-300">
          {subTitle} <br /> {subTitle2}
        </p>
        <div class="card-actions mt-4 justify-end">
          <button class="btn bg-dark1 font-bold text-heading">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
