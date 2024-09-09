import React from 'react';

type Student = {
  rollNumber: number;
  studentName: string;
  fatherName: string;
  studentClass: string;
  bloodGroup: string;
  contactNumber: string;
  imageUrl: string;  // New field for the student's image
};

const students: Student[] = [
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
    imageUrl: '/images/logo/logo.svg', 
  },
  {
    rollNumber: 2,
    studentName: 'Jane Smith',
    fatherName: 'Michael Smith',
    studentClass: '11th Grade',
    bloodGroup: 'O+',
    contactNumber: '987-654-3210',
    imageUrl: '/images/logo/logo.svg', 
  },
  // Add more students as needed...
];

const StudentCard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <div
          key={student.rollNumber}
          className="bg-black shadow-md  p-4 "
        >
          <img
            src={student.imageUrl}
            alt={student.studentName}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center">{student.studentName}</h2>
          <p className=" mb-1">
            <strong>Roll Number:</strong> {student.rollNumber}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Father's Name:</strong> {student.fatherName}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Class:</strong> {student.studentClass}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Blood Group:</strong> {student.bloodGroup}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Contact Number:</strong> {student.contactNumber}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
