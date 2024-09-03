import React, { useState } from 'react'

function SchoolForm({ onAddSchool }) {
  const [schoolName, setSchoolName] = useState('')

  const handleAddSchool = () => {
    if (schoolName) {
      onAddSchool({ name: schoolName, students: [], staff: [] })
      setSchoolName('')
    }
  }

  return (
 
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">School Form</h3>
      <input
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        placeholder="School Name"
        className="px-4 py-2 border rounded-lg w-full mb-4"
      />
      <button
        onClick={handleAddSchool}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Add School
      </button>
    </div>
    
  )
}

export default SchoolForm
