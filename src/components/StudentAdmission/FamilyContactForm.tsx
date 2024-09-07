import React from 'react'

type Props = {
    familyContacts: any;
  setFamilyContacts: any;
  setActivePage: any;
  activePage: number;
}

const FamilyContactForm = ({
    familyContacts,
    setFamilyContacts,
    setActivePage,
    activePage,
  }: Props) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      ) => {
        const { name, value } = e.target;
        setFamilyContacts({ ...familyContacts, [name]: value });
      };
      const handleSubmit = () => {
        setActivePage(activePage + 1);
      };
  return (
    <div>
    <h1 className="text-2xl font-bold my-5">Admission Details</h1>
    <div className="grid grid-cols-4 gap-10">
  
      {/* Father Contact Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fatherContactNo" className="font-bold text-graydark">
          Father&apos;s Contact Number
        </label>
        <input
          type="text"
          name="fatherContactNo"
          value={familyContacts.fatherContactNo}
          onChange={handleChange}
          id="fatherContactNo"
          placeholder="Father&apos;s Contact Number"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Father Contact Number 2 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fatherContact2" className="font-bold text-graydark">
          Father&apos;s Contact Number 2
        </label>
        <input
          type="text"
          name="fatherContact2"
          value={familyContacts.fatherContact2}
          onChange={handleChange}
          id="fatherContact2"
          placeholder="Father&apos;s Contact Number 2"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Father Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fatherEmail" className="font-bold text-graydark">
          Father&apos;s Email
        </label>
        <input
          type="email"
          name="fatherEmail"
          value={familyContacts.fatherEmail}
          onChange={handleChange}
          id="fatherEmail"
          placeholder="Father&apos;s Email"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Mother Contact Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="motherContactNo" className="font-bold text-graydark">
          Mother&apos;s Contact Number
        </label>
        <input
          type="text"
          name="motherContactNo"
          value={familyContacts.motherContactNo}
          onChange={handleChange}
          id="motherContactNo"
          placeholder="Mother&apos;s Contact Number"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Mother Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="motherEmail" className="font-bold text-graydark">
          Mother&apos;s Email
        </label>
        <input
          type="email"
          name="motherEmail"
          value={familyContacts.motherEmail}
          onChange={handleChange}
          id="motherEmail"
          placeholder="Mother&apos;s Email"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Father Occupation */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fatherOccupation" className="font-bold text-graydark">
          Father&apos;s Occupation
        </label>
        <input
          type="text"
          name="fatherOccupation"
          value={familyContacts.fatherOccupation}
          onChange={handleChange}
          id="fatherOccupation"
          placeholder="Father&apos;s Occupation"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Mother Occupation */}
      <div className="flex flex-col gap-2">
        <label htmlFor="motherOccupation" className="font-bold text-graydark">
          Mother&apos;s Occupation
        </label>
        <input
          type="text"
          name="motherOccupation"
          value={familyContacts.motherOccupation}
          onChange={handleChange}
          id="motherOccupation"
          placeholder="Mother&apos;s Occupation"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Guardian Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="guardianName" className="font-bold text-graydark">
          Guardian&apos;s Name
        </label>
        <input
          type="text"
          name="guardianName"
          value={familyContacts.guardianName}
          onChange={handleChange}
          id="guardianName"
          placeholder="Guardian&apos;s Name"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Guardian Contact Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="guardianContactNo" className="font-bold text-graydark">
          Guardian&apos;s Contact Number
        </label>
        <input
          type="text"
          name="guardianContactNo"
          value={familyContacts.guardianContactNo}
          onChange={handleChange}
          id="guardianContactNo"
          placeholder="Guardian&apos;s Contact Number"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Guardian Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="guardianEmail" className="font-bold text-graydark">
          Guardian&apos;s Email
        </label>
        <input
          type="email"
          name="guardianEmail"
          value={familyContacts.guardianEmail}
          onChange={handleChange}
          id="guardianEmail"
          placeholder="Guardian&apos;s Email"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Guardian Occupation */}
      <div className="flex flex-col gap-2">
        <label htmlFor="guardianOccupation" className="font-bold text-graydark">
          Guardian&apos;s Occupation
        </label>
        <input
          type="text"
          name="guardianOccupation"
          value={familyContacts.guardianOccupation}
          onChange={handleChange}
          id="guardianOccupation"
          placeholder="Guardian&apos;s Occupation"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* Student Contact Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="studentContactNo" className="font-bold text-graydark">
          Student&apos;s Contact Number
        </label>
        <input
          type="text"
          name="studentContactNo"
          value={familyContacts.studentContactNo}
          onChange={handleChange}
          id="studentContactNo"
          placeholder="Student&apos;s Contact Number"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
  
      {/* SMS Facility */}
      <div className="flex flex-col gap-2">
        <label htmlFor="smsFacility" className="font-bold text-graydark">
          SMS Facility
        </label>
        <select
          name="smsFacility"
          value={familyContacts.smsFacility}
          onChange={handleChange}
          id="smsFacility"
          className="h-10 p-2 text-graydark outline-none"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
  
      {/* Student Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="studentEmail" className="font-bold text-graydark">
          Student&apos;s Email
        </label>
        <input
          type="email"
          name="studentEmail"
          value={familyContacts.studentEmail}
          onChange={handleChange}
          id="studentEmail"
          placeholder="Student&apos;s Email"
          className="h-10 p-2 text-graydark outline-none"
        />
      </div>
    </div>
  
    <div className="flex w-full justify-between px-10 py-5">
      <button
        className="w-40 bg-blue-600 p-2 font-bold text-white"
        onClick={() => {
          setActivePage(activePage - 1);
        }}
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

export default FamilyContactForm