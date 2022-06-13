import React from 'react'
import Title from '../../components/ui/Title'
import ListItem from '../ui/ListItem'
import AchievmentItem from '../ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'

export default function AboutUs() {
  return (
    <div className="section-height mx-auto max-w-7xl px-4 py-2 sm:px-6 md:py-8 lg:px-8">
      <Title>ABOUT US</Title>
      <div className="flex flex-col items-start justify-center md:flex-row">
        <div className="flex-1 md:mt-10">
          <p className="mx-4 w-5/6 leading-8 text-gray-300">
            Rental Solutions Limited Co. (Eijarat), started as a trading branch
            of Tamkeen Internationa Co. in 1998. specialized in the sale & lease
            (short and long term) Telecom Equipment,Power Equipment, Building
            Materials, and Machinaries.
          </p>
          <div className="mx-4 mt-8">
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Logistic Services" />
            <ListItem text="Event Civil Works" />
            <ListItem text="Manpower Supply" />
            <ListItem text="Material Supply" />
            <ListItem text="Steel Manufacturing" />
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
  )
}
