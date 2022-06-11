import React from 'react'

export default function Title({ children }) {
  return (
    <h2 className="mb-8 text-2xl font-bold uppercase tracking-widest text-cta md:text-3xl">
      {children}
    </h2>
  )
}
