import React from 'react'

function SchoolSwitcher({ schools, onSwitch }) {
  return (
  
    <div>
      <h3 className="text-lg font-semibold">Select a School</h3>
      <ul className="space-y-2 mt-2">
        {schools.map((school, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">{school.schoolName}</h4>
            <button
              onClick={() => onSwitch(index)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default SchoolSwitcher