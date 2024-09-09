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
    const storedStaff = JSON.parse(localStorage.getItem('staff')) || [];
    const updatedStaff = [...storedStaff, newStaff];
    localStorage.setItem('staff', JSON.stringify(updatedStaff));

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
    { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
    { label: "Address", name: "address", type: "text" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Join Date", name: "joinDate", type: "date" },
  ];

  const handleDeleteStaff = (index) => {
    const updatedStaffList = staffList.filter((_, i) => i !== index);
    setStaffList(updatedStaffList);
    const storedSchools = JSON.parse(localStorage.getItem("singleSchoolData")) || [];
    const updatedSchools = storedSchools.map((school) => {
      if (school.id === id) {
        return { ...school, staff: updatedStaffList };
      }
      return school;
    });
    localStorage.setItem("singleSchoolData", JSON.stringify(updatedSchools));
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md max-w-7xl mx-auto">
      <h2 className="mb-4 text-xl font-semibold">Add Staff</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {formFields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="text-gray-700 block">{field.label}:</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={staff[field.name]}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-2"
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={staff[field.name]}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-2"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 md:col-span-2"
        >
          Add Staff
        </button>
      </form>

      <h3 className="mb-2 text-lg font-semibold mt-8">Staff List</h3>
      <div className="bg-gray-100 w-full p-6 overflow-x-auto">
        <table className="divide-gray-200 min-w-full divide-y rounded-lg bg-white shadow-md">
          <thead className="bg-gray-50">
            <tr>
              {formFields.map((field, index) => (
                <th key={index} className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  {field.label}
                </th>
              ))}
              <th className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-gray-200 divide-y bg-white">
            {staffList.map((staffMember, index) => (
              <tr key={index}>
                {formFields.map((field, idx) => (
                  <td key={idx} className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm">
                    {staffMember[field.name]}
                  </td>
                ))}
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <Link
                    href={`/staff/${index}`}
                    className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                  >
                    View Details
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => handleDeleteStaff(index)}
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
  );
};

export default StaffForm;
