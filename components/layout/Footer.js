import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className=" bg-slate-800">
      <div className="footer mx-auto max-w-7xl p-10 px-4 py-2 text-white md:px-6 md:py-8 lg:px-8">
        <div>
          <Image src="/images/logo.png" width={160} height={80}></Image>
          <p className="mt-2 capitalize">
            <strong className="text-heading">Najm Al Mashriq</strong>{' '}
            Contracting Company.
          </p>
          <p className="capitalize"> Rental Of light and heavy equipment</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Heavy Equipements Rental</a>
          <a className="link link-hover">Rental of cranes</a>
          <a className="link link-hover">
            construction of residential building
          </a>
          <a className="link link-hover"> building renovations</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
      </div>
      <div className="bg-slate-800 text-center md:py-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <strong className="text-heading">Najm Al Mashriq</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
