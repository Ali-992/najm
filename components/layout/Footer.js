import React from 'react'

export default function Footer() {
  return (
    <footer className="p-4 text-center text-white bg-gray-900">
      <p className="text-sm">
        © {new Date().getFullYear()} Najm AlMashriq. All rights reserved.
      </p>
    </footer>
  )
}
