'use client'
import { useEffect, useState } from 'react'

interface Student {
  name: string;
  age: number;
  grade: string;
  gender: string;
  parentName: string;
  parentContact: string;
  parentEmail: string;
  emergencyContact: string;
  previousSchool: string;
  bloodGroup: string;
  allergies: string;
  medicalConditions: string;
  busRequired: string;
  pickupLocation: string;
  address: string;
}

interface StudentDetailsProps {
  id: number;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ id }) => {
  const [student, setStudent] = useState<Student | null>(null)


  useEffect(() => {
    if (id !== undefined) {
      const storedStudents: Student[] = JSON.parse(localStorage.getItem('students') || '[]')
      const studentData = storedStudents.find((_, index) => index == id)
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
        {Object.entries(student).map(([key, value]) => (
          <div key={key} className='bg-gray-100 p-4 rounded-md shadow-sm'>
            <p className='text-gray-700'>
              <strong className='text-blue-600'>{`${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:`}</strong> {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentDetails
