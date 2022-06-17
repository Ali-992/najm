import React from 'react'
import Page from '../../components/layout/Page'
import Title from '../../components/ui/Title'
import ListItem from '../../components/ui/ListItem'
import AchievmentItem from '../../components/ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'

export default function About() {
  return (
    <Page>
      <main className="mt-16  text-white ">
        <div className="section-height   px-4 py-2 sm:px-6 md:py-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Title>ABOUT US</Title>
            <div className="flex flex-col items-start justify-center ">
              <div>
                <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                  Najm Al Mashriq provides rental of heavy and light equipements{' '}
                </h3>
                <p className="mx-4  mb-6 w-5/6 leading-6 text-gray-300">
                  Najm Al Mashriq is a construction company that heavily focused
                  in the rental of heavy and light equipment for construction
                  purposes. We have a team of highly skilled and experienced
                  workers who are dedicated to providing the best service to our
                  clients.
                </p>
                <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                  Our Goal
                </h3>
                <p className="mx-4 mb-6  w-5/6 leading-6 text-gray-300">
                  Our continual aim is to provide the best products and services
                  to our customers as a leading heavy equipment rental company,
                  while staying cost-effective. We continue to use the most
                  efficient, current technology while adhering to the strictest
                  safety initiatives.
                </p>
                <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                  COMMITTED TO PROVIDING THE BEST
                </h3>
                <p className="mx-4  w-5/6 leading-6 text-gray-300">
                  With years of industry experience as a specialist heavy
                  equipment rental company along with a team of highly skilled
                  and qualified personnel, you can rely on us to provide you
                  with an exceptional array of tools, knowledge and advice to
                  get the job done - no matter the scale of the project. We also
                  understand the individual needs and requirements of our
                  clients and even offer the most competitive prices for all
                  equipment and machinery throughout the country. safety
                  initiatives.
                </p>
              </div>
              <div className=" mx-4 mt-8 grid  items-center gap-y-4 md:grid-cols-2 md:gap-x-20">
                <ListItem text="Construction and building equipment rental with operator" />
                <ListItem text="Rental of cranes for construction purposes" />
                <ListItem text="General construction of residential building" />
                <ListItem text="Residential and non-residential building renovations" />
                <ListItem text="sports public constrution including stadiums" />
              </div>
            </div>
            <div className="mx-4 mt-8  grid flex-1 flex-col justify-center gap-4 md:grid-cols-2">
              <AchievmentItem
                icon={<BsFillBookmarkCheckFill fill="#ffd188" size={36} />}
                number="15 +"
                text="Years in Business"
              />
              <AchievmentItem
                icon={<FaMedal fill="#ffd188" size={36} />}
                number="2000 +"
                text="Project Finished"
              />
              <AchievmentItem
                icon={<FaSmileBeam fill="#ffd188" size={36} />}
                number="240 +"
                text="Satisfied Client"
              />
              <AchievmentItem
                icon={<BsHeadset fill="#ffd188" size={36} />}
                number="130 +"
                text="Pro Consultants"
              />
            </div>
          </div>
        </div>
      </main>
    </Page>
  )
}
