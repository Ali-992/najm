import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Najm AlMashriq` : 'Najm AlMashriq'}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="bg-dark1 ">{children}</main>
      <Footer />
    </>
  )
}
