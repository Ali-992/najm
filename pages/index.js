import React from 'react'
import Page from '../components/layout/Page'
import Hero from '../components/HomePage/Hero'
import AboutUs from '../components/HomePage/AboutUs'

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <AboutUs />
    </Page>
  )
}
