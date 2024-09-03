'use client'
import { useEffect, useState } from 'react'

const StudentDetails = ({ id }) => {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    if (id !== undefined) {
      const storedStudents = JSON.parse(localStorage.getItem('students')) || []
      const studentData = storedStudents.find((_, index) => index == id)
      setStudent(studentData)
    }
  }, [id])

  if (!student) return <div>Loading...</div>

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg border border-gray-200  w-11/12 mx-auto'>
      <h1 className='text-4xl font-extrabold text-blue-600 mb-6 text-center'>
        {student.name}&apos;s Details
      </h1>
      <div className=' grid grid-cols-2 gap-4 space-y-4'>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Name:</strong> {student.name}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Age:</strong> {student.age}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Grade:</strong> {student.grade}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Gender:</strong> {student.gender}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Parent/Guardian Name:</strong>{' '}
            {student.parentName}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Parent/Guardian Contact:</strong>{' '}
            {student.parentContact}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Parent/Guardian Email:</strong>{' '}
            {student.parentEmail}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Emergency Contact:</strong>{' '}
            {student.emergencyContact}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Previous School:</strong>{' '}
            {student.previousSchool}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Blood Group:</strong>{' '}
            {student.bloodGroup}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Allergies:</strong>{' '}
            {student.allergies}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Medical Conditions:</strong>{' '}
            {student.medicalConditions}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Bus Required:</strong>{' '}
            {student.busRequired}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Pickup Location:</strong>{' '}
            {student.pickupLocation}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Address:</strong>{' '}
            {student.address}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails

