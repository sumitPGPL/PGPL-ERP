'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SchoolForm from '../../../components/Forms/SchoolForm'
import 'tailwindcss/tailwind.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

function ERPForm() {
  const router = useRouter()
  const [mode, setMode] = useState(null) // null, 'single', 'group'
  const [schools, setSchools] = useState([])
  const [groupName, setGroupName] = useState('')
  const [editSchoolIndex, setEditSchoolIndex] = useState(null)
  const [editedSchoolName, setEditedSchoolName] = useState('')

  const SINGLE_SCHOOL_DB = 'singleSchoolData'
  const GROUP_SCHOOLS_DB = 'groupSchoolsData'

  useEffect(() => {
    if (mode === 'single') {
      const singleSchoolData =
        JSON.parse(localStorage.getItem(SINGLE_SCHOOL_DB)) || []
      setSchools(singleSchoolData)
    } else if (mode === 'group') {
      const groupSchoolsData =
        JSON.parse(localStorage.getItem(GROUP_SCHOOLS_DB)) || []
      setSchools(groupSchoolsData)
    }
  }, [mode])

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode)
    setSchools([]) // Reset schools when switching modes
    setGroupName('') // Reset group name when switching modes
  }

  const handleAddSchool = (newSchool) => {
    const updatedSchools = [...schools, newSchool]
    setSchools(updatedSchools)
    const storageKey = mode === 'single' ? SINGLE_SCHOOL_DB : GROUP_SCHOOLS_DB
    localStorage.setItem(storageKey, JSON.stringify(updatedSchools))
  }

  const handleDeleteSchool = (index) => {
    const updatedSchools = schools.filter((_, i) => i !== index)
    setSchools(updatedSchools)
    const storageKey = mode === 'single' ? SINGLE_SCHOOL_DB : GROUP_SCHOOLS_DB
    localStorage.setItem(storageKey, JSON.stringify(updatedSchools))
  }

  const handleEditSchool = (index) => {
    setEditSchoolIndex(index)
    setEditedSchoolName(schools[index].name)
  }

  const handleSaveEdit = (index) => {
    const updatedSchools = [...schools]
    updatedSchools[index].name = editedSchoolName
    setSchools(updatedSchools)
    setEditSchoolIndex(null)
    const storageKey = mode === 'single' ? SINGLE_SCHOOL_DB : GROUP_SCHOOLS_DB
    localStorage.setItem(storageKey, JSON.stringify(updatedSchools))
  }

  const handleCancelEdit = () => {
    setEditSchoolIndex(null)
    setEditedSchoolName('')
  }

  const handleSchoolClick = (id) => {
    router.push(`/school/${id}`)
  }

  return (
    <DefaultLayout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Educational ERP System</h1>


        <div className="mb-6">
          <button
            onClick={() => handleModeChange('single')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg mr-4"
          >
            Create Single School
          </button>
          <button
            onClick={() => handleModeChange('group')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Create Group of Schools
          </button>
        </div>


      {mode === 'group' && (
        <div className="mb-6">
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group of Schools Name"
            className="px-4 py-2 border rounded-lg w-full mb-4"
          />
        </div>
      )}

      {mode && (
        <>
          {/* Only show the SchoolForm if no school exists in single mode */}
          {mode === 'single' && schools.length === 0 && (
            <SchoolForm onAddSchool={handleAddSchool} />
          )}
          {mode === 'group' && <SchoolForm onAddSchool={handleAddSchool} />}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              {mode === 'single' ? 'Single School' : 'Group of Schools'}
            </h2>
            {mode === 'group' && groupName && (
              <h3 className="text-lg font-semibold mt-2">{groupName}</h3>
            )}
            <ul className="space-y-2 mt-2">
              {schools.map((school, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between"
                >
                  {editSchoolIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editedSchoolName}
                        onChange={(e) => setEditedSchoolName(e.target.value)}
                        className="px-2 py-1 border rounded-lg w-3/4"
                      />
                      <button
                        onClick={() => handleSaveEdit(index)}
                        className="ml-2 px-2 py-1 bg-green-500 text-white rounded-lg"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="ml-2 px-2 py-1 bg-gray-500 text-white rounded-lg"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className="cursor-pointer text-black font-semibold"
                        onClick={() => handleSchoolClick(school.id)}
                      >
                        {school.name}
                      </span>
                      <div>
                        <button
                          onClick={() => handleEditSchool(index)}
                          className="ml-4 px-2 py-1  rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteSchool(index)}
                          className="ml-4 px-2 py-1   rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
    </DefaultLayout>
  )
}

export default ERPForm