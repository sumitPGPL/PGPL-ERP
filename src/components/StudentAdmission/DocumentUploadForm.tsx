import React from "react";

type Props = {
  documents: any;
  setDocuments: any;
  setActivePage: any;
  activePage: number;
  formSubmit:any;
};

const DocumentUploadForm = ({
  documents,
  setDocuments,
  activePage,
  setActivePage,
  formSubmit
}: Props) => {
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setDocuments({ ...documents, [name]: value });
  };
  const handleSubmit = () => {
    // setActivePage(activePage + 1);
    formSubmit();
  };
  return (
    <div>
      <h1 className="my-5 text-2xl font-bold">Document Upload</h1>
      <div className="grid grid-cols-4 gap-10">
        {/* Student Photo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="studentPhoto" className="font-bold text-graydark">
            Student Photo
          </label>
          <input
            type="file"
            name="studentPhoto"
            onChange={handleFileChange}
            id="studentPhoto"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Father Photo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fatherPhoto" className="font-bold text-graydark">
            Father Photo
          </label>
          <input
            type="file"
            name="fatherPhoto"
            onChange={handleFileChange}
            id="fatherPhoto"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Mother Photo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="motherPhoto" className="font-bold text-graydark">
            Mother Photo
          </label>
          <input
            type="file"
            name="motherPhoto"
            onChange={handleFileChange}
            id="motherPhoto"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Guardian Photo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="guardianPhoto" className="font-bold text-graydark">
            Guardian Photo
          </label>
          <input
            type="file"
            name="guardianPhoto"
            onChange={handleFileChange}
            id="guardianPhoto"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Last Passed Marksheet */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastPassedMarksheet"
            className="font-bold text-graydark"
          >
            Last Passed Marksheet
          </label>
          <input
            type="file"
            name="lastPassedMarksheet"
            onChange={handleFileChange}
            id="lastPassedMarksheet"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Transfer Certificate */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="transferCertificate"
            className="font-bold text-graydark"
          >
            Transfer Certificate
          </label>
          <input
            type="file"
            name="transferCertificate"
            onChange={handleFileChange}
            id="transferCertificate"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Income Certificate */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="incomeCertificate"
            className="font-bold text-graydark"
          >
            Income Certificate
          </label>
          <input
            type="file"
            name="incomeCertificate"
            onChange={handleFileChange}
            id="incomeCertificate"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Caste Certificate */}
        <div className="flex flex-col gap-2">
          <label htmlFor="casteCertificate" className="font-bold text-graydark">
            Caste Certificate
          </label>
          <input
            type="file"
            name="casteCertificate"
            onChange={handleFileChange}
            id="casteCertificate"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* DOB Certificate */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dobCertificate" className="font-bold text-graydark">
            DOB Certificate
          </label>
          <input
            type="file"
            name="dobCertificate"
            onChange={handleFileChange}
            id="dobCertificate"
            className="h-10 p-2 text-graydark outline-none"
          />
        </div>

        {/* Adhar Card */}
        <div className="flex flex-col gap-2">
          <label htmlFor="adharCard" className="font-bold text-graydark">
            Adhar Card
          </label>
          <input
            type="file"
            name="adharCard"
            onChange={handleFileChange}
            id="adharCard"
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
