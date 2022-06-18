import React, { useState } from 'react'
import Page from '../../components/layout/Page'
import CardEquipments from '../../components/ui/CardEquipments'
import Filter from '../../components/ui/Filter'
import Title from '../../components/ui/Title'
import { equipmentsData } from '../../data'
import { motion } from 'framer-motion'

export default function Projects() {
  const [equipmentsList, setEquipmentsList] = useState(equipmentsData)
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setactiveGenre] = useState('all')
  return (
    <Page title="Equipments">
      <main className="mt-16  max-w-[95vw] text-white">
        <div className="mx-auto max-w-7xl">
          <Title> Equipments </Title>
          <p className="-mt-6 text-gray-300">
            Huge Variety of Heavy and light Equipments
          </p>
          <Filter
            equipmentsList={equipmentsList}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setactiveGenre={setactiveGenre}
          />
          <motion.div
            layout
            className=" grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((equipment) => (
              <CardEquipments key={equipment.id} {...equipment} />
            ))}
          </motion.div>
        </div>
      </main>
    </Page>
  )
}
