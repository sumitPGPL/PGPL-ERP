'use client'
import { useEffect, useState } from 'react'

interface Student {
  name: string;
  designation: string;
  department: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  email: string;
  joinDate: string;
}

interface StudentDetailsProps {
  id: number;
}


const StaffDetails: React.FC<StudentDetailsProps> = ({ id }) => {
  const [student, setStudent] = useState<Student | null>(null)
  console.log('scdssddsfsd');
  useEffect(() => {
    if (id) {
      const storedStudents: Student[] = JSON.parse(localStorage.getItem('staff') || '[]')
      const studentData = storedStudents.find((_, index) => index == id)
      console.log(studentData)
      setStudent(studentData || null)
    }
  }, [id])

  if (!student) return <div>Loading...</div>

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg border border-gray-200 w-11/12 mx-auto'>
      <h1 className='text-4xl font-extrabold text-blue-600 mb-6 text-center'>
        {student.name}&apos;s Details
      </h1>

      <div className='grid grid-cols-2 gap-4 space-y-4'>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Name:</strong> {student.name}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Designation:</strong> {student.designation}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Department:</strong> {student.department}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Age:</strong> {student.age}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Gender:</strong> {student.gender}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Address:</strong> {student.address}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Phone:</strong> {student.phone}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Email:</strong> {student.email}
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
          <p className='text-gray-700'>
            <strong className='text-blue-600'>Join Date:</strong> {student.joinDate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StaffDetails
