"use client";
import React, { useState } from "react";

type Props = {};

const StudentRegistrationForm = ({}: Props) => {
 
  const [studentData, setStudentData] = useState({
    studentType: "",
    class: "",
    studentName: "",
    fatherName: "",
    fatherContact: "",
    fatherContact2: "",
    dob: "",
    dobword: "",
    gender: "",
    admissionDate: "",
    admissionType: "",
    admissionScheme: "",
    board: "",
    bus: "",
    hostel: "",
    library: "",
    registrationFees: "",
    smsContact: "",
    remarks: ["", "", "", ""],
    studentPhoto: "",
    fatherPhoto: "",
    motherPhoto: "",
  });

  console.log(studentData.remarks);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(studentData);
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="studentType" className="font-bold text-graydark ">
              Student Type
            </label>
            <select
              name="studentType"
              value={studentData.studentType}
              onChange={handleChange}
              required
              id="studentType"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Student Type</option>
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="class" className="font-bold text-graydark ">
              Class
            </label>
            <select
              name="class"
              value={studentData.class}
              onChange={handleChange}
              required
              id="class"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              {[...Array(12)].map((_, index) => (
                <option key={index + 1} value={`${index + 1}`}>
                  {index + 1}th
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="studentName" className="font-bold text-graydark ">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              required
              value={studentData.studentName}
              onChange={handleChange}
              id="studentName"
              placeholder="Student Name"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="fatherName" className="font-bold text-graydark ">
              Father&apos;s Name
            </label>
            <input
              type="text"
              name="fatherName"
              required
              value={studentData.fatherName}
              onChange={handleChange}
              id="fatherName"
              placeholder="Father Name"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="fatherContact" className="font-bold text-graydark ">
              Father&apos;s Contact
            </label>
            <input
              type="text"
              name="fatherContact"
              required
              value={studentData.fatherContact}
              onChange={handleChange}
              id="fatherContact"
              placeholder="Father Contact 1"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="fatherContact2"
              className="font-bold text-graydark "
            >
              Father&apos;s Alternate Contact
            </label>
            <input
              type="text"
              name="fatherContact2"
              value={studentData.fatherContact2}
              onChange={handleChange}
              id="fatherContact2"
              placeholder="Father Contact 2"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dob" className="font-bold text-graydark ">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              required
              value={studentData.dob}
              onChange={handleChange}
              id="dob"
              placeholder=""
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="DOBword" className="font-bold text-graydark ">
              Date of Birth (in words)
            </label>
            <input
              type="text"
              name="dobword"
              required
              value={studentData.dobword}
              onChange={handleChange}
              id="DOBword"
              placeholder="DOB in word"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-bold text-graydark ">
              Gender
            </label>
            <select
              name="gender"
              required
              value={studentData.gender}
              id="gender"
              className="h-10 p-2 text-graydark outline-none"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="admissionDate" className="font-bold text-graydark ">
              Admission Date
            </label>
            <input
              type="date"
              name="admissionDate"
              required
              value={studentData.admissionDate}
              onChange={handleChange}
              id="admissionDate"
              placeholder=""
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="admissionType" className="font-bold text-graydark ">
              Admission Type
            </label>
            <select
              name="admissionType"
              value={studentData.admissionType}
              onChange={handleChange}
              required
              id="admissionType"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Admission Type</option>
              <option value="regular">Regular</option>
              <option value="non-regular">Non-Regular</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="admissionScheme"
              className="font-bold text-graydark "
            >
              Admission Scheme
            </label>
            <select
              name="admissionScheme"
              value={studentData.admissionScheme}
              onChange={handleChange}
              id="admissionScheme"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Admission Scheme</option>
              <option value="Non-RTE">Non-RTE</option>
              <option value="RTE">RTE</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="board" className="font-bold text-graydark ">
              Board
            </label>
            <select
              name="board"
              id="board"
              value={studentData.board}
              onChange={handleChange}
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="State">State</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="bus" className="font-bold text-graydark ">
              Bus Facility
            </label>
            <select
              name="bus"
              value={studentData.bus}
              onChange={handleChange}
              id="bus"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hostel" className="font-bold text-graydark ">
              Hostel Facility
            </label>
            <select
              name="hostel"
              value={studentData.hostel}
              onChange={handleChange}
              id="hostel"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="library" className="font-bold text-graydark ">
              Library Facility
            </label>
            <select
              name="library"
              value={studentData.library}
              onChange={handleChange}
              id="library"
              className="h-10 p-2 text-graydark outline-none"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="registrationFees"
              className="font-bold text-graydark "
            >
              Registration Fees
            </label>
            <input
              type="number"
              name="registrationFees"
              required
              value={studentData.smsContact}
              onChange={handleChange}
              id="registrationFees"
              placeholder="Registration Fees"
              className="h-10 p-2 text-graydark outline-none"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "textfield",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="smsContact" className="font-bold text-graydark ">
              SMS Contact Number
            </label>
            <input
              type="number"
              name="registrationFees"
              required
              value={studentData.registrationFees}
              onChange={handleChange}
              id="registrationFees"
              placeholder="SMS Contact"
              className="h-10 p-2 text-graydark outline-none"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "textfield",
              }}
            />
          </div>
        </div>
        <div className=" mt-5 grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="studentPhoto" className="font-bold text-graydark ">
              Student Photo
            </label>
            <input
              type="file"
              name="studentPhoto"
              required
              value={studentData.studentPhoto}
              onChange={handleChange}
              id="studentPhoto"
              placeholder="Student Photo"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fatherPhoto" className="font-bold text-graydark ">
              Father Photo
            </label>
            <input
              type="file"
              name="fatherPhoto"
              required
              value={studentData.studentPhoto}
              onChange={handleChange}
              id="fatherPhoto"
              placeholder="Father Photo"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="MotherPhoto" className="font-bold text-graydark ">
              Mother Photo
            </label>
            <input
              type="file"
              name="MotherPhoto"
              required
              value={studentData.studentPhoto}
              onChange={handleChange}
              id="MotherPhoto"
              placeholder="Mother Photo"
              className="h-10 p-2 text-graydark outline-none"
            />
          </div>
        </div>
        <div className=" mt-5 grid grid-cols-4 gap-5">
          {[0, 1, 2, 3].map((val) => (
            <div key={val} className="flex flex-col gap-2">
              <label htmlFor="remarks" className="font-bold text-graydark ">
                Remark {val+1}
              </label>
              <input
                type="text"
                name="remarks"
                required
                value={studentData.remarks[val]}
                onChange={(e) => {
                  const updatedRemarks = [...studentData.remarks]; // Clone the existing remarks array
                  updatedRemarks[val] = e.target.value; // Update the specific index with the new value
                  setStudentData({ ...studentData, remarks: updatedRemarks }); // Update the state with the new remarks
                }}
                id="remarks"
                placeholder={`Remark ${val+1}`}
                className="h-10 p-2 text-graydark outline-none"
              />
            </div>
          ))}
        </div>
        <div className=" px-20  mt-8 w-full flex  items-center  justify-end ">
          <button
            onClick={handleSubmit}
            className="  w-20 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentRegistrationForm;
