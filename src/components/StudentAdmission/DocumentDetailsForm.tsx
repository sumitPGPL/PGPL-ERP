import React from "react";

type Props = {
  documentDetails: any;
  setDocumentDetails: any;
  setActivePage: any;
  activePage: number;
};

const DocumentDetailsForm = ({
  documentDetails,
  setDocumentDetails,
  setActivePage,
  activePage,
}: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setDocumentDetails({ ...documentDetails, [name]: value });
  };
  const handleSubmit = () => {
    setActivePage(activePage + 1);
  };
  return (
    <div>
      <h1 className=" my-5 text-2xl font-bold ">Document Details</h1>
      <div className="grid grid-cols-3 gap-10">
        {/* Adhar Number - Student */}
        <div className="flex flex-col gap-2">
          <label htmlFor="adharStudent" className="font-bold text-graydark">
            Student&apos;s Adhar Number
          </label>
          <input
            type="text"
            name="adharStudent"
            value={documentDetails.adharStudent}
            onChange={handleChange}
            id="adharStudent"
            placeholder="Adhar Number"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Adhar Number - Father */}
        <div className="flex flex-col gap-2">
          <label htmlFor="adharFather" className="font-bold text-graydark">
            Father&apos;s Adhar Number
          </label>
          <input
            type="text"
            name="adharFather"
            value={documentDetails.adharFather}
            onChange={handleChange}
            id="adharFather"
            placeholder="Father's Adhar Number"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* SSSM ID Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="sssmId" className="font-bold text-graydark">
            SSSM ID Number
          </label>
          <input
            type="text"
            name="sssmId"
            value={documentDetails.sssmId}
            onChange={handleChange}
            id="sssmId"
            placeholder="SSSM ID Number"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Family ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="familyId" className="font-bold text-graydark">
            Family ID
          </label>
          <input
            type="text"
            name="familyId"
            value={documentDetails.familyId}
            onChange={handleChange}
            id="familyId"
            placeholder="Family ID"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Child ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="childId" className="font-bold text-graydark">
            Child ID
          </label>
          <input
            type="text"
            name="childId"
            value={documentDetails.childId}
            onChange={handleChange}
            id="childId"
            placeholder="Child ID"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Father&apos;s Bank Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fatherBankName" className="font-bold text-graydark">
            Father&apos;s Bank Name
          </label>
          <input
            type="text"
            name="fatherBankName"
            value={documentDetails.fatherBankName}
            onChange={handleChange}
            id="fatherBankName"
            placeholder="Father's Bank Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Father&apos;s Account Number */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fatherAccountNumber"
            className="font-bold text-graydark"
          >
            Father&apos;s Account Number
          </label>
          <input
            type="text"
            name="fatherAccountNumber"
            value={documentDetails.fatherAccountNumber}
            onChange={handleChange}
            id="fatherAccountNumber"
            placeholder="Father's Account Number"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Father&apos;s Bank IFSC Code */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fatherIfscCode" className="font-bold text-graydark">
            Father&apos;s Bank IFSC Code
          </label>
          <input
            type="text"
            name="fatherIfscCode"
            value={documentDetails.fatherIfscCode}
            onChange={handleChange}
            id="fatherIfscCode"
            placeholder="Father's IFSC Code"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Student&apos;s Bank Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="studentBankName" className="font-bold text-graydark">
            Student&apos;s Bank Name
          </label>
          <input
            type="text"
            name="studentBankName"
            value={documentDetails.studentBankName}
            onChange={handleChange}
            id="studentBankName"
            placeholder="Student's Bank Name"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Student&apos;s Account Number */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="studentAccountNumber"
            className="font-bold text-graydark"
          >
            Student&apos;s Account Number
          </label>
          <input
            type="text"
            name="studentAccountNumber"
            value={documentDetails.studentAccountNumber}
            onChange={handleChange}
            id="studentAccountNumber"
            placeholder="Student's Account Number"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Student&apos;s Bank IFSC Code */}
        <div className="flex flex-col gap-2">
          <label htmlFor="studentIfscCode" className="font-bold text-graydark">
            Student&apos;s Bank IFSC Code
          </label>
          <input
            type="text"
            name="studentIfscCode"
            value={documentDetails.studentIfscCode}
            onChange={handleChange}
            id="studentIfscCode"
            placeholder="Student's IFSC Code"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>
      </div>
      <div className=" flex   w-full justify-between   px-10 py-5">
        <button
          className=" w-40 bg-blue-600 p-2 font-bold text-white"
          onClick={() => {
            setActivePage(activePage - 1);
          }}
        >
          Prev
        </button>
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

export default DocumentDetailsForm;
