import Image from 'next/image'
import React from 'react'
import Page from '../../components/layout/Page'
import Card from '../../components/ui/Card'
import Title from '../../components/ui/Title'

export default function Services() {
  // fix
  return (
    <Page>
      <main className="mt-16  text-white ">
        <div className="section-height   px-4 py-2 sm:px-6 md:py-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Title>Our Services</Title>
            <div className="grid gap-y-6">
              <Card
                src="/images/equipments2.jpeg"
                title="Construction and building equipment rental with operator"
                subTitle="we offer a wide range of construction and building equipment rental services"
                subTitle2="including:
                Bobcat, flatbed, lowbed, Crane, telehanlder, Pickup trucks, highup truck, jcb backhoe, forklift, towerlight, manlift shilbker, scissor lift"
                buttonText="show more"
                href="/equipments"
              />
              <Card
                src="/images/cranes.jpeg"
                title="Rental of cranes for construction purposes"
                subTitle="We are extremely committed to provide our customers with the suitable cranes for any project, in order to deliver an optimum performance and a superior customer experience"
                buttonText="show more"
                href="/equipments"
              />
              <Card
                src="/images/building.jpg"
                title="General construction of residential building"
                subTitle="Najm Al-mashriq has been building quality homes in Saudi Arabia for close to 6 years - benefitting both owners and investors."
                buttonText="show more"
              />
              <Card
                src="/images/renovations.jpg"
                title="Residential and non-residential building renovations"
                subTitle="We also provide fair renovation services for both residential and non-residential building"
                buttonText="show more"
              />
            </div>
          </div>
        </div>
      </main>
    </Page>
  )
}
