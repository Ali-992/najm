import React from 'react'
import Link from 'next/link'

export default function NavLink({ navName, link }) {
  return (
    <Link href={link}>
      <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
        {navName}
      </a>
    </Link>
  )
}
