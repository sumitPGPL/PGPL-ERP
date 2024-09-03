import React from 'react'

function StudentSwitcher({ students, onSwitch }) {
  return (
  
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Switch Between Students</h3>
      <div className="flex space-x-2">
        {students.map((student, index) => (
          <button
            key={index}
            onClick={() => onSwitch(index)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
          >
            Student {index + 1}
          </button>
        ))}
      </div>
    </div>
    
  )
}

export default StudentSwitcher