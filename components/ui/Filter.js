import React, { useEffect } from 'react'

export default function Filter({
  equipmentsList,
  setFiltered,
  activeGenre,
  setactiveGenre,
}) {
  useEffect(() => {
    if (activeGenre === 'all') {
      setFiltered(equipmentsList)
      return
    }
    const filtered = equipmentsList.filter(
      (equipment) => equipment.genre === activeGenre
    )
    setFiltered(filtered)
  }, [activeGenre])
  return (
    <div className="mx-4 mt-4 flex flex-wrap items-center  gap-2 py-4  md:mt-8 lg:mt-12">
      <button
        className={`btn-filter ${activeGenre === 'all' ? 'active' : ''}`}
        onClick={() => setactiveGenre('all')}
      >
        show all
      </button>
      <button
        className={`btn-filter ${activeGenre === 'cranes' ? 'active' : ''}`}
        onClick={() => setactiveGenre('cranes')}
      >
        Cranes
      </button>
      <button
        className={`btn-filter ${activeGenre === 'forklifts' ? 'active' : ''}`}
        onClick={() => setactiveGenre('forklifts')}
      >
        Forklifts
      </button>
      <button
        className={`btn-filter ${activeGenre === 'manlifts' ? 'active' : ''}`}
        onClick={() => setactiveGenre('manlifts')}
      >
        manlifts
      </button>
      <button
        className={`btn-filter ${
          activeGenre === 'jsb-backhoes' ? 'active' : ''
        }`}
        onClick={() => setactiveGenre('jsb-backhoes')}
      >
        JCB Backhoe
      </button>
      <button
        className={`btn-filter ${
          activeGenre === 'telehanlders' ? 'active' : ''
        }`}
        onClick={() => setactiveGenre('telehanlders')}
      >
        Telehanlder
      </button>
      <button
        className={`btn-filter ${
          activeGenre === 'towerLights' ? 'active' : ''
        }`}
        onClick={() => setactiveGenre('towerLights')}
      >
        Tower Light
      </button>
    </div>
  )
}
