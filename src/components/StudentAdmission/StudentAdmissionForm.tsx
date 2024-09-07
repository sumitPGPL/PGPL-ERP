"use client";
import React, { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import DocumentDetailsForm from "./DocumentDetailsForm";
import DocumentUploadForm from "./DocumentUploadForm";
import AdmissionDetailsForm from "./AdmissionDetailsForm";
import FamilyContactForm from "./FamilyContactForm";

type Props = {};

const StudentAdmissionForm = ({}: Props) => {
  const [personalDetails, setPersonalDetails] = useState({
    softwareId: "A123KL09",
    studentName: "",
    fatherName: "",
    MotherName: "",
    gender: "",
    handicapped: "",
    specialNeed: "",
    religion: "",
    category: "",
    rfIdNumber: "",
    dob: "",
    dobWord: "",
  });

  const [documentDetails, setDocumentDetails] = useState({
    adharStudent: "",
    adharFather: "",
    sssmId: "",
    familyId: "",
    childId: "",
    fatherBankName: "",
    fatherAccountNumber: "",
    fatherIfscCode: "",
    studentBankName: "",
    studentAccountNumber: "",
    studentIfscCode: "",
  });
  const [admissionDetails, setAdmissionDetails] = useState({
    admissionType: "",
    admissionScheme: "",
    studentType: "",
    board: "",
    dateOfAdmission: "",
    admissionNumber: "",
    scholarNumber: "",
    previousClass: "",
    previousSchoolName: "",
    class: "",
    section: "",
    admissionRemark: "",
    bus: "",
    hostel: "",
    library: "",
  });

  const [familyContacts, setFamilyContacts] = useState({
    fatherContactNo: "",
    fatherContact2: "",
    fatherEmail: "",
    motherContactNo: "",
    motherEmail: "",
    fatherOccupation: "",
    motherOccupation: "",
    guardianName: "",
    guardianContactNo: "",
    guardianEmail: "",
    guardianOccupation: "",
    studentContactNo: "",
    smsFacility: "",
    studentEmail: "",
  });
  const [documents, setDocuments] = useState({
    studentPhoto: "",
    fatherPhoto: "",
    motherPhoto: "",
    guardianPhoto: "",
    lastPassedMarksheet: "",
    transferCertificate: "",
    incomeCertificate: "",
    casteCertificate: "",
    dobCertificate: "",
    adharCard: "",
  });

  const [activePage, setActivePage] = useState(0);

  const formSubmit = () => {
    console.log(personalDetails);
    console.log(documentDetails);
    console.log(admissionDetails);
    console.log(familyContacts);
    console.log(documents);
  };

  return (
    <>
      {activePage === 0 && (
        <PersonalDetailsForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      )}

      {activePage === 1 && (
        <DocumentDetailsForm
          documentDetails={documentDetails}
          setDocumentDetails={setDocumentDetails}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      )}

      {activePage === 2 && (
        <AdmissionDetailsForm
          admissionDetails={admissionDetails}
          setAdmissionDetails={setAdmissionDetails}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      )}
      {activePage === 3 && (
        <FamilyContactForm
          familyContacts={familyContacts}
          setFamilyContacts={setFamilyContacts}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      )}

      {activePage === 4 && (
        <DocumentUploadForm
          documents={documents}
          setDocuments={setDocuments}
          setActivePage={setActivePage}
          activePage={activePage}
          formSubmit={formSubmit}
        />
      )}
    </>
  );
};

export default StudentAdmissionForm;
