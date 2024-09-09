'use client'
import { useState,useEffect } from 'react'
import Link from 'next/link'

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
    // Update the grade options based on the schoolUpto prop
    if (schoolUpto === 'prePrimary') {
      setGradeOptions(['Kindergarten', 'LKG', 'UKG'])
    } else if (schoolUpto === 'primary') {
      setGradeOptions(['1st', '2nd', '3rd', '4th', '5th'])
    } else if (schoolUpto === 'middleSchool') {
      setGradeOptions(['6th', '7th', '8th'])
    } else if (schoolUpto === 'higher') {
      setGradeOptions(['9th', '10th', '11th', '12th'])
    } else {
      setGradeOptions([]) // No options if schoolUpto isn't defined
    }
  }, [schoolUpto])

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }))
  }

  console.log(students,'names are avialable')
  const handleSubmit = (e) => {
    e.preventDefault()
    const newStudent = { ...student }
    setStudents((prevStudents) => [...prevStudents, newStudent])
    // Get existing students from local storage, if any
  const storedStudents = JSON.parse(localStorage.getItem('students')) || []
  
  // Add the new student to the stored array
  const updatedStudents = [...storedStudents, newStudent]
  
  // Save the updated array back to local storage
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

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index)
    setStudents(updatedStudents)
    const storedSchools =
      JSON.parse(localStorage.getItem('singleSchoolData')) || []
    const updatedSchools = storedSchools.map((school) => {
      if (school.id === id) {
        return { ...school, students: updatedStudents }
      }
      return school
    })
    localStorage.setItem('singleSchoolData', JSON.stringify(updatedSchools))
  }

  const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Age', name: 'age', type: 'number' },
    { label: 'Grade', name: 'grade', type: 'select', options: gradeOptions },
    {
      label: 'Gender',
      name: 'gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
    },
    { label: 'Parent/Guardian Name', name: 'parentName', type: 'text' },
    { label: 'Parent/Guardian Contact', name: 'parentContact', type: 'text' },
    { label: 'Parent/Guardian Email', name: 'parentEmail', type: 'email' },
    { label: 'Emergency Contact', name: 'emergencyContact', type: 'text' },
    { label: 'Previous School', name: 'previousSchool', type: 'text' },
    { label: 'Blood Group', name: 'bloodGroup', type: 'text' },
    { label: 'Allergies', name: 'allergies', type: 'text' },
    { label: 'Medical Conditions', name: 'medicalConditions', type: 'text' },
    {
      label: 'Bus Required',
      name: 'busRequired',
      type: 'select',
      options: ['Yes', 'No'],
    },
    { label: 'Pickup Location', name: 'pickupLocation', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
  ]

  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-full'>
      <form className=' w-full mb-6 ' onSubmit={handleSubmit}>
        <div className=' grid grid-cols-2 gap-4'>
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
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Add Student
        </button>

      </form>
      {/* <p>That can be available</p> */}

      <h3 className='text-lg font-semibold mb-2'>Student List</h3>
      <div className='p-6 bg-gray-100 min-h-screen w-full'>
        <h1 className='text-3xl font-bold mb-6'>Student Details</h1>

        <div className=' overflow-scroll'>
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
                      onClick={() => handleDeleteStudent(index)}
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
