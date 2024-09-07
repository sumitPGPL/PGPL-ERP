"use client";
import React from "react";

type Props = {
  personalDetails: any;
  setPersonalDetails: any;
  setActivePage: any;
  activePage: number;
};

const PersonalDetailsForm = ({
  personalDetails,
  setPersonalDetails,
  setActivePage,
  activePage,
}: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };
  const handleSubmit = () => {
    setActivePage(activePage + 1);
  };
  return (
    <div>
        <h1 className=" text-2xl font-bold my-5 ">Personal Details</h1>
      <div className="grid grid-cols-3 gap-10">
        {/* Student Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="studentName" className="font-bold text-graydark">
            Software Id
          </label>
          <input
            type="text"
            name="studentName"
            required
            value={personalDetails.softwareId}
            readOnly
            id="studentName"
            placeholder="Student Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="studentName" className="font-bold text-graydark">
            Student Name
          </label>
          <input
            type="text"
            name="studentName"
            required
            value={personalDetails.studentName}
            onChange={handleChange}
            id="studentName"
            placeholder="Student Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Father's Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fatherName" className="font-bold text-graydark">
            Father&apos;s Name
          </label>
          <input
            type="text"
            name="fatherName"
            required
            value={personalDetails.fatherName}
            onChange={handleChange}
            id="fatherName"
            placeholder="Father's Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Mother's Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="motherName" className="font-bold text-graydark">
            Mother&apos;s Name
          </label>
          <input
            type="text"
            name="motherName"
            required
            value={personalDetails.motherName}
            onChange={handleChange}
            id="motherName"
            placeholder="Mother's Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-graydark">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={personalDetails.gender === "male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={personalDetails.gender === "female"}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>
        </div>

        {/* Handicapped */}
        <div className="flex flex-col gap-2">
          <label htmlFor="handicapped" className="font-bold text-graydark">
            Handicapped
          </label>
          <select
            name="handicapped"
            value={personalDetails.handicapped}
            onChange={handleChange}
            required
            id="handicapped"
            className="h-10 p-2 text-graydark outline-none"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Child with Special Need */}
        <div className="flex flex-col gap-2">
          <label htmlFor="specialNeed" className="font-bold text-graydark">
            Child with Special Need
          </label>
          <select
            name="specialNeed"
            value={personalDetails.specialNeed}
            onChange={handleChange}
            required
            id="specialNeed"
            className="h-10 p-2 text-graydark outline-none"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Religion */}
        <div className="flex flex-col gap-2">
          <label htmlFor="religion" className="font-bold text-graydark">
            Religion
          </label>
          <select
            name="religion"
            value={personalDetails.religion}
            onChange={handleChange}
            required
            id="religion"
            className="h-10 p-2 text-graydark outline-none"
          >
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-bold text-graydark">
            Category
          </label>
          <select
            name="category"
            value={personalDetails.category}
            onChange={handleChange}
            required
            id="category"
            className="h-10 p-2 text-graydark outline-none"
          >
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </select>
        </div>

        {/* RF ID Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="rfIdNumber" className="font-bold text-graydark">
            Add RF ID Number
          </label>
          <input
            type="text"
            name="rfIdNumber"
            value={personalDetails.rfIdNumber}
            onChange={handleChange}
            id="rfIdNumber"
            placeholder=""
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="font-bold text-graydark">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={personalDetails.dob}
            onChange={handleChange}
            id="dob"
            className="h-10 p-2 text-graydark outline-none"
            required
          />
        </div>

        {/* Date of Birth in Word */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dobWord" className="font-bold text-graydark">
            Date of Birth (In Words)
          </label>
          <input
            type="text"
            name="dobWord"
            value={personalDetails.dobWord}
            onChange={handleChange}
            id="dobWord"
            placeholder="e.g., First of January, Two Thousand"
            className="h-10 p-2 text-graydark outline-none"
            required
          />
        </div>
      </div>
      <div className="   flex w-full  justify-end px-10 py-5">
        <button
          className=" w-40 bg-blue-600 p-2 font-bold text-white"
          onClick={handleSubmit}
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
