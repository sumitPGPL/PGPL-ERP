import React from 'react'

type Props = {
    admissionDetails: any;
    setAdmissionDetails: any;
    setActivePage: any;
    activePage: number;
}

const AdmissionDetailsForm = ({
    admissionDetails,
    setAdmissionDetails,
    setActivePage,
    activePage,
  }: Props) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      ) => {
        const { name, value } = e.target;
        setAdmissionDetails({ ...admissionDetails, [name]: value });
      };
      const handleSubmit = () => {
        setActivePage(activePage + 1);
      };
  return (
    <div>
  <h1 className="text-2xl font-bold my-5">Admission Details</h1>
  <div className="grid grid-cols-4 gap-10">

    {/* Admission Type */}
    <div className="flex flex-col gap-2">
      <label htmlFor="admissionType" className="font-bold text-graydark">
        Admission Type
      </label>
      <select
        name="admissionType"
        value={admissionDetails.admissionType}
        onChange={handleChange}
        id="admissionType"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="regular">Regular</option>
        <option value="non-regular">Non-Regular</option>
      </select>
    </div>

    {/* Admission Scheme */}
    <div className="flex flex-col gap-2">
      <label htmlFor="admissionScheme" className="font-bold text-graydark">
        Admission Scheme
      </label>
      <select
        name="admissionScheme"
        value={admissionDetails.admissionScheme}
        onChange={handleChange}
        id="admissionScheme"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="Non-RTE">Non-RTE</option>
        <option value="RTE">RTE</option>
      </select>
    </div>

    {/* Student Type */}
    <div className="flex flex-col gap-2">
      <label htmlFor="studentType" className="font-bold text-graydark">
        Student Type
      </label>
      <select
        name="studentType"
        value={admissionDetails.studentType}
        onChange={handleChange}
        id="studentType"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="new">New</option>
        <option value="old">Old</option>
      </select>
    </div>

    {/* Board */}
    <div className="flex flex-col gap-2">
      <label htmlFor="board" className="font-bold text-graydark">
        Board
      </label>
      <select
        name="board"
        value={admissionDetails.board}
        onChange={handleChange}
        id="board"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="">Select Board</option>
        <option value="CBSE">CBSE</option>
        <option value="State">State</option>
      </select>
    </div>

    {/* Date of Admission */}
    <div className="flex flex-col gap-2">
      <label htmlFor="dateOfAdmission" className="font-bold text-graydark">
        Date of Admission
      </label>
      <input
        type="date"
        name="dateOfAdmission"
        value={admissionDetails.dateOfAdmission}
        onChange={handleChange}
        id="dateOfAdmission"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Admission Number */}
    <div className="flex flex-col gap-2">
      <label htmlFor="admissionNumber" className="font-bold text-graydark">
        Admission Number
      </label>
      <input
        type="text"
        name="admissionNumber"
        value={admissionDetails.admissionNumber}
        onChange={handleChange}
        id="admissionNumber"
        placeholder="Admission Number"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Scholar Number */}
    <div className="flex flex-col gap-2">
      <label htmlFor="scholarNumber" className="font-bold text-graydark">
        Scholar Number
      </label>
      <input
        type="text"
        name="scholarNumber"
        value={admissionDetails.scholarNumber}
        onChange={handleChange}
        id="scholarNumber"
        placeholder="Scholar Number"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Previous Class */}
    <div className="flex flex-col gap-2">
      <label htmlFor="previousClass" className="font-bold text-graydark">
        Previous Class
      </label>
      <select
        name="previousClass"
        value={admissionDetails.previousClass}
        onChange={handleChange}
        id="previousClass"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="">Select Previous Class</option>
        {/* Add options as per your class levels */}
      </select>
    </div>

    {/* Previous School Name */}
    <div className="flex flex-col gap-2">
      <label htmlFor="previousSchoolName" className="font-bold text-graydark">
        Previous School Name
      </label>
      <input
        type="text"
        name="previousSchoolName"
        value={admissionDetails.previousSchoolName}
        onChange={handleChange}
        id="previousSchoolName"
        placeholder="Previous School Name"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Class */}
    <div className="flex flex-col gap-2">
      <label htmlFor="class" className="font-bold text-graydark">
        Class
      </label>
      <select
        name="class"
        value={admissionDetails.class}
        onChange={handleChange}
        id="class"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="">Select Class</option>
        {/* Add options for class levels */}
      </select>
    </div>

    {/* Section */}
    <div className="flex flex-col gap-2">
      <label htmlFor="section" className="font-bold text-graydark">
        Section
      </label>
      <input
        type="text"
        name="section"
        value={admissionDetails.section || 'A'}
        onChange={handleChange}
        id="section"
        placeholder="Section"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Admission Remark */}
    <div className="flex flex-col gap-2">
      <label htmlFor="admissionRemark" className="font-bold text-graydark">
        Admission Remark
      </label>
      <input
        type="text"
        name="admissionRemark"
        value={admissionDetails.admissionRemark}
        onChange={handleChange}
        id="admissionRemark"
        placeholder="Admission Remark"
        className="h-10 p-2 text-graydark outline-none"
      />
    </div>

    {/* Bus */}
    <div className="flex flex-col gap-2">
      <label htmlFor="bus" className="font-bold text-graydark">
        Bus
      </label>
      <select
        name="bus"
        value={admissionDetails.bus}
        onChange={handleChange}
        id="bus"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    {/* Hostel */}
    <div className="flex flex-col gap-2">
      <label htmlFor="hostel" className="font-bold text-graydark">
        Hostel
      </label>
      <select
        name="hostel"
        value={admissionDetails.hostel}
        onChange={handleChange}
        id="hostel"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    {/* Library */}
    <div className="flex flex-col gap-2">
      <label htmlFor="library" className="font-bold text-graydark">
        Library
      </label>
      <select
        name="library"
        value={admissionDetails.library}
        onChange={handleChange}
        id="library"
        className="h-10 p-2 text-graydark outline-none"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  </div>
  
  <div className="flex w-full justify-between px-10 py-5">
    <button
      className="w-40 bg-blue-600 p-2 font-bold text-white"
      onClick={() => setActivePage(activePage - 1)}
    >
      Prev
    </button>
    <button
      className="w-40 bg-blue-600 p-2 font-bold text-white"
      onClick={handleSubmit}
    >
      Save and Next
    </button>
  </div>
</div>

  )
}

export default AdmissionDetailsForm