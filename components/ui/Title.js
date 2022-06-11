import React from 'react'

export default function Title({ children }) {
  return (
    <h2 className="mb-8 text-2xl font-bold tracking-widest text-cta">
      {children}
    </h2>
  )
}
