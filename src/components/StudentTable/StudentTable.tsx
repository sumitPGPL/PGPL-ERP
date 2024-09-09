import React from 'react';

type Student = {
  rollNumber: number;
  studentName: string;
  fatherName: string;
  studentClass: string;
  bloodGroup: string;
  contactNumber: string;
};

const students: Student[] = [
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber:1001,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 1,
    studentName: 'John Doe',
    fatherName: 'Mark Doe',
    studentClass: '10th Grade',
    bloodGroup: 'A+',
    contactNumber: '123-456-7890',
  },
  {
    rollNumber: 2,
    studentName: 'Jane Smith',
    fatherName: 'Michael Smith',
    studentClass: '11th Grade',
    bloodGroup: 'O+',
    contactNumber: '987-654-3210',
  },
  // Add more students here...
];

const StudentTable: React.FC = () => {
  // Calculate the number of students
  const totalStudents = students.length;

  return (
    <div className="container text-black mx-auto ">

     
      <div className=' text-white'>
      <h1 className="text-2xl font-bold mb-2">Student List</h1>
 
      <p className="text-lg mb-4">Total Students: {totalStudents}</p>
      </div>
      {/* Student Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Roll Number</th>
            <th className="py-2 px-4 border-b">Student Name</th>
            <th className="py-2 px-4 border-b">Father's Name</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">Blood Group</th>
            <th className="py-2 px-4 border-b">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNumber}>
              <td className="py-2 px-4 border-b text-center">{student.rollNumber}</td>
              <td className="py-2 px-4 border-b">{student.studentName}</td>
              <td className="py-2 px-4 border-b">{student.fatherName}</td>
              <td className="py-2 px-4 border-b text-center">{student.studentClass}</td>
              <td className="py-2 px-4 border-b text-center">{student.bloodGroup}</td>
              <td className="py-2 px-4 border-b">{student.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
