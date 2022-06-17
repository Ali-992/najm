import React from 'react'
import Title from '../../components/ui/Title'
import ListItem from '../ui/ListItem'
import AchievmentItem from '../ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'

export default function AboutUs() {
  return (
    <div className="section-height px-4 py-2 sm:px-6 md:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Title>ABOUT US</Title>
        <div className="flex flex-col items-start justify-center md:flex-row">
          <div className="flex-1 md:mt-10">
            <p className="mx-4 w-5/6 leading-8 text-gray-300">
              <span className="text-lg font-bold text-heading">
                Najm Al Mashriq
              </span>{' '}
              is a construction company that heavily focused in the rental of
              heavy and light equipment for construction purposes. We have a
              team of highly skilled and experienced workers who are dedicated
              to providing the best service to our clients.
            </p>
            <div className="mx-4 mt-8">
              <ListItem text="Construction and building equipment rental with operator" />
              <ListItem text="Rental of cranes for construction purposes" />
              <ListItem text="General construction of residential building" />
              <ListItem text="Residential and non-residential building renovations" />
              <ListItem text="sports public constrution including stadiums" />
            </div>
          </div>
          <div className="mx-4 mt-8 flex flex-1 flex-col justify-center">
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
    </div>
  )
}
