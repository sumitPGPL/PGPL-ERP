'use client'
import React, { useState } from 'react'

const SchoolForm = ({ onAddSchool }) => {
  const [schoolData, setSchoolData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
   
    email: '',
    headOfInstitution: {
      name: '',
      designation: '',
      phone: '',
      email: '',
    },
    affiliation: {
      number: '',
      validTill: '',
    },
    schoolUpto: {
      prePrimary: false,
      primary: false,
      middleSchool: false,
      higher: false,
    },
    logo: null,
    shortName: '',
    preregisterCode: {
      staff: '',
      student: '',
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSchoolData({
      ...schoolData,
      [name]: value,
    })
  }

  const handleHeadOfInstitutionChange = (e) => {
    const { name, value } = e.target
    setSchoolData({
      ...schoolData,
      headOfInstitution: {
        ...schoolData.headOfInstitution,
        [name]: value,
      },
    })
  }

  const handleAffiliationChange = (e) => {
    const { name, value } = e.target
    setSchoolData({
      ...schoolData,
      affiliation: {
        ...schoolData.affiliation,
        [name]: value,
      },
    })
  }

  const handleSchoolUptoChange = (e) => {
    const { name, checked } = e.target
    setSchoolData({
      ...schoolData,
      schoolUpto: {
        ...schoolData.schoolUpto,
        [name]: checked,
      },
    })
  }

  const handleFileChange = (e) => {
    setSchoolData({
      ...schoolData,
      logo: e.target.files[0],
    })
  }

  const handlePreregisterCodeChange = (e) => {
    const { name, value } = e.target
    setSchoolData({
      ...schoolData,
      preregisterCode: {
        ...schoolData.preregisterCode,
        [name]: value,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSchool = { ...schoolData, id: Date.now().toString() }
    onAddSchool(newSchool)
    setSchoolData({
      name: '',
      address: '',
      phoneNumber: '',
      connectionEstablishment: '',
      email: '',
      headOfInstitution: {
        name: '',
        designation: '',
        phone: '',
        email: '',
      },
      affiliation: {
        number: '',
        validTill: '',
      },
      schoolUpto: {
        prePrimary: false,
        primary: false,
        middleSchool: false,
        higher: false,
      },
      logo: null,
      shortName: '',
      preregisterCode: {
        staff: '',
        student: '',
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Existing fields */}
      <div>
        <label className="block text-gray-700">School Name:</label>
        <input
          type="text"
          name="name"
          value={schoolData.name}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div>
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          name="address"
          value={schoolData.address}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div>
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={schoolData.phoneNumber}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      

      <div>
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={schoolData.email}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Head of Institution:</label>
        
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={schoolData.headOfInstitution.name}
            onChange={handleHeadOfInstitutionChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Designation:</label>
          <input
            type="text"
            name="designation"
            value={schoolData.headOfInstitution.designation}
            onChange={handleHeadOfInstitutionChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={schoolData.headOfInstitution.phone}
            onChange={handleHeadOfInstitutionChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={schoolData.headOfInstitution.email}
            onChange={handleHeadOfInstitutionChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Affiliation:</label>
        
        <div>
          <label className="block text-gray-700">Affiliation Number:</label>
          <input
            type="text"
            name="number"
            value={schoolData.affiliation.number}
            onChange={handleAffiliationChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Affiliation Valid Till:</label>
          <input
            type="date"
            name="validTill"
            value={schoolData.affiliation.validTill}
            onChange={handleAffiliationChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">School Upto:</label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="prePrimary"
                checked={schoolData.schoolUpto.prePrimary}
                onChange={handleSchoolUptoChange}
                className="form-checkbox"
              />
              <span className="ml-2">Pre-Primary</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="primary"
                checked={schoolData.schoolUpto.primary}
                onChange={handleSchoolUptoChange}
                className="form-checkbox"
              />
              <span className="ml-2">Primary</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="middleSchool"
                checked={schoolData.schoolUpto.middleSchool}
                onChange={handleSchoolUptoChange}
                className="form-checkbox"
              />
              <span className="ml-2">Middle School</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="higher"
                checked={schoolData.schoolUpto.higher}
                onChange={handleSchoolUptoChange}
                className="form-checkbox"
              />
              <span className="ml-2">Higher</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Logo:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div>
        <label className="block text-gray-700">Short Name:</label>
        <input
          type="text"
          name="shortName"
          value={schoolData.shortName}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Preregister Code:</label>

        <div>
          <label className="block text-gray-700">Staff Code (Prefix F):</label>
          <input
            type="text"
            name="staff"
            value={schoolData.preregisterCode.staff}
            onChange={handlePreregisterCodeChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Student Code (Prefix S):</label>
          <input
            type="text"
            name="student"
            value={schoolData.preregisterCode.student}
            onChange={handlePreregisterCodeChange}
            className="px-4 py-2 border rounded-lg w-full"
          />
        </div>
      </div>

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Add School
      </button>
    </form>
  )
}

export default SchoolForm
