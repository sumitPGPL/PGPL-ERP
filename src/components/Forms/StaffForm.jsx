import { useState } from 'react'

const StaffForm = ({ onAddStaff }) => {
  const [staff, setStaff] = useState({
    name: '',
    designation: '',
    department: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    joinDate: '',
  })
  const [staffList, setStaffList] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setStaff((prevStaff) => ({ ...prevStaff, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newStaff = { ...staff }
    setStaffList((prevStaffList) => [...prevStaffList, newStaff])
    setStaff({
      name: '',
      designation: '',
      department: '',
      age: '',
      gender: '',
      address: '',
      phone: '',
      email: '',
      joinDate: '',
    })
    onAddStaff(newStaff)
  }

  const handleDeleteStaff = (index) => {
    const updatedStaffList = staffList.filter((_, i) => i !== index)
    setStaffList(updatedStaffList)
    // Also remove from local storage if needed
    const storedSchools = JSON.parse(localStorage.getItem('singleSchoolData')) || []
    const updatedSchools = storedSchools.map((school) => {
      if (school.id === id) {
        return { ...school, staff: updatedStaffList }
      }
      return school
    })
    localStorage.setItem('singleSchoolData', JSON.stringify(updatedSchools))
  }

  return (
  
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Staff</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={staff.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Designation:</label>
          <input
            type="text"
            name="designation"
            value={staff.designation}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Department:</label>
          <input
            type="text"
            name="department"
            value={staff.department}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={staff.age}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select
            name="gender"
            value={staff.gender}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={staff.address}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
            type="text"
            name="phone"
            value={staff.phone}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={staff.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Join Date:</label>
          <input
            type="date"
            name="joinDate"
            value={staff.joinDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Staff
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Staff List</h3>
      <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-bold mb-6">Student Details</h1>

  {/* Table Layout */}
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {staffList.map((student, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => handleDeleteStudent(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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

export default StaffForm
