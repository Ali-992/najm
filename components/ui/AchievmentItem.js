import React from 'react'

function AchievmentItem({ icon, number, text }) {
  return (
    <div className="flex flex-row items-center p-4 mb-4 border-b-2 border-gray-500">
      <div>{icon}</div>
      <div className="flex flex-col justify-center ml-4 align-baseline">
        <div className="text-2xl text-heading">{number}</div>
        <div className="text-lg text-white"> {text} </div>
      </div>
    </div>
  )
}

export default AchievmentItem
