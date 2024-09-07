'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import StudentForm from '../../../components/Forms/StudentForm'
import StaffForm from '../../../components/Forms/StaffForm'
import DefaultLayout from '../../../components/Layouts/DefaultLayout'

const SchoolDetails = () => {
  const { id } = useParams()
  const [school, setSchool] = useState(null)
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showStaffForm, setShowStaffForm] = useState(false)

  useEffect(() => {
    if (id) {
      const schools = JSON.parse(localStorage.getItem('singleSchoolData')) || []
      const schoolData = schools.find((school) => school.id === id)

      if (schoolData) {
        setSchool(schoolData)
      } else {
        const groupSchools =
          JSON.parse(localStorage.getItem('groupSchoolsData')) || []
        const groupSchoolData = groupSchools.find((school) => school.id === id)
        if (groupSchoolData) {
          setSchool(groupSchoolData)
        }
      }
    }
  }, [id])

  const handleAddStudent = (newStudent) => {
    const updatedSchool = { ...school }
    updatedSchool.students = [...(updatedSchool.students || []), newStudent]
    setSchool(updatedSchool)
    const storageKey = 'singleSchoolData'
    localStorage.setItem(
      storageKey,
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem(storageKey)) || []),
        updatedSchool,
      ])
    )
  }
  const getTrueKeys = (obj) => {
    return Object.entries(obj)
      .filter(([key, value]) => value) // Filter entries where value is true
      .map(([key]) => key) // Extract only the keys
  }

  const handleAddStaff = (newStaff) => {
    const updatedSchool = { ...school }
    updatedSchool.staff = [...(updatedSchool.staff || []), newStaff]
    setSchool(updatedSchool)
    const storageKey = 'singleSchoolData'
    localStorage.setItem(
      storageKey,
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem(storageKey)) || []),
        updatedSchool,
      ])
    )
  }

  if (!school) {
    return <div>Loading...</div>
  }

  return (
    <DefaultLayout  >
    <div className="flex w-full">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white  w-[18%] min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setShowStudentForm(!showStudentForm)}
                className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
              >
                {showStudentForm ? 'Hide Student Form' : 'Show Student Form'}
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowStaffForm(!showStaffForm)}
                className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
              >
                {showStaffForm ? 'Hide Staff Form' : 'Show Staff Form'}
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen w-[82%]">
        <h1 className="text-3xl font-bold mb-6">{school.name}</h1>

        {/* School Affiliation Details */}
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Affiliation Details</h2>
          <p>Affiliation Number: {school.affiliation.number}</p>
          <h3>Affiliation valid till: {school.affiliation.validTill}</h3>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <h3>Email: {school.email}</h3>
          <h3>Phone Number: {school.phoneNumber}</h3>
          <h3>Address: {school.address}</h3>
        </div>

        {/* Head of Institute Details */}
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Head of Institute Details
          </h2>
          <h3>Name: {school.headOfInstitution.name}</h3>
          <h3>Designation: {school.headOfInstitution.designation}</h3>
          <h3>Phone: {school.headOfInstitution.phone}</h3>
          <h3>Email: {school.headOfInstitution.email}</h3>
        </div>

        {/* Preregistered Codes */}
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Preregistered Code</h2>
          <h3>Staff: {school.preregisterCode.staff}</h3>
          <h3>Student: {school.preregisterCode.student}</h3>
        </div>

        {/* School Upto Details */}
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">School Upto</h2>
          <p>{getTrueKeys(school.schoolUpto)}</p>
        </div>

        {/* School Logo */}
        {/* {school.logo && (
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">School Logo</h2>
            <img
              src={school.logo}
              alt="School Logo"
              className="max-w-full h-auto"
            />
          </div>
        )} */}

        {/* Student Form */}
        {showStudentForm && (
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Add Student</h2>
            <StudentForm onAddStudent={handleAddStudent} />
          </div>
        )}

        {/* Staff Form */}
        {showStaffForm && (
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Add Staff</h2>
            <StaffForm onAddStaff={handleAddStaff} />
          </div>
        )}
      </main>

    </div>
    </DefaultLayout>
  )
}

export default SchoolDetails
