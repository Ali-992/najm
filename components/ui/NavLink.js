import React from 'react'
import Link from 'next/link'

export default function NavLink({ navName, link }) {
  return (
    <Link href={link}>
      <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
        {navName}
      </a>
    </Link>
  )
}
