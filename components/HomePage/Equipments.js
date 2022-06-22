import React, { useContext } from 'react'
import Title from '../ui/Title'
import LangContext from '../../utils/store'
import HomePageEquipmentsCard from '../ui/HomePageEquipmentsCard'

export default function Equipments() {
  const { en } = useContext(LangContext)
  return (
    <div className="bg-slate-800 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className={`mx-auto max-w-7xl  py-2  md:py-8 ${en ? '' : 'rtl'}`}>
        <Title>{en ? 'Equipment' : 'معدات'}</Title>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <HomePageEquipmentsCard
            src="/images/eq-section/crane2.jpeg"
            title={en ? 'Crane' : 'رافعات'}
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/jcb-backhoe.jpg"
            title={en ? 'JCB Backhoe' : 'حفار JCB'}
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/telehandler.jpeg"
            title={en ? 'Telehandler' : 'ماكينة المناولة'}
          />
          <HomePageEquipmentsCard
            src="/images/equipments/forklift-2.jpeg"
            title={en ? 'ForkLift' : 'رافعة شوكية'}
          />
          <HomePageEquipmentsCard
            src="/images/equipments/bobcat.jpg"
            title={en ? 'Bobcat' : 'بوب كات'}
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/more.jpeg"
            title={en ? 'Variety of Equipments' : 'مجموعة كبيرة من المعدات'}
          />
        </div>
      </div>
    </div>
  )
}
