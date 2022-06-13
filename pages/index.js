import React from 'react'
import Page from '../components/layout/Page'
import Hero from '../components/HomePage/Hero'
import AboutUs from '../components/HomePage/AboutUs'
import Partners from '../components/HomePage/Partners'
import Services from '../components/HomePage/Services'

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <AboutUs />
      <Partners />
      <Services />
    </Page>
  )
}
