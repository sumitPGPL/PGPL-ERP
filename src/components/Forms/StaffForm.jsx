import Link from "next/link";
import { useState } from "react";

const StaffForm = ({ onAddStaff }) => {
  const [staff, setStaff] = useState({
    name: "",
    designation: "",
    department: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    joinDate: "",
  });
  const [staffList, setStaffList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = { ...staff };
    setStaffList((prevStaffList) => [...prevStaffList, newStaff]);
        // Get existing students from local storage, if any
  const storedStaff = JSON.parse(localStorage.getItem('staff')) || []
  
  // Add the new student to the stored array
  const updatedStaff = [...storedStaff, newStaff]
  
  // Save the updated array back to local storage
  localStorage.setItem('staff', JSON.stringify(updatedStaff))

    setStaff({
      name: "",
      designation: "",
      department: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      email: "",
      joinDate: "",
    });

    onAddStaff(newStaff);
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Designation", name: "designation", type: "text" },
    { label: "Department", name: "department", type: "text" },
    { label: "Age", name: "age", type: "number" },

    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },

    { label: "Address", name: "address", type: "text" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Join Date", name: "join date", type: "text" },


   
  ];

  const handleDeleteStaff = (index) => {
    const updatedStaffList = staffList.filter((_, i) => i !== index);
    setStaffList(updatedStaffList);
    // Also remove from local storage if needed
    const storedSchools =
      JSON.parse(localStorage.getItem("singleSchoolData")) || [];
    const updatedSchools = storedSchools.map((school) => {
      if (school.id === id) {
        return { ...school, staff: updatedStaffList };
      }
      return school;
    });
    localStorage.setItem("singleSchoolData", JSON.stringify(updatedSchools));
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Add Staff</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="text-gray-700 block">Name:</label>
          <input
            type="text"
            name="name"
            value={staff.name}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Designation:</label>
          <input
            type="text"
            name="designation"
            value={staff.designation}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Department:</label>
          <input
            type="text"
            name="department"
            value={staff.department}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Age:</label>
          <input
            type="number"
            name="age"
            value={staff.age}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Gender:</label>
          <select
            name="gender"
            value={staff.gender}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Address:</label>
          <input
            type="text"
            name="address"
            value={staff.address}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Phone:</label>
          <input
            type="text"
            name="phone"
            value={staff.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Email:</label>
          <input
            type="email"
            name="email"
            value={staff.email}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block">Join Date:</label>
          <input
            type="date"
            name="joinDate"
            value={staff.joinDate}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Staff
        </button>
      </form>

      <h3 className="mb-2 text-lg font-semibold">Staff List</h3>
      <div className="bg-gray-100 min-h-screen w-full p-6">
        <h1 className="mb-6 text-3xl font-bold">Staff Details</h1>

        <div className=" overflow-scroll">
          <table className="divide-gray-200 min-w-full divide-y rounded-lg bg-white shadow-md">
            <thead className="bg-gray-50">
              <tr>
                {formFields.map((field, index) => (
                  <th
                    key={index}
                    className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {field.label}
                  </th>
                ))}
                <th className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-gray-200 divide-y bg-white">
              {staffList.map((student, index) => (
                <tr key={index}>
                  {formFields.map((field, idx) => (
                    <td
                      key={idx}
                      className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm"
                    >
                      {student[field.name]}
                    </td>
                  ))}
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <Link
                      href={`/staff/${index}`}
                      onClick={() => handleDeleteStudent(index)}
                      className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                    >
                      View Details
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <button
                      onClick={() => handleDeleteStudent(index)}
                      className="bg-red-500 hover:bg-red-600 rounded px-2 py-1 text-white"
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
  );
};

export default StaffForm;
