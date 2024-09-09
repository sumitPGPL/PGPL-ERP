'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const StudentForm = ({ onAddStudent, schoolUpto }) => {
  const [student, setStudent] = useState({
    name: '',
    grade: '',
    age: '',
    gender: '',
    address: '',
    parentName: '',
    parentContact: '',
    parentEmail: '',
    emergencyContact: '',
    previousSchool: '',
    bloodGroup: '',
    allergies: '',
    medicalConditions: '',
    busRequired: '',
    pickupLocation: '',
  })
  const [students, setStudents] = useState([])
  const [gradeOptions, setGradeOptions] = useState([])

  useEffect(() => {
    if (schoolUpto === 'prePrimary') {
      setGradeOptions(['Kindergarten', 'LKG', 'UKG'])
    } else if (schoolUpto === 'primary') {
      setGradeOptions(['1st', '2nd', '3rd', '4th', '5th'])
    } else if (schoolUpto === 'middleSchool') {
      setGradeOptions(['6th', '7th', '8th'])
    } else if (schoolUpto === 'higher') {
      setGradeOptions(['9th', '10th', '11th', '12th'])
    } else {
      setGradeOptions([])
    }
  }, [schoolUpto])

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newStudent = { ...student }
    setStudents((prevStudents) => [...prevStudents, newStudent])
    const storedStudents = JSON.parse(localStorage.getItem('students')) || []
    const updatedStudents = [...storedStudents, newStudent]
    localStorage.setItem('students', JSON.stringify(updatedStudents))
    setStudent({
      name: '',
      grade: '',
      age: '',
      gender: '',
      address: '',
      parentName: '',
      parentContact: '',
      parentEmail: '',
      emergencyContact: '',
      previousSchool: '',
      bloodGroup: '',
      allergies: '',
      medicalConditions: '',
      busRequired: '',
      pickupLocation: '',
    })
    onAddStudent(newStudent)
  }

  const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Age', name: 'age', type: 'number' },
    { label: 'Grade', name: 'grade', type: 'select', options: gradeOptions },
    { label: 'Gender', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { label: 'Parent/Guardian Name', name: 'parentName', type: 'text' },
    { label: 'Parent/Guardian Contact', name: 'parentContact', type: 'text' },
    { label: 'Parent/Guardian Email', name: 'parentEmail', type: 'email' },
    { label: 'Emergency Contact', name: 'emergencyContact', type: 'text' },
    { label: 'Previous School', name: 'previousSchool', type: 'text' },
    { label: 'Blood Group', name: 'bloodGroup', type: 'text' },
    { label: 'Allergies', name: 'allergies', type: 'text' },
    { label: 'Medical Conditions', name: 'medicalConditions', type: 'text' },
    { label: 'Bus Required', name: 'busRequired', type: 'select', options: ['Yes', 'No'] },
    { label: 'Pickup Location', name: 'pickupLocation', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
  ]

  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-full'>
      <form className='w-full mb-6' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {formFields.map((field, index) => (
            <div key={index} className='mb-4'>
              <label className='block text-gray-700'>{field.label}:</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={student[field.name]}
                  onChange={handleChange}
                  className='mt-1 p-2 border rounded w-full'
                >
                  <option value=''>Select {field.label}</option>
                  {field.options &&
                    field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={student[field.name]}
                  onChange={handleChange}
                  className='mt-1 p-2 border rounded w-full'
                />
              )}
            </div>
          ))}
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto'
        >
          Add Student
        </button>
      </form>

      <h3 className='text-lg font-semibold mb-2'>Student List</h3>
      <div className='p-4 bg-gray-100'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg'>
            <thead className='bg-gray-50'>
              <tr>
                {formFields.map((field, index) => (
                  <th
                    key={index}
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    {field.label}
                  </th>
                ))}
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {students.map((student, index) => (
                <tr key={index}>
                  {formFields.map((field, idx) => (
                    <td
                      key={idx}
                      className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'
                    >
                      {student[field.name]}
                    </td>
                  ))}
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <Link
                      href={`/student/${index}`}
                      className='px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600'
                    >
                      View Details
                    </Link>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <button
                      onClick={() => handleDeleteStudent(index)}
                      className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentForm
