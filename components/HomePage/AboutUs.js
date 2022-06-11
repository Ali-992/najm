import React from 'react'
import Title from '../../components/ui/Title'
import ListItem from '../ui/ListItem'
import AchievmentItem from '../ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'

export default function AboutUs() {
  return (
    <div className="px-4 py-2 mx-auto section-height max-w-7xl sm:px-6 lg:px-8">
      <Title>ABOUT US</Title>
      <div className="flex flex-col items-start justify-center md:flex-row">
        <div className="flex-1 md:mt-10">
          <p className="w-5/6 mx-4 leading-8 text-gray-300">
            Rental Solutions Limited Co. (Eijarat), started as a trading branch
            of Tamkeen Internationa Co. in 1998. specialized in the sale & lease
            (short and long term) Telecom Equipment,Power Equipment, Building
            Materials, and Machinaries.
          </p>
          <div className="mx-4 mt-8">
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Machine Equipements , and stuff" />
            <ListItem text="Machine Equipements , and stuff" />
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 mx-4 mt-8">
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
